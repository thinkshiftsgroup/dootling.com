"use client";

import {
  useState,
  FormEvent,
  useRef,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import authApi from "@/api/auth";
import axios from "axios";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [step, setStep] = useState<"email" | "code" | "password">("email");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = (e: string) => emailRegex.test(e.trim());
  const validatePassword = (p: string) => p.length >= 6;

  // 🐛 FIX: Re-adding the missing function definition
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error on change
    if (error) setError("");
  };
  // ---------------------------------------------------

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    setError("");

    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      await authApi.post("/auth/forgot-password", { email });
      setMessage("Password reset code sent to your email. Check your inbox.");
      setStep("code");
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err) {
      let errorMessage = "Failed to send reset code. Please try again.";
      if (axios.isAxiosError(err) && err.response) {
        errorMessage = err.response.data.message || errorMessage;
      }

      if (
        errorMessage.includes("not found") ||
        !axios.isAxiosError(err) ||
        (axios.isAxiosError(err) && err.response?.status === 500)
      ) {
        setMessage(
          "If an account exists, a password reset code has been sent."
        );
        setStep("code");
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCodeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const codeValue = otp.join("");
    setError("");

    if (codeValue.length !== 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    setIsSubmitting(true);

    try {
      setMessage("Code accepted. Enter your new password below.");
      setStep("password");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      let errorMessage =
        "Invalid or expired verification code. Please try again.";
      if (axios.isAxiosError(err) && err.response) {
        errorMessage = err.response.data.message || errorMessage;
      }
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setPasswordMismatch(false);

    if (!validatePassword(newPassword) || !validatePassword(confirmPassword)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setPasswordMismatch(true);
      return;
    }

    setIsSubmitting(true);
    const codeValue = otp.join("");

    try {
      await authApi.post("/auth/reset-password", {
        email: email,
        code: codeValue,
        newPassword: newPassword,
      });

      setMessage("Password successfully reset! Redirecting to login...");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      let errorMessage = "Failed to reset password. The code may have expired.";
      if (axios.isAxiosError(err) && err.response) {
        errorMessage = err.response.data.message || errorMessage;
      }
      setError(errorMessage);
      setStep("email");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderEmailStep = () => (
    <>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/dootling-icon.svg"
            alt="Dootling Logo"
            width={120}
            height={50}
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Forgot Your Password?
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Enter your email address to receive a 6-digit code for password reset.
        </p>
      </div>

      <form
        onSubmit={handleEmailSubmit}
        className="space-y-6 w-full"
        noValidate
      >
        {error && (
          <div className="text-red-600 font-medium p-3 bg-red-100 border border-red-400 rounded-lg text-center">
            {error}
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-900 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange} // <-- This is where the function is used
            onBlur={() =>
              setError(
                validateEmail(email)
                  ? ""
                  : "Please enter a valid email address."
              )
            }
            placeholder="marvin@example.com"
            className={`w-full h-12 px-4 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            required
            maxLength={255}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !email.trim()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? "SENDING CODE..." : "SEND RESET CODE"}
        </button>

        <p className="text-center text-gray-900">
          Remember your password?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Back to Login
          </Link>
        </p>
      </form>
    </>
  );

  const renderCodeStep = () => (
    <>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/dootling-icon.svg"
            alt="Dootling Logo"
            width={200}
            height={50}
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Verify Reset Code</h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Enter the 6-digit code sent to{" "}
          <span className="font-semibold text-gray-800 block">{email}</span>
        </p>
      </div>

      <form onSubmit={handleCodeSubmit} className="space-y-6 w-full" noValidate>
        {(error || message) && (
          <div
            className={`font-medium p-3 border rounded-lg text-center ${
              error
                ? "text-red-600 bg-red-100 border-red-400"
                : "text-green-600 bg-green-100 border-green-400"
            }`}
          >
            {error || message}
          </div>
        )}

        <div className="flex justify-center gap-2 lg:gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el: any) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              onFocus={(e) => e.target.select()}
              className={`w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                error
                  ? "border-red-500 bg-red-50"
                  : digit
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-white"
              }`}
              autoComplete="off"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || otp.join("").length !== 6}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? "VERIFYING..." : "VERIFY CODE"}
        </button>

        <p className="text-center text-gray-900">
          <button
            type="button"
            onClick={() => setStep("email")}
            className="text-blue-600 hover:underline font-medium"
            disabled={isSubmitting}
          >
            ← Change Email
          </button>
        </p>
      </form>
    </>
  );

  const renderPasswordStep = () => (
    <>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/dootling-icon.svg"
            alt="Dootling Logo"
            width={200}
            height={50}
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Set New Password</h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Your code has been verified. Enter and confirm your new password.
        </p>
      </div>

      <form
        onSubmit={handlePasswordSubmit}
        className="space-y-6 w-full"
        noValidate
      >
        {(error || message) && (
          <div
            className={`font-medium p-3 border rounded-lg text-center ${
              error
                ? "text-red-600 bg-red-100 border-red-400"
                : "text-green-600 bg-green-100 border-green-400"
            }`}
          >
            {error || message}
          </div>
        )}

        <div>
          <label
            htmlFor="newPassword"
            className="block text-gray-900 font-medium mb-2"
          >
            New Password (min 6 characters)
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setPasswordMismatch(false);
              setError("");
            }}
            placeholder="••••••"
            className={`w-full h-12 px-4 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              passwordMismatch ||
              (error && error.includes("match")) ||
              (newPassword && !validatePassword(newPassword))
                ? "border-red-500"
                : "border-gray-300"
            }`}
            required
            minLength={6}
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-900 font-medium mb-2"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordMismatch(false);
              setError("");
            }}
            placeholder="••••••"
            className={`w-full h-12 px-4 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              passwordMismatch ||
              (error && error.includes("match")) ||
              (confirmPassword && newPassword !== confirmPassword)
                ? "border-red-500"
                : "border-gray-300"
            }`}
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            newPassword.length < 6 ||
            newPassword !== confirmPassword
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? "UPDATING..." : "SAVE NEW PASSWORD"}
        </button>
      </form>
    </>
  );

  return (
    <>
      <Head>
        <title>Forgot Password - Dootling</title>
        <meta
          name="description"
          content="Reset your password to regain access to your Dootling account."
        />
        <link rel="shortcut icon" href="/images/dootling-icon.svg" />
      </Head>

      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md w-full space-y-8 form-container">
            {step === "email" && renderEmailStep()}
            {step === "code" && renderCodeStep()}
            {step === "password" && renderPasswordStep()}
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-sky-400 to-blue-600 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <Image
                src="/images/people.png"
                alt="Connect with Confidence illustration"
                width={1024}
                height={683}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="text-white space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Connect with Confidence
              </h1>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                Where People and Work Connect with Confidence
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-container {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .logo-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

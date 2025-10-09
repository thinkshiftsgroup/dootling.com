"use client";

import {
  useState,
  useEffect,
  useRef,
  FormEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import authApi from "@/api/auth";

interface VerifyResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export default function VerifyOTPPage() {
  const router = useRouter();
  const loginUser = useAuthStore((state) => state.login);
  const unverifiedEmail = useAuthStore((state) => state.unverifiedEmail);
  const clearUnverifiedEmail = useAuthStore(
    (state) => state.clearUnverifiedEmail
  );

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!unverifiedEmail) {
      router.push("/signup");
      alert("Please sign up or request a verification code first.");
    }
  }, [unverifiedEmail, router]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
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

  const handleResend = async () => {
    if (!canResend || !unverifiedEmail) return;

    try {
      await authApi.post("/auth/resend-verification", {
        email: unverifiedEmail,
      });

      alert("Verification code sent successfully!");
      setTimeLeft(60);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to resend code. Try again later."
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    if (!unverifiedEmail) {
      setError("Verification email missing. Please go back to sign up.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await authApi.post<VerifyResponse>(
        "/auth/verify-email",
        {
          email: unverifiedEmail,
          code: otpValue,
        }
      );

      if (response.data.token && response.data.user) {
        loginUser(response.data.token, {
          ...response.data.user,
          name: response.data.user.name,
        });

        clearUnverifiedEmail();

        router.push("/profile");
      } else {
        setError("Verification failed: Invalid server response.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Invalid or expired verification code."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Verify Code - Dootling</title>
        <meta
          name="description"
          content="Enter your verification code to complete your Dootling account setup."
        />
        <link rel="shortcut icon" href="/images/dootling-icon.svg" />
      </Head>

      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md w-full space-y-8 form-container">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/images/dootling.svg"
                  alt="Dootling Logo"
                  width={200}
                  height={50}
                  priority
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  Verify Your Code
                </h2>
                <p className="text-gray-600 text-sm lg:text-base">
                  Please enter the 6-digit code sent to
                  <span className="font-semibold text-gray-800 block">
                    {unverifiedEmail || "your email"}
                  </span>
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full"
              noValidate
            >
              <div className="flex justify-center gap-2 lg:gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el: any) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    onFocus={(e) => e.target.select()}
                    className={`w-14 h-14 text-center text-2xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      digit
                        ? "border-blue-600 bg-blue-50"
                        : error
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                    }`}
                    autoComplete="off"
                  />
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Didn&apos;t receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={!canResend || isSubmitting}
                    className={`font-medium ${
                      canResend && !isSubmitting
                        ? "text-blue-600 hover:underline cursor-pointer"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {canResend ? "Resend Code" : `Resend (${timeLeft}s)`}
                  </button>
                </p>
              </div>

              <button
                type="submit"
                disabled={
                  isSubmitting || !unverifiedEmail || otp.join("").length !== 6
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "VERIFYING..." : "VERIFY CODE"}
              </button>

              <p className="text-center text-gray-900">
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  ← Back to Login
                </Link>
              </p>
            </form>
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

"use client";

import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="hidden border-t bg-white text-gray-700 md:block">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link
                href="/dashboard/privacy-policy"
                className="hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/terms-of-service"
                className="hover:text-gray-900 transition-colors"
              >
                Terms of Use
              </Link>
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-center md:justify-end text-gray-600">
            <span>Copyright © {year}</span>
            <Link
              href="/"
              className="mx-1 font-semibold text-gray-800 hover:text-gray-900"
            >
              SocialV
            </Link>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

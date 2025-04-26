"use client"

import Link from "next/link"

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              dreamclerk
            </Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/faq" className="text-gray-500 hover:text-gray-800 text-sm">
              FAQ
            </Link>
            <Link href="/support" className="text-gray-500 hover:text-gray-800 text-sm">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-800 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-800 text-sm">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">© {currentYear} Dreamclerk</p>
        </div>
      </div>
    </footer>
  )
}

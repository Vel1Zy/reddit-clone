import Link from 'next/link'
import React from 'react'

export default function AboutUsNavBar() {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center content-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orangered">
          Reddit Clone
        </Link>

        {/* Navigation Links */}
        <div className="flex content-center items-center space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="/subreddit" className="hover:text-gray-300">
            Subreddits
          </Link>
          <button className="bg-orangered hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-l">
            <a href="/">Visit Reddit</a>
          </button>
        </div>
      </div>
    </nav>
  )
}

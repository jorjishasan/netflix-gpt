import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 px-4 py-8 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">MovieDock</h3>
            <p className="mb-4">
              Discover your next favorite movie with AI-powered recommendations.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 transition-colors hover:text-white">
                <FaFacebookF />
              </button>
              <button className="text-gray-400 transition-colors hover:text-white">
                <FaTwitter />
              </button>
              <button className="text-gray-400 transition-colors hover:text-white">
                <FaInstagram />
              </button>
              <button className="text-gray-400 transition-colors hover:text-white">
                <FaYoutube />
              </button>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/browse"
                  className="transition-colors hover:text-white"
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  to="/genres"
                  className="transition-colors hover:text-white"
                >
                  Genres
                </Link>
              </li>
              <li>
                <Link
                  to="/watchlist"
                  className="transition-colors hover:text-white"
                >
                  My Watchlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Help & Support
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Newsletter
            </h4>
            <p className="mb-4">
              Stay updated with the latest movies and features.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-l-md bg-gray-800 px-4 py-2 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-md bg-red-700 px-4 py-2 text-white transition-colors hover:bg-red-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 MovieDock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-artverse-dark py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">ArtVerse</h3>
            <p className="mt-4 text-sm text-gray-300">
              Connecting local artists with art enthusiasts. Bring your imagination to life through artist interpretations and AI-generated previews.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Discover</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/artists" className="text-gray-300 hover:text-white">
                  Find Artists
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-gray-300 hover:text-white">
                  Browse Artwork
                </Link>
              </li>
              <li>
                <Link to="/commission" className="text-gray-300 hover:text-white">
                  Commission Custom Art
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} ArtVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

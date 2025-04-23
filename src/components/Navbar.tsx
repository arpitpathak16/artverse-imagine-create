
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Image, User, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-artverse-purple to-artverse-deepPurple bg-clip-text text-2xl font-bold text-transparent">
            ArtVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                to="/artists"
                className="text-gray-700 transition hover:text-artverse-purple"
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                to="/commission"
                className="text-gray-700 transition hover:text-artverse-purple"
              >
                Commission Art
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="text-gray-700 transition hover:text-artverse-purple"
              >
                Art Store
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 transition hover:text-artverse-purple"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
            aria-label="User profile"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && isMobile && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            <li>
              <Link
                to="/artists"
                className="block py-2 text-gray-700 transition hover:text-artverse-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                to="/commission"
                className="block py-2 text-gray-700 transition hover:text-artverse-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Commission Art
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="block py-2 text-gray-700 transition hover:text-artverse-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Art Store
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-700 transition hover:text-artverse-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="flex space-x-4 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="flex"
                aria-label="User profile"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="flex"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

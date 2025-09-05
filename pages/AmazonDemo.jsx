import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Moon,
  Search,
  ShoppingCart,
  MapPin,
  User,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

// Demo comment

// Demo Pages
import AmazonHomePage from "../components/amazon-demo/pages/AmazonHomePage";
import AmazonProductsPage from "../components/amazon-demo/pages/AmazonProductsPage";
import AmazonCheckoutPage from "../components/amazon-demo/pages/AmazonCheckoutPage";

const DemoHeader = ({ page, setPage, toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-20 z-30 bg-[#131921] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              className="text-2xl font-bold"
              onClick={() => setPage("home")}
            >
              amazon
            </button>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <div>
                <p className="text-xs">Deliver to</p>
                <p className="font-bold text-sm">New York</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-grow max-w-2xl mx-4">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search Amazon"
                className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
              />
              <Button className="bg-[#FEBD69] hover:bg-[#f3a847] text-black rounded-r-md rounded-l-none">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Button
              variant="ghost"
              className={`hover:bg-white/10 ${
                page === "home" ? "bg-white/10" : ""
              }`}
              onClick={() => setPage("home")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className={`hover:bg-white/10 ${
                page === "products" ? "bg-white/10" : ""
              }`}
              onClick={() => setPage("products")}
            >
              Products
            </Button>
            <Button
              variant="ghost"
              className={`hover:bg-white/10 ${
                page === "checkout" ? "bg-white/10" : ""
              }`}
              onClick={() => setPage("checkout")}
            >
              Checkout
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-white/10"
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>
            <div className="flex items-center gap-2">
              <ShoppingCart />
              <span>0</span>
            </div>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#232f3e] p-4 space-y-3">
          <Button
            variant="ghost"
            className={`w-full justify-start ${
              page === "home" ? "bg-white/10" : ""
            }`}
            onClick={() => {
              setPage("home");
              setIsMenuOpen(false);
            }}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className={`w-full justify-start ${
              page === "products" ? "bg-white/10" : ""
            }`}
            onClick={() => {
              setPage("products");
              setIsMenuOpen(false);
            }}
          >
            Products
          </Button>
          <Button
            variant="ghost"
            className={`w-full justify-start ${
              page === "checkout" ? "bg-white/10" : ""
            }`}
            onClick={() => {
              setPage("checkout");
              setIsMenuOpen(false);
            }}
          >
            Checkout
          </Button>
        </div>
      )}
    </header>
  );
};

const DemoFooter = () => (
  <footer className="bg-[#232f3e] text-white">
    <div className="bg-[#37475a] py-4">
      <p className="text-center text-sm">Back to top</p>
    </div>
    <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-bold mb-3">Get to Know Us</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3">Make Money with Us</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Become an Affiliate</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3">Amazon Payment Products</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3">Let Us Help You</h4>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
        </ul>
      </div>
    </div>
    <div className="bg-[#131921] py-6 text-center text-xs text-gray-400">
      <p>
        © 1996-2024, Amazon.com, Inc. or its affiliates (Conceptual Redesign)
      </p>
    </div>
  </footer>
);

export default function AmazonDemo({ setView, theme, toggleTheme }) {
  const [page, setPage] = useState("home");

  // Auto-scroll to top when page changes within demo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "products":
        return <AmazonProductsPage />;
      case "checkout":
        return <AmazonCheckoutPage />;
      case "home":
      default:
        return <AmazonHomePage />;
    }
  };

  return (
    <div className="font-sans antialiased pt-20">
      <DemoHeader
        page={page}
        setPage={setPage}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <main className="bg-background text-foreground">{renderPage()}</main>
      <DemoFooter />
    </div>
  );
}

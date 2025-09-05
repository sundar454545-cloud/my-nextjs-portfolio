import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sundarkarthik A. All Rights Reserved.
          </p>
          <div className="font-bold text-xl text-foreground">
            <span className="text-primary">S</span>K.
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="border-border hover:bg-background"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

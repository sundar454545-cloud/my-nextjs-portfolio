import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation({ theme, toggleTheme, view, setView }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    if (view === 'portfolio') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  const scrollToSection = (sectionId) => {
    setView('portfolio');
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.offsetTop - navHeight;
          window.scrollTo({ 
            top: elementPosition, 
            behavior: 'smooth' 
          });
        }
    }, 100);
  };
  
  const handleLogoClick = () => {
    if (view === 'portfolio') {
      scrollToSection('home');
    } else {
      setView('portfolio');
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="font-bold text-2xl text-foreground cursor-pointer"
            onClick={handleLogoClick}
          >
            <span className="text-primary">S</span>K.
          </motion.div>

          <div className="flex items-center gap-4">
            {view !== 'portfolio' ? (
              <Button
                variant="ghost"
                onClick={() => setView('portfolio')}
                className="text-muted-foreground hover:text-foreground font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            ) : (
              <Button
                variant="ghost"
                onClick={() => setView('caseStudy')}
                className="text-muted-foreground hover:text-foreground font-medium text-base"
              >
                Case Study
              </Button>
            )}
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Contact Me
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
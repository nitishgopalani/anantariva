"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig, navigation } from "@/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setLanguageOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-navy text-white text-center py-2 px-4 text-sm font-medium">
        {siteConfig.announcementBar}
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-navy text-lg tracking-tight">
                  Anantariva
                </span>
                <span className="hidden md:block text-gray-400 text-xs -mt-1">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
              {navigation.main.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={cn(
                          "flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                          openDropdown === item.name
                            ? "text-navy bg-gray-50"
                            : "text-gray-600 hover:text-navy hover:bg-gray-50"
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform",
                            openDropdown === item.name && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 mt-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                              >
                                <span className="block text-sm font-medium text-navy">
                                  {child.name}
                                </span>
                                {child.description && (
                                  <span className="block text-xs text-gray-500 mt-0.5">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                        pathname === item.href
                          ? "text-navy bg-gray-50"
                          : "text-gray-600 hover:text-navy hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search, Language & CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-navy transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-50"
                aria-label="Search"
              >
                <Search className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium">Search</span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  onBlur={() => setTimeout(() => setLanguageOpen(false), 150)}
                  className="flex items-center gap-2 text-gray-600 hover:text-navy transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-50"
                  aria-label="Language"
                >
                  <Globe className="h-5 w-5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-medium">GLOBAL - EN</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", languageOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
                    >
                      <button className="w-full px-4 py-2 text-left text-sm font-medium text-navy bg-gray-50">
                        English
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50">
                        Hindi
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button variant="gold" asChild>
                <Link href="/contact">{siteConfig.ctas.primary}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navigation.main.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-600 rounded-lg hover:bg-gray-50"
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name
                            )
                          }
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              openDropdown === item.name && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-gray-500 hover:text-navy rounded-lg hover:bg-gray-50"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg font-medium transition-colors",
                          pathname === item.href
                            ? "text-navy bg-gray-50"
                            : "text-gray-600 hover:text-navy hover:bg-gray-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <button
                    onClick={() => {
                      setSearchOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    <Search className="h-5 w-5" />
                    Search
                  </button>
                  <Button variant="gold" className="w-full" asChild>
                    <Link href="/contact">{siteConfig.ctas.primary}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 right-0 z-[70] bg-white shadow-lg border-b border-gray-100"
            >
              <div className="container mx-auto px-4 lg:px-8 py-4">
                <div className="flex items-center gap-3 max-w-2xl mx-auto">
                  <Search className="h-6 w-6 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search insights, services, pages..."
                    className="flex-1 py-3 text-base bg-transparent border-0 outline-none placeholder:text-gray-400 text-navy"
                    aria-label="Search"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-2 text-gray-500 hover:text-navy hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 max-w-2xl mx-auto pl-9">
                  Press Enter to search, Esc to close
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

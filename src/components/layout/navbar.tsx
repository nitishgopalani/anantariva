"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig, navigation } from "@/content";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const GOOGLE_COOKIE_KEY = "googtrans";
type LanguageCode = "EN" | "HI" | "ES" | "AR" | "FR" | "RU" | "ZH";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("EN");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pendingLanguageRef = useRef<LanguageCode | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const languageOptions: Array<{ code: LanguageCode; label: string; googleCode: string; flag: string }> = [
    { code: "EN", label: "English", googleCode: "en", flag: "🇬🇧" },
    { code: "HI", label: "Hindi", googleCode: "hi", flag: "🇮🇳" },
    { code: "ES", label: "Spanish", googleCode: "es", flag: "🇪🇸" },
    { code: "AR", label: "Arabic", googleCode: "ar", flag: "🇸🇦" },
    { code: "FR", label: "French", googleCode: "fr", flag: "🇫🇷" },
    { code: "RU", label: "Russian", googleCode: "ru", flag: "🇷🇺" },
    { code: "ZH", label: "Chinese", googleCode: "zh-CN", flag: "🇨🇳" },
  ];

  const FlagIcon = ({ code }: { code: LanguageCode }) => {
    const base = "h-4 w-6 shrink-0 rounded-sm overflow-hidden";
    switch (code) {
      case "EN":
        // United Kingdom (Union Jack — simplified)
        return (
          <svg
            className={base}
            viewBox="0 0 60 30"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="UK flag"
          >
            <clipPath id="ukClip"><rect width="60" height="30" /></clipPath>
            <g clipPath="url(#ukClip)">
              <rect width="60" height="30" fill="#012169" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
              <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
              <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
            </g>
          </svg>
        );
      case "HI":
        // India (saffron/white/green + simple blue wheel)
        return (
          <svg className={base} viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="India flag">
            <rect width="24" height="16" fill="#FFFFFF" />
            <rect width="24" height="5.33" fill="#FF9933" />
            <rect y="10.67" width="24" height="5.33" fill="#138808" />
            <circle cx="12" cy="8" r="2.3" fill="none" stroke="#000080" strokeWidth="1.2" />
            <circle cx="12" cy="8" r="1.2" fill="#000080" />
          </svg>
        );
      case "ES":
        // Spain (red-yellow-red)
        return (
          <svg className={base} viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spain flag">
            <rect width="24" height="16" fill="#AA151B" />
            <rect y="5.333" width="24" height="5.333" fill="#F1BF00" />
            <rect y="10.666" width="24" height="5.333" fill="#AA151B" />
          </svg>
        );
      case "AR":
        // Saudi Arabia (green + simple emblem approximation)
        return (
          <svg className={base} viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Saudi flag">
            <rect width="24" height="16" fill="#007A3D" />
            <rect x="1" y="1" width="22" height="3" fill="#FFFFFF" opacity="0.15" />
            <rect x="1" y="12" width="22" height="3" fill="#FFFFFF" opacity="0.15" />
            <circle cx="12" cy="8" r="2.2" fill="none" stroke="#FFFFFF" strokeWidth="1.1" opacity="0.9" />
          </svg>
        );
      case "FR":
        // France (blue-white-red vertical)
        return (
          <svg className={base} viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="France flag">
            <rect width="8" height="16" fill="#0055A4" />
            <rect x="8" width="8" height="16" fill="#FFFFFF" />
            <rect x="16" width="8" height="16" fill="#EF4135" />
          </svg>
        );
      case "RU":
        // Russia (white-blue-red horizontal)
        return (
          <svg className={base} viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Russia flag">
            <rect width="24" height="5.333" fill="#FFFFFF" />
            <rect y="5.333" width="24" height="5.333" fill="#0039A6" />
            <rect y="10.666" width="24" height="5.334" fill="#D52B1E" />
          </svg>
        );
      case "ZH":
        // China (red with stylised stars)
        return (
          <svg className={base} viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="China flag">
            <rect width="24" height="16" fill="#DE2910" />
            <g fill="#FFDE00">
              <circle cx="5" cy="5" r="1.6" />
              <circle cx="9" cy="3" r="0.7" />
              <circle cx="10.2" cy="5" r="0.7" />
              <circle cx="10" cy="7.4" r="0.7" />
              <circle cx="8.5" cy="8.6" r="0.7" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };
  const activeLanguage =
    languageOptions.find((option) => option.code === selectedLanguage) || languageOptions[0];

  const searchItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#experts" },
    { label: "Our Presence", href: "/footprints" },
    { label: "Services", href: "/services" },
    { label: "Partners & Clients", href: "/clients-partnerships" },
    { label: "Insights", href: "/insights" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Knowledge Repository", href: "/knowledge" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Investors", href: "/investors" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Services - Industries", href: "/services#industries" },
    { label: "Services - Delivery Approach", href: "/services#approach" },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredSearchItems = normalizedQuery
    ? searchItems.filter((item) =>
        item.label.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const handleSearchNavigate = (href: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    router.push(href);
  };

  const applyGoogleLanguage = (code: LanguageCode) => {
    if (typeof window === "undefined") return;

    const target = languageOptions.find((option) => option.code === code)?.googleCode || "en";
    const cookieValue = `/auto/${target}`;
    document.documentElement.lang = target;
    document.cookie = `${GOOGLE_COOKIE_KEY}=${cookieValue}; path=/; max-age=31536000`;
    document.cookie = `${GOOGLE_COOKIE_KEY}=${cookieValue}; domain=.${window.location.hostname}; path=/; max-age=31536000`;

    const triggerTranslate = () => {
      const translateSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (!translateSelect) return false;
      translateSelect.value = target;
      translateSelect.dispatchEvent(new Event("change"));
      translateSelect.dispatchEvent(new Event("input"));
      return true;
    };

    if (triggerTranslate()) {
      pendingLanguageRef.current = null;
      return;
    }

    pendingLanguageRef.current = code;
  };

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSelectedLanguage("EN");
    pendingLanguageRef.current = "EN";
    applyGoogleLanguage("EN");

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,es,ar,fr,ru,zh-CN",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      const currentLanguage: LanguageCode = "EN";
      pendingLanguageRef.current = currentLanguage;

      let attempts = 0;
      const maxAttempts = 40;
      const waitForTranslateWidget = () => {
        attempts += 1;
        const widgetFound = !!document.querySelector(".goog-te-combo");
        if (widgetFound) {
          applyGoogleLanguage(pendingLanguageRef.current || currentLanguage);
          return;
        }
        if (attempts < maxAttempts) {
          window.setTimeout(waitForTranslateWidget, 150);
        }
      };
      waitForTranslateWidget();
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      const fallbackLanguage: LanguageCode = "EN";
      pendingLanguageRef.current = fallbackLanguage;
      window.setTimeout(() => applyGoogleLanguage(fallbackLanguage), 0);
    }
  }, []);

  useEffect(() => {
    window.setTimeout(() => applyGoogleLanguage(selectedLanguage), 50);
  }, [pathname, selectedLanguage]);

  useEffect(() => {
    // If translator widget mounts later, apply pending language immediately.
    const observer = new MutationObserver(() => {
      if (document.querySelector(".goog-te-combo") && pendingLanguageRef.current) {
        applyGoogleLanguage(pendingLanguageRef.current);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
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
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-32 h-16 lg:w-40 lg:h-20 overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo/Anantavira%202.png"
                  alt="Anantariva logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
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
                          "flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap",
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
                        "px-4 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap",
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
                  <span className="inline-flex items-center gap-2">
                    <FlagIcon code={activeLanguage.code} />
                    <span className="text-sm font-medium">{activeLanguage.label}</span>
                  </span>
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
                      {languageOptions.map((option) => (
                        <button
                          key={option.code}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setSelectedLanguage(option.code);
                            applyGoogleLanguage(option.code);
                            setLanguageOpen(false);
                          }}
                          className={cn(
                            "w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                            selectedLanguage === option.code
                              ? "font-medium text-navy bg-gray-50"
                              : "text-gray-600"
                          )}
                        >
                          <span className="inline-flex items-center gap-2">
                            <FlagIcon code={option.code} />
                            <span>{option.label}</span>
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button variant="gold" asChild>
                <Link href="/about">{siteConfig.ctas.primary}</Link>
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
              <div className="container mx-auto px-4 max-w-7xl py-4 space-y-2">
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
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-0 z-[70] pt-4 px-4 lg:pt-8"
            >
              <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200/80 bg-white/95 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="flex items-center gap-3 px-4 md:px-5 py-3.5 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                    <Search className="h-5 w-5 text-navy/70 flex-shrink-0" strokeWidth={1.8} />
                  </div>
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && filteredSearchItems.length > 0) {
                        e.preventDefault();
                        handleSearchNavigate(filteredSearchItems[0].href);
                      }
                    }}
                    placeholder="Search pages, services, insights..."
                    className="flex-1 py-2 text-base bg-transparent border-0 outline-none placeholder:text-gray-400 text-navy"
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
                <div className="px-4 md:px-5 py-2.5 bg-gray-50/70 border-b border-gray-100">
                  <p className="text-xs text-gray-500">
                    Press <span className="font-semibold text-gray-700">Enter</span> to open first result,{" "}
                    <span className="font-semibold text-gray-700">Esc</span> to close
                  </p>
                </div>
                {normalizedQuery ? (
                  <div className="px-3 md:px-4 py-3 max-h-[50vh] overflow-y-auto">
                    {filteredSearchItems.length > 0 ? (
                      <div className="space-y-1.5">
                        {filteredSearchItems.slice(0, 8).map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleSearchNavigate(item.href)}
                            className="w-full text-left px-3 py-2.5 rounded-xl border border-transparent hover:border-gold/30 hover:bg-gold/5 text-sm text-navy transition-colors"
                          >
                            <span className="font-medium">{item.label}</span>
                            <span className="block text-xs text-gray-500 mt-0.5">{item.href}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 px-3 py-4">
                        No results found for &quot;{searchQuery}&quot;.
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="px-4 md:px-5 py-5">
                    <p className="text-sm text-gray-500">
                      Try searching for <span className="text-navy font-medium">Services</span>,{" "}
                      <span className="text-navy font-medium">Insights</span>,{" "}
                      <span className="text-navy font-medium">Careers</span> or{" "}
                      <span className="text-navy font-medium">Contact</span>.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div id="google_translate_element" className="hidden" aria-hidden />
    </>
  );
}

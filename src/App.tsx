import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Globe, ChevronDown, Zap } from "lucide-react";

import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { useLayout } from "./hooks/useLayout";
import { navCategories } from "./constants/navigation";
import { cn } from "./lib/utils";

// Pages
import HomePage from "./pages/HomePage";
import ImageConverter from "./pages/ImageConverter";
import PdfTools from "./pages/PdfTools";
import ExtensionTools from "./pages/ExtensionTools";
import QrGenerator from "./pages/QrGenerator";
import Base64Tool from "./pages/Base64Tool";
import UrlTool from "./pages/UrlTool";
import JsonTool from "./pages/JsonTool";
import PassGen from "./pages/PassGen";
import WordCount from "./pages/WordCount";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

function Layout() {
  const {
    t,
    i18n,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isLangMenuOpen,
    setIsLangMenuOpen,
    activeDropdown,
    setActiveDropdown,
    dropdownRef,
    changeLanguage,
    pathname,
  } = useLayout();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0C0E] flex flex-col font-sans selection:bg-primary-500/30 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5" ref={dropdownRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-gray-900 dark:text-white font-bold text-xl">
                M
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                {t("common.fileStation").split(" ")[0]}{" "}
                <span className="text-primary-500">
                  {t("common.fileStation").split(" ").slice(1).join(" ")}
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 items-center text-sm font-medium text-gray-600 dark:text-gray-400">
              <Link
                to="/"
                className={cn(
                  "transition-colors flex items-center",
                  pathname === "/" ? "text-primary-500" : "hover:text-primary-500"
                )}
              >
                {t("nav.home")}
              </Link>
              
              {navCategories.map((category, idx) => (
                <div key={idx} className="relative">
                  <button
                    onClick={() => {
                      setActiveDropdown(activeDropdown === category.name ? null : category.name);
                      setIsLangMenuOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors p-2",
                      activeDropdown === category.name ? "text-gray-900 dark:text-white" : ""
                    )}
                  >
                    {t(category.nameKey)}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === category.name ? "rotate-180" : "")} />
                  </button>

                  {activeDropdown === category.name && (
                    <div className="absolute top-full start-0 mt-2 bg-white dark:bg-[#16181D] border border-gray-100 dark:border-white/5 rounded-xl shadow-xl py-2 min-w-[240px] isolate z-50 animate-in fade-in slide-in-from-top-2">
                       {category.items.map(item => {
                         const IconComponent = item.icon;
                         return (
                           <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                              "w-full text-start px-4 py-3 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex items-center",
                              pathname === item.path ? "text-primary-500 bg-primary-500/5" : "text-gray-700 dark:text-gray-300"
                            )}
                           >
                             <IconComponent className="w-4 h-4 me-3" />
                             {t(item.nameKey)}
                           </Link>
                         );
                       })}
                    </div>
                  )}
                </div>
              ))}

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                     setIsLangMenuOpen(!isLangMenuOpen);
                     setActiveDropdown(null);
                  }}
                  className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors p-2"
                >
                  <Globe className="w-5 h-5" />
                  <span className="uppercase">{i18n.language.split('-')[0]}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full end-0 mt-2 bg-white dark:bg-[#16181D] border border-gray-100 dark:border-white/5 rounded-xl shadow-lg py-2 min-w-[120px] isolate z-50 animate-in fade-in slide-in-from-top-2">
                    <button onClick={() => changeLanguage('en')} className="w-full text-start px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5 data-[active=true]:text-primary-500 transition-colors text-gray-700 dark:text-gray-300" data-active={i18n.language.startsWith('en')}>English</button>
                    <button onClick={() => changeLanguage('ar')} className="w-full text-start px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5 data-[active=true]:text-primary-500 transition-colors text-gray-700 dark:text-gray-300" data-active={i18n.language.startsWith('ar')}>العربية</button>
                    <button onClick={() => changeLanguage('ru')} className="w-full text-start px-4 py-2 hover:bg-gray-50 dark:hover:bg-white/5 data-[active=true]:text-primary-500 transition-colors text-gray-700 dark:text-gray-300" data-active={i18n.language.startsWith('ru')}>Русский</button>
                  </div>
                )}
              </div>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => {
                  if (i18n.language.startsWith('en')) changeLanguage('ar');
                  else if (i18n.language.startsWith('ar')) changeLanguage('ru');
                  else changeLanguage('en');
                }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase text-sm font-bold"
              >
                {i18n.language.startsWith('en') ? 'AR' : i18n.language.startsWith('ar') ? 'RU' : 'EN'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
           <div className="lg:hidden bg-white dark:bg-[#16181D] border-b border-gray-200 dark:border-white/5 px-4 pt-4 pb-6 space-y-4 shadow-xl overflow-y-auto max-h-[80vh]">
             <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center",
                  pathname === "/"
                    ? "bg-primary-500/10 text-primary-500"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                )}
              >
                <Zap className="w-5 h-5 me-3" />
                {t("nav.home")}
              </Link>

              {navCategories.map((category, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                    {t(category.nameKey)}
                  </div>
                  {category.items.map(item => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center",
                          pathname === item.path
                            ? "bg-primary-500/10 text-primary-500"
                            : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                        )}
                      >
                        <IconComponent className="w-4 h-4 me-3" />
                        {t(item.nameKey)}
                      </Link>
                    );
                  })}
                </div>
              ))}
           </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-[#0B0C0E] border-t border-gray-200 dark:border-white/5 py-8 mt-auto h-12 flex items-center transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-500 dark:text-gray-600">
          <p>{t("common.allRightsReserved")} &copy; {new Date().getFullYear()} Adel Mohamed</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link to="/terms" className="hover:text-primary-500 transition-colors">{t("common.terms")}</Link>
            <Link to="/privacy" className="hover:text-primary-500 transition-colors">{t("common.privacy")}</Link>
            <Link to="/support" className="hover:text-primary-500 transition-colors">{t("common.support")}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="file-station-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="image-converter" element={<ImageConverter />} />
            <Route path="pdf-tools" element={<PdfTools />} />
            <Route path="extension-tools" element={<ExtensionTools />} />
            <Route path="qr-generator" element={<QrGenerator />} />
            <Route path="base64-tool" element={<Base64Tool />} />
            <Route path="url-tool" element={<UrlTool />} />
            <Route path="json-tool" element={<JsonTool />} />
            <Route path="pass-gen" element={<PassGen />} />
            <Route path="word-count" element={<WordCount />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

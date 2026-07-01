import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useLayout() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Synchronize document direction and lang attributes with current translation
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Click outside to close menus
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Path change closes menus
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const isRtl = i18n.dir() === 'rtl';

  return {
    t,
    i18n,
    isRtl,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isLangMenuOpen,
    setIsLangMenuOpen,
    activeDropdown,
    setActiveDropdown,
    dropdownRef,
    changeLanguage,
    pathname: location.pathname,
  };
}

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

  // Dynamic SEO metadata synchronization (Title, Meta Description, Canonical URL)
  useEffect(() => {
    const appName = t("common.fileStation");
    let pageTitle = appName;
    let pageDesc = t("home.subtitle");

    switch (location.pathname) {
      case "/pdf-tools":
        pageTitle = `${t("pdfTools.title")} | ${appName}`;
        pageDesc = t("pdfTools.desc");
        break;
      case "/image-converter":
        pageTitle = `${t("imageConverter.title")} | ${appName}`;
        pageDesc = t("imageConverter.desc");
        break;
      case "/extension-tools":
        pageTitle = `${t("extensionTools.title")} | ${appName}`;
        pageDesc = t("extensionTools.desc");
        break;
      case "/qr-generator":
        pageTitle = `${t("qrGenerator.title")} | ${appName}`;
        pageDesc = t("qrGenerator.desc");
        break;
      case "/base64-tool":
        pageTitle = `${t("base64Tool.title")} | ${appName}`;
        pageDesc = t("base64Tool.desc");
        break;
      case "/url-tool":
        pageTitle = `${t("urlTool.title")} | ${appName}`;
        pageDesc = t("urlTool.desc");
        break;
      case "/json-tool":
        pageTitle = `${t("jsonTool.title")} | ${appName}`;
        pageDesc = t("jsonTool.desc");
        break;
      case "/pass-gen":
        pageTitle = `${t("passGen.title")} | ${appName}`;
        pageDesc = t("passGen.desc");
        break;
      case "/word-count":
        pageTitle = `${t("wordCount.title")} | ${appName}`;
        pageDesc = t("wordCount.desc");
        break;
      case "/terms":
        pageTitle = `${t("terms.title")} | ${appName}`;
        pageDesc = t("terms.p1");
        break;
      case "/privacy":
        pageTitle = `${t("privacy.title")} | ${appName}`;
        pageDesc = t("privacy.p1");
        break;
      case "/support":
        pageTitle = `${t("support.title")} | ${appName}`;
        pageDesc = t("support.desc");
        break;
      default:
        pageTitle = appName;
        pageDesc = t("home.subtitle");
    }

    document.title = pageTitle;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", pageDesc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", pageDesc);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `${window.location.origin}${location.pathname}`);
    }
  }, [location.pathname, i18n.language, t]);

  // Click outside to close dropdown menus
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

  const isRtl = i18n.dir() === "rtl";

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

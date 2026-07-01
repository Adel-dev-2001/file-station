import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { 
  FileText, 
  Image as ImageIcon, 
  Files, 
  FileCog, 
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  MousePointerClick,
  UploadCloud,
  Download,
  QrCode,
  Binary,
  Link2,
  Braces,
  KeyRound,
  Type
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    {
      name: "Documents & Files",
      tools: [
        {
          title: t("home.features.pdf.title"),
          description: t("home.features.pdf.desc"),
          icon: <FileText className="w-8 h-8 text-blue-500" />,
          path: "/pdf-tools",
          color: "bg-blue-500/10",
        },
        {
          title: t("home.features.image.title"),
          description: t("home.features.image.desc"),
          icon: <ImageIcon className="w-8 h-8 text-emerald-500" />,
          path: "/image-converter",
          color: "bg-emerald-500/10",
        },
        {
          title: t("home.features.extension.title"),
          description: t("home.features.extension.desc"),
          icon: <FileCog className="w-8 h-8 text-orange-500" />,
          path: "/extension-tools",
          color: "bg-orange-500/10",
        },
      ]
    },
    {
      name: "Developer Tools",
      tools: [
        {
          title: t("home.features.json.title"),
          description: t("home.features.json.desc"),
          icon: <Braces className="w-8 h-8 text-yellow-500" />,
          path: "/json-tool",
          color: "bg-yellow-500/10",
        },
        {
          title: t("home.features.url.title"),
          description: t("home.features.url.desc"),
          icon: <Link2 className="w-8 h-8 text-blue-400" />,
          path: "/url-tool",
          color: "bg-blue-400/10",
        },
        {
          title: t("home.features.base64.title"),
          description: t("home.features.base64.desc"),
          icon: <Binary className="w-8 h-8 text-cyan-500" />,
          path: "/base64-tool",
          color: "bg-cyan-500/10",
        },
      ]
    },
    {
      name: "Utilities",
      tools: [
        {
          title: t("home.features.pass.title"),
          description: t("home.features.pass.desc"),
          icon: <KeyRound className="w-8 h-8 text-red-500" />,
          path: "/pass-gen",
          color: "bg-red-500/10",
        },
        {
          title: t("home.features.qr.title"),
          description: t("home.features.qr.desc"),
          icon: <QrCode className="w-8 h-8 text-pink-500" />,
          path: "/qr-generator",
          color: "bg-pink-500/10",
        },
        {
          title: t("home.features.wordCountFeature.title"),
          description: t("home.features.wordCountFeature.desc"),
          icon: <Type className="w-8 h-8 text-indigo-500" />,
          path: "/word-count",
          color: "bg-indigo-500/10",
        },
      ]
    }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-32 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6 pt-16"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center justify-center p-2 bg-primary-500/10 text-primary-500 rounded-full mb-4 px-4 text-sm font-semibold tracking-wide border border-primary-500/20"
        >
          {t("home.tag")}
        </motion.div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          {t("home.title1")} <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">{t("home.title2")}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {t("home.subtitle")}
        </p>
      </motion.div>

      {/* Tools Categories Grid */}
      <div className="space-y-24">
        {categories.map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{category.name}</h2>
              <div className="flex-1 h-[1px] bg-white/10 mt-2"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link to={tool.path} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-3xl">
                    <Card className="h-full hover:bg-white/[0.02] hover:border-primary-500/30 transition-all duration-300 bg-white dark:bg-[#16181D]">
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${tool.color}`}>
                          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2, ease: "easeInOut" }}>
                            {tool.icon}
                          </motion.div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary-400 transition-colors tracking-tight">
                          {tool.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {tool.description}
                        </CardDescription>
                        <div className="mt-8 flex items-center text-primary-500 font-bold text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                          <span>{t("common.startUsing")}</span>
                          <ArrowIcon className={`w-4 h-4 mx-2 transition-transform ${isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* How it Works Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-8"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-center mb-16 text-gray-900 dark:text-white">{t("home.howItWorks.title")}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[2.5rem] start-[15%] w-[70%] h-[2px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -z-10" />
          
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-white dark:bg-[#0F1115] border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary-400 shadow-xl relative">
              <span className="absolute -top-3 -end-3 w-8 h-8 rounded-full bg-primary-500 text-gray-900 dark:text-white flex items-center justify-center font-bold text-sm">1</span>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <MousePointerClick className="w-10 h-10" />
              </motion.div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("home.howItWorks.step1Title")}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("home.howItWorks.step1Desc")}</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-white dark:bg-[#0F1115] border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary-400 shadow-xl relative">
              <span className="absolute -top-3 -end-3 w-8 h-8 rounded-full bg-primary-500 text-gray-900 dark:text-white flex items-center justify-center font-bold text-sm">2</span>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.2 }}>
                <UploadCloud className="w-10 h-10" />
              </motion.div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("home.howItWorks.step2Title")}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("home.howItWorks.step2Desc")}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-white dark:bg-[#0F1115] border border-gray-200 dark:border-white/10 flex items-center justify-center text-primary-400 shadow-xl relative">
              <span className="absolute -top-3 -end-3 w-8 h-8 rounded-full bg-primary-500 text-gray-900 dark:text-white flex items-center justify-center font-bold text-sm">3</span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.4 }}>
                <Download className="w-10 h-10" />
              </motion.div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t("home.howItWorks.step3Title")}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("home.howItWorks.step3Desc")}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Section for SEO & Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-8 bg-white/[0.01] border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-black text-center mb-16 text-gray-900 dark:text-white">{t("home.why.title")}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                <ShieldCheck className="w-8 h-8" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("home.why.secureTitle")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t("home.why.secureDesc")}</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}>
                <Zap className="w-8 h-8" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("home.why.fastTitle")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t("home.why.fastDesc")}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.4 }}>
                <Award className="w-8 h-8" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t("home.why.freeTitle")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t("home.why.freeDesc")}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-8 pb-16 max-w-3xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-black text-center mb-12 text-gray-900 dark:text-white">{t("home.faq.title")}</motion.h2>
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="bg-white dark:bg-[#16181D] border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{t("home.faq.q1")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("home.faq.a1")}</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white dark:bg-[#16181D] border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{t("home.faq.q2")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("home.faq.a2")}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white dark:bg-[#16181D] border border-gray-200 dark:border-white/5 p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{t("home.faq.q3")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t("home.faq.a3")}</p>
          </motion.div>
        </div>
      </motion.div>
      
    </div>
  );
}

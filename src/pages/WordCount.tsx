import React from 'react';
import { useTranslation } from 'react-i18next';
import { Type, Eraser } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { useWordCount } from '../hooks/useWordCount';

export default function WordCount() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const {
    text,
    setText,
    words,
    chars,
    charsNoSpaces,
    sentences,
    paragraphs,
    clear,
  } = useWordCount();

  const stats = [
    { label: t("wordCount.words"), value: words },
    { label: t("wordCount.chars"), value: chars },
    { label: t("wordCount.charsNoSpaces"), value: charsNoSpaces },
    { label: t("wordCount.sentences"), value: sentences },
    { label: t("wordCount.paragraphs"), value: paragraphs },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-in mt-8 md:mt-12 mb-20 text-gray-900 dark:text-white">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <Type className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{t("wordCount.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("wordCount.desc")}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className={`p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 text-center flex flex-col items-center justify-center ${idx === 0 ? 'col-span-2 md:col-span-1 border-indigo-500/40 bg-indigo-500/10' : ''}`}>
            <div className="text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">{stat.value.toLocaleString(i18n.language)}</div>
            <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-[#16181D]">
        <div className="py-3 px-4 border-b border-gray-200 dark:border-white/5 flex justify-end">
          <button 
            onClick={clear}
            disabled={!text}
            className="flex items-center text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-red-400 disabled:opacity-50 disabled:hover:text-gray-600 dark:text-gray-400 transition-colors"
          >
            <Eraser className="w-4 h-4" />
            <span className={isRtl ? 'mr-1' : 'ml-1'}>{t("wordCount.clearBtn")}</span>
          </button>
        </div>
        <CardContent className="p-0 relative flex flex-col min-h-[400px]">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t("wordCount.inputPlaceholder")}
            className="w-full h-full min-h-[400px] bg-transparent border-0 text-gray-700 dark:text-gray-300 focus:ring-0 outline-none resize-y text-lg p-6 leading-relaxed"
            dir="auto"
          />
        </CardContent>
      </Card>
    </div>
  );
}

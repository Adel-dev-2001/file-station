import React from 'react';
import { useTranslation } from 'react-i18next';
import { Braces, Copy, CheckCircle2, Check, X } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useJsonTool } from '../hooks/useJsonTool';

export default function JsonTool() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const {
    input,
    handleInputChange,
    output,
    isValid,
    isCopied,
    copy,
    processJson,
  } = useJsonTool();

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-in mt-8 md:mt-12 mb-20 text-gray-900 dark:text-white">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-yellow-500/10 text-yellow-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <Braces className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{t("jsonTool.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("jsonTool.desc")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="h-full border-gray-200 dark:border-white/10 bg-black/20 flex flex-col">
          <CardContent className="pt-6 relative flex flex-col flex-1 h-[500px]">
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={t("jsonTool.inputPlaceholder")}
              className="w-full h-full min-h-[400px] bg-transparent border-0 text-gray-700 dark:text-gray-300 focus:ring-0 outline-none resize-none font-mono text-sm sm:text-base leading-relaxed p-0"
              dir="ltr"
              spellCheck={false}
            />
          </CardContent>
          <div className="bg-gray-100 dark:bg-white/5 border-t border-gray-200 dark:border-white/5 p-3 flex gap-3">
            <Button 
              onClick={() => processJson(false)} 
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-gray-900 dark:text-white"
            >
              {t("jsonTool.formatBtn")}
            </Button>
            <Button 
              onClick={() => processJson(true)} 
              variant="outline"
              className="flex-1 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {t("jsonTool.minifyBtn")}
            </Button>
          </div>
        </Card>

        <Card className={`h-full border-gray-200 dark:border-white/10 flex flex-col ${isValid === false ? 'bg-red-500/5' : 'bg-white dark:bg-[#16181D]'}`}>
          <div className={`py-3 px-4 border-b flex justify-between items-center ${isValid === false ? 'border-red-500/20' : 'border-gray-200 dark:border-white/5'}`}>
            <div className="flex items-center gap-2">
              {isValid === true && <span className="flex items-center text-emerald-500 text-sm font-bold"><Check className="w-4 h-4 mr-1" /> {t("jsonTool.valid")}</span>}
              {isValid === false && <span className="flex items-center text-red-500 text-sm font-bold"><X className="w-4 h-4 mr-1" /> {t("jsonTool.error")}</span>}
              {isValid === null && <span className="text-gray-500 text-sm font-bold">Output</span>}
            </div>
            {isValid === true && output && (
                <button 
                  onClick={() => copy(output)}
                  className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 flex items-center text-xs font-semibold bg-gray-100 dark:bg-white/5 px-3 py-1 rounded"
                >
                  {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span className={isRtl ? 'mr-1' : 'ml-1'}>{isCopied ? t("jsonTool.copied") : t("jsonTool.copyBtn")}</span>
                </button>
            )}
          </div>
          <CardContent className="pt-4 relative flex flex-col flex-1 h-[440px] overflow-auto">
            <div className={`font-mono text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-all pl-1 ${isValid === false ? 'text-red-400' : 'text-emerald-400'}`} dir="ltr">
              {output}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyRound, RefreshCw, Copy, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';

export default function PassGen() {
  const { t } = useTranslation();

  const {
    password,
    length,
    setLength,
    incUpper,
    setIncUpper,
    incLower,
    setIncLower,
    incNumbers,
    setIncNumbers,
    incSymbols,
    setIncSymbols,
    isCopied,
    generate,
    handleCopy,
  } = usePasswordGenerator();

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in mt-8 md:mt-12 mb-20 text-gray-900 dark:text-white">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <KeyRound className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{t("passGen.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("passGen.desc")}</p>
      </div>

      <Card className="border-gray-200 dark:border-white/10 bg-white dark:bg-[#16181D]">
        <CardContent className="pt-6 space-y-8">
          
          <div className="relative group">
            <div className={`p-6 rounded-xl border flex items-center justify-between font-mono text-2xl tracking-wider select-all ${password ? 'border-red-500/30 bg-red-500/5 text-gray-900 dark:text-white' : 'border-gray-200 dark:border-white/10 bg-black/20 text-gray-500'} break-all`} dir="ltr">
              {password || '---'}
            </div>
            {password && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <button
                  title="Regenerate"
                  onClick={generate}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white bg-black/40 rounded hover:bg-black/80 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button
                  title="Copy"
                  onClick={handleCopy}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-400 bg-black/40 rounded hover:bg-black/80 transition-colors"
                >
                   {isCopied ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t("passGen.length")}</label>
                <span className="text-sm font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded">{length}</span>
              </div>
              <input 
                type="range" 
                min="6" 
                max="64" 
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-red-500 cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: t("passGen.uppercase"), state: incUpper, set: setIncUpper },
                { label: t("passGen.lowercase"), state: incLower, set: setIncLower },
                { label: t("passGen.numbers"), state: incNumbers, set: setIncNumbers },
                { label: t("passGen.symbols"), state: incSymbols, set: setIncSymbols },
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-white/5 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  <input 
                    type="checkbox" 
                    checked={item.state} 
                    onChange={(e) => item.set(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-600 bg-black/40 text-red-500 focus:ring-red-500 focus:ring-offset-gray-900"
                  />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 select-none">{item.label}</span>
                </label>
              ))}
            </div>
            
            <Button 
              onClick={generate} 
              className="w-full bg-red-600 hover:bg-red-700 text-gray-900 dark:text-white py-6 text-lg font-bold"
            >
               {t("passGen.generateBtn")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

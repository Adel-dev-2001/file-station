import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-in mt-8 md:mt-12">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("privacy.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("privacy.lastUpdated")}</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <p>{t("privacy.p1")}</p>
          
          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("privacy.h1")}</h2>
            <p>{t("privacy.p2")}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("privacy.h2")}</h2>
            <p>{t("privacy.p3")}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("privacy.h3")}</h2>
            <p>{t("privacy.p4")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import React from 'react';
import { useTranslation } from 'react-i18next';
import { LifeBuoy, ArrowLeft, Mail, Info } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Support() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-in mt-8 md:mt-12">
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-transform">
          <LifeBuoy className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("support.title")}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t("support.desc")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="h-full">
          <CardContent className="pt-6 space-y-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400">
              <Info className="w-6 h-6" />
            </div>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("support.faqTitle")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              {t("support.faqDesc")}
            </p>
            <Link to="/" className="w-full">
              <Button variant="outline" className="w-full border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white">
                <ArrowLeft className={`w-4 h-4 ${isRtl ? 'ml-2' : 'mr-2 rotate-180'} ${!isRtl ? 'mr-2' : ''}`} />
                {t("support.back")}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="h-full border-primary-500/20 bg-primary-500/5">
          <CardContent className="pt-6 space-y-4 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">{t("support.contactTitle")}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              {t("support.contactDesc")}
            </p>
            <a href="mailto:support@filestation.example.com" className="w-full">
              <Button className="w-full bg-primary-600 hover:bg-primary-700 text-gray-900 dark:text-white">
                support@filestation.example.com
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

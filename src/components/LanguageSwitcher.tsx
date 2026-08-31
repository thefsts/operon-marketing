import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', translateCode: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', translateCode: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', translateCode: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', translateCode: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', translateCode: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'zh', translateCode: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja', translateCode: 'ja', name: '日本語', flag: '🇯🇵' },
] as const;

type Language = (typeof languages)[number];
type LanguageSwitcherProps = { transparent?: boolean };

export default function LanguageSwitcher({ transparent = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage');
    const match = languages.find((language) => language.code === saved);
    if (match) setCurrentLanguage(match);
  }, []);

  const selectLanguage = (language: Language) => {
    localStorage.setItem('preferredLanguage', language.code);
    setCurrentLanguage(language);
    setIsOpen(false);

    if (language.code === 'en') {
      window.location.assign(`${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`);
      return;
    }

    const sourceUrl = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
    const translatedUrl = `https://translate.google.com/translate?sl=en&tl=${encodeURIComponent(language.translateCode)}&u=${encodeURIComponent(sourceUrl)}`;
    window.location.assign(translatedUrl);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-colors ${
          transparent ? 'text-white/90 hover:bg-white/10 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-cyan-700'
        }`}
        aria-label="Choose language"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden text-sm font-medium sm:inline">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        <span className="text-sm font-medium sm:hidden">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <>
          <button type="button" className="fixed inset-0 z-10 cursor-default" aria-label="Close language menu" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl" role="menu">
            <div className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Translate this page</div>
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                role="menuitem"
                onClick={() => selectLanguage(language)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  currentLanguage.code === language.code ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="text-lg" aria-hidden="true">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLanguage.code === language.code && <span className="ml-auto text-cyan-700">✓</span>}
              </button>
            ))}
            <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
              Non-English selections open a Google-translated view of the current public page.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

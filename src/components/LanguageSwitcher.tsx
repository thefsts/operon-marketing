import { useState } from 'react';
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

interface LanguageSwitcherProps {
  transparent?: boolean;
}

export default function LanguageSwitcher({ transparent = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const selectLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
    // In a real implementation, this would trigger i18n library to change language
    localStorage.setItem('preferredLanguage', lang.code);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 transition-colors rounded-lg ${
          transparent 
            ? 'text-white/90 hover:text-white hover:bg-white/10' 
            : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
        }`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
        <span className="text-sm font-medium sm:hidden">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-20">
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Select Language
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang)}
                  className={`w-full text-left px-3 py-2.5 flex items-center gap-3 transition-colors ${
                    currentLanguage.code === lang.code
                      ? 'bg-cyan-50 text-cyan-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {currentLanguage.code === lang.code && (
                    <span className="ml-auto text-cyan-600">✓</span>
                  )}
                </button>
              ))}
            </div>
            <div className="px-3 py-2 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                More languages coming soon
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
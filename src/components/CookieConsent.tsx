import { useEffect, useState } from 'react';
import { Settings, X } from 'lucide-react';

interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const necessaryOnly: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

function persistPreferences(preferences: CookiePreferences) {
  localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent('operon:cookie-consent', { detail: preferences }));
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(necessaryOnly);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
      return;
    }

    try {
      const saved = JSON.parse(consent) as Partial<CookiePreferences>;
      setPreferences({
        necessary: true,
        analytics: saved.analytics === true,
        functional: saved.functional === true,
        marketing: saved.marketing === true,
      });
    } catch {
      localStorage.removeItem('cookieConsent');
      setShowBanner(true);
    }
  }, []);

  const save = (next: CookiePreferences) => {
    persistPreferences(next);
    setPreferences(next);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, functional: true, marketing: true });
  const declineAll = () => save(necessaryOnly);
  const savePreferences = () => save(preferences);

  const toggle = (key: Exclude<keyof CookiePreferences, 'necessary'>) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4" role="region" aria-label="Cookie preferences">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-slate-950 text-white shadow-2xl ring-1 ring-white/10">
        {!showSettings ? (
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Your privacy choices</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  OPERON uses essential browser storage to run this site. Optional analytics are disabled until you choose to allow them. You can accept optional categories, decline them, or manage your preferences.
                  <a href="/cookie-policy" className="ml-1 font-medium text-cyan-300 hover:text-cyan-200">Read the Cookie Policy</a>.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button type="button" onClick={acceptAll} className="rounded-lg bg-cyan-600 px-5 py-2.5 font-medium text-white hover:bg-cyan-500">Accept optional cookies</button>
                  <button type="button" onClick={declineAll} className="rounded-lg bg-slate-800 px-5 py-2.5 font-medium text-white hover:bg-slate-700">Necessary only</button>
                  <button type="button" onClick={() => setShowSettings(true)} className="flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 font-medium text-white hover:border-cyan-400">
                    <Settings className="h-4 w-4" /> Manage preferences
                  </button>
                </div>
              </div>
              <button type="button" onClick={declineAll} className="rounded-lg p-1 hover:bg-slate-800" aria-label="Close and use necessary cookies only"><X className="h-5 w-5" /></button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">Cookie preferences</h2>
              <button type="button" onClick={() => setShowSettings(false)} className="rounded-lg p-1 hover:bg-slate-800" aria-label="Close preferences"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-5 space-y-3">
              <PreferenceRow title="Necessary" description="Required for core website functionality and preference storage." enabled disabled />
              <PreferenceRow title="Analytics" description="Allows configured analytics tools to measure site usage." enabled={preferences.analytics} onToggle={() => toggle('analytics')} />
              <PreferenceRow title="Functional" description="Allows optional experience and preference features when configured." enabled={preferences.functional} onToggle={() => toggle('functional')} />
              <PreferenceRow title="Marketing" description="Allows optional marketing technologies when configured." enabled={preferences.marketing} onToggle={() => toggle('marketing')} />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={savePreferences} className="rounded-lg bg-cyan-600 px-5 py-2.5 font-medium text-white hover:bg-cyan-500">Save preferences</button>
              <button type="button" onClick={declineAll} className="rounded-lg border border-slate-600 px-5 py-2.5 font-medium text-white hover:border-cyan-400">Necessary only</button>
              <button type="button" onClick={acceptAll} className="rounded-lg border border-slate-600 px-5 py-2.5 font-medium text-white hover:border-cyan-400">Accept all</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PreferenceRow({ title, description, enabled, disabled = false, onToggle }: { title: string; description: string; enabled: boolean; disabled?: boolean; onToggle?: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-900 p-4">
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={`${title} cookies`}
        disabled={disabled}
        onClick={onToggle}
        className={`relative h-7 w-14 shrink-0 rounded-full transition-colors ${enabled ? 'bg-cyan-600' : 'bg-slate-600'} disabled:cursor-not-allowed disabled:opacity-80`}
      >
        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${enabled ? 'left-8' : 'left-1'}`} />
      </button>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Accessibility, Contrast, Eye, Type, X } from 'lucide-react';

type FontSize = 'normal' | 'large' | 'xlarge';
interface AccessibilitySettings { fontSize: FontSize; highContrast: boolean; reducedMotion: boolean; }

const defaults: AccessibilitySettings = { fontSize: 'normal', highContrast: false, reducedMotion: false };

function applySettings(settings: AccessibilitySettings) {
  const root = document.documentElement;
  root.classList.remove('text-size-normal', 'text-size-large', 'text-size-xlarge');
  root.classList.add(`text-size-${settings.fontSize}`);
  root.classList.toggle('high-contrast', settings.highContrast);
  root.classList.toggle('reduced-motion', settings.reducedMotion);
}

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaults);

  useEffect(() => {
    const saved = localStorage.getItem('accessibilitySettings');
    if (!saved) return;
    try {
      const parsed = { ...defaults, ...JSON.parse(saved) } as AccessibilitySettings;
      setSettings(parsed);
      applySettings(parsed);
    } catch {
      localStorage.removeItem('accessibilitySettings');
    }
  }, []);

  const update = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    const next = { ...settings, [key]: value };
    setSettings(next);
    localStorage.setItem('accessibilitySettings', JSON.stringify(next));
    applySettings(next);
  };

  const reset = () => {
    setSettings(defaults);
    localStorage.setItem('accessibilitySettings', JSON.stringify(defaults));
    applySettings(defaults);
  };

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transition-shadow hover:shadow-xl" aria-label="Open accessibility settings" title="Accessibility settings">
        <Accessibility className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="accessibility-title">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3"><Accessibility className="h-6 w-6" /><h2 id="accessibility-title" className="text-xl font-bold">Accessibility settings</h2></div>
                <button type="button" onClick={() => setIsOpen(false)} className="rounded-lg p-1 hover:bg-white/20" aria-label="Close accessibility settings"><X className="h-6 w-6" /></button>
              </div>
              <p className="mt-2 text-sm text-cyan-50">Adjust display preferences for this website.</p>
            </div>

            <div className="space-y-6 p-6">
              <div>
                <div className="mb-3 flex items-center gap-2"><Type className="h-5 w-5 text-slate-600" /><h3 className="font-semibold text-slate-900">Text size</h3></div>
                <div className="flex gap-2">
                  {(['normal', 'large', 'xlarge'] as const).map((size) => (
                    <button key={size} type="button" onClick={() => update('fontSize', size)} aria-pressed={settings.fontSize === size} className={`flex-1 rounded-lg border-2 px-2 py-2 text-sm font-medium ${settings.fontSize === size ? 'border-cyan-500 bg-cyan-50 text-cyan-800' : 'border-slate-200 text-slate-700 hover:border-cyan-300'}`}>
                      {size === 'normal' ? 'Normal' : size === 'large' ? 'Large' : 'Extra large'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2"><Contrast className="h-5 w-5 text-slate-600" /><div><h3 className="font-semibold text-slate-900">High contrast</h3><p className="text-sm text-slate-500">Increase visual contrast.</p></div></div>
                <button type="button" aria-pressed={settings.highContrast} aria-label="Toggle high contrast" onClick={() => update('highContrast', !settings.highContrast)} className={`h-7 w-14 rounded-full p-1 ${settings.highContrast ? 'bg-cyan-600' : 'bg-slate-300'}`}><span className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${settings.highContrast ? 'translate-x-7' : ''}`} /></button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2"><Eye className="h-5 w-5 text-slate-600" /><div><h3 className="font-semibold text-slate-900">Reduced motion</h3><p className="text-sm text-slate-500">Minimize animations and transitions.</p></div></div>
                <button type="button" aria-pressed={settings.reducedMotion} aria-label="Toggle reduced motion" onClick={() => update('reducedMotion', !settings.reducedMotion)} className={`h-7 w-14 rounded-full p-1 ${settings.reducedMotion ? 'bg-cyan-600' : 'bg-slate-300'}`}><span className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${settings.reducedMotion ? 'translate-x-7' : ''}`} /></button>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                OPERON is designed to work with browser zoom, keyboard navigation, and assistive technology. For an accommodation or accessibility issue, use our <a href="/contact" className="font-semibold underline">contact page</a>.
              </div>

              <button type="button" onClick={reset} className="w-full rounded-lg border-2 border-slate-300 py-2.5 font-medium text-slate-700 hover:border-slate-400">Reset to defaults</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

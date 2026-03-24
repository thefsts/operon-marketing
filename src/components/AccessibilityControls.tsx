import { useState, useEffect } from 'react';
import { Accessibility, X, Type, Contrast, Eye, Volume2 } from 'lucide-react';

interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
  screenReaderMode: boolean;
  captionsEnabled: boolean;
}

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 'normal',
    highContrast: false,
    reducedMotion: false,
    screenReaderMode: false,
    captionsEnabled: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('accessibilitySettings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        // Use defaults
      }
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;

    // Font size
    root.classList.remove('text-size-normal', 'text-size-large', 'text-size-xlarge');
    root.classList.add(`text-size-${newSettings.fontSize}`);

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Screen reader mode
    if (newSettings.screenReaderMode) {
      root.classList.add('screen-reader-mode');
      document.body.setAttribute('role', 'application');
    } else {
      root.classList.remove('screen-reader-mode');
      document.body.removeAttribute('role');
    }
  };

  const updateSettings = (key: keyof AccessibilitySettings, value: unknown) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 'normal',
      highContrast: false,
      reducedMotion: false,
      screenReaderMode: false,
      captionsEnabled: false,
    };
    setSettings(defaultSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(defaultSettings));
    applySettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center"
        aria-label="Accessibility Options"
        title="Accessibility"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Accessibility className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Accessibility Settings</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-cyan-100 mt-2 text-sm">
                Customize your experience for better accessibility
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Font Size */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Type className="w-5 h-5 text-slate-600" />
                  <h3 className="font-semibold text-slate-900">Text Size</h3>
                </div>
                <div className="flex gap-2">
                  {[
                    { value: 'normal', label: 'Normal' },
                    { value: 'large', label: 'Large' },
                    { value: 'xlarge', label: 'Extra Large' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateSettings('fontSize', option.value)}
                      className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${
                        settings.fontSize === option.value
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                          : 'border-slate-200 hover:border-cyan-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="w-5 h-5 text-slate-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">High Contrast</h3>
                    <p className="text-sm text-slate-500">Increase contrast for better visibility</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSettings('highContrast', !settings.highContrast)}
                  className={`w-14 h-7 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-cyan-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.highContrast ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-slate-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Reduced Motion</h3>
                    <p className="text-sm text-slate-500">Minimize animations and transitions</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSettings('reducedMotion', !settings.reducedMotion)}
                  className={`w-14 h-7 rounded-full transition-colors ${
                    settings.reducedMotion ? 'bg-cyan-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.reducedMotion ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Screen Reader Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-slate-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Screen Reader Mode</h3>
                    <p className="text-sm text-slate-500">Optimized for assistive technology</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSettings('screenReaderMode', !settings.screenReaderMode)}
                  className={`w-14 h-7 rounded-full transition-colors ${
                    settings.screenReaderMode ? 'bg-cyan-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.screenReaderMode ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Captions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-slate-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Captions & Text Alternatives</h3>
                    <p className="text-sm text-slate-500">Enable captions and text descriptions for media</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSettings('captionsEnabled', !settings.captionsEnabled)}
                  className={`w-14 h-7 rounded-full transition-colors ${
                    settings.captionsEnabled ? 'bg-cyan-600' : 'bg-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    settings.captionsEnabled ? 'translate-x-8' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* Deaf/Hard of Hearing Notice */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <h4 className="font-medium text-blue-900 mb-1">Deaf or Hard of Hearing?</h4>
                <p className="text-sm text-blue-700">
                  Enable captions and text alternatives for full access to audio and video content. 
                  Contact us for additional accommodations.
                </p>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full py-2.5 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 transition-colors"
              >
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
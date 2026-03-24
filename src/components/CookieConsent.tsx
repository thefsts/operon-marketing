import { useState, useEffect } from 'react';
import { X, Settings } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const declineAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden">
        {!showSettings ? (
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">🍪 We Value Your Privacy</h3>
                <p className="text-slate-300 text-sm mb-4">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. 
                  <a href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300 ml-1">Learn more</a>
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={declineAll}
                    className="px-6 py-2.5 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2.5 border border-slate-600 text-white rounded-lg font-medium hover:border-cyan-500 transition-colors flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Manage Preferences
                  </button>
                </div>
              </div>
              <button
                onClick={declineAll}
                className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                aria-label="Close settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Necessary Cookies</h4>
                  <p className="text-slate-400 text-sm">Essential for the website to function. Cannot be disabled.</p>
                </div>
                <div className="w-12 h-6 bg-cyan-600 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Analytics Cookies</h4>
                  <p className="text-slate-400 text-sm">Help us understand how visitors interact with our website.</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${preferences.analytics ? 'bg-cyan-600 justify-end px-1' : 'bg-slate-600 justify-start px-1'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              {/* Functional */}
              <div className="flex items-start justify-between gap-4 p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Functional Cookies</h4>
                  <p className="text-slate-400 text-sm">Enable enhanced functionality and personalization.</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${preferences.functional ? 'bg-cyan-600 justify-end px-1' : 'bg-slate-600 justify-start px-1'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 bg-slate-800 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">Marketing Cookies</h4>
                  <p className="text-slate-400 text-sm">Used to deliver relevant advertisements.</p>
                </div>
                <button
                  onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                  className={`w-12 h-6 rounded-full flex items-center transition-colors ${preferences.marketing ? 'bg-cyan-600 justify-end px-1' : 'bg-slate-600 justify-start px-1'}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={savePreferences}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 border border-slate-600 text-white rounded-lg font-medium hover:border-cyan-500 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
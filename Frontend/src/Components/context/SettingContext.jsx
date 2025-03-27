import React, { createContext, useState, useEffect } from 'react';

// Default settings
const defaultSettings = {
  // User Profile
  fontSize: 'medium', // small, medium, large
  highContrast: false,
  language: 'en',
  // Health and Medication
  medicationReminders: true,
  healthAlerts: true,
  // Communication
  notificationType: 'sound', // sound, vibration, both, none
  silentHours: { start: '22:00', end: '07:00' },
  // Safety
  locationTracking: false,
  safeZones: [],
  sosContacts: [],
  // Daily Activity
  activityReminders: true,
  // Privacy
  dataEncryption: true,
  // Interface
  theme: 'light', // light, dark
  textToSpeech: false,
};

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    // Load settings from localStorage if available
    const savedSettings = localStorage.getItem('elderlyCareSettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    // Save settings to localStorage whenever they change
    localStorage.setItem('elderlyCareSettings', JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
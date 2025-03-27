import React, { useContext } from 'react';
import { SettingsContext } from './context/SettingContext';
import './Settings.css';

function Settings() {
  const { settings, setSettings } = useContext(SettingsContext);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const addSafeZone = () => {
    const newZone = prompt('Enter safe zone name (e.g., Home):');
    if (newZone) {
      setSettings(prev => ({
        ...prev,
        safeZones: [...prev.safeZones, newZone],
      }));
    }
  };

  const removeSafeZone = (zone) => {
    setSettings(prev => ({
      ...prev,
      safeZones: prev.safeZones.filter(z => z !== zone),
    }));
  };

  const addSosContact = () => {
    const newContact = prompt('Enter SOS contact name and number (e.g., John: 123-456-7890):');
    if (newContact) {
      setSettings(prev => ({
        ...prev,
        sosContacts: [...prev.sosContacts, newContact],
      }));
    }
  };

  const removeSosContact = (contact) => {
    setSettings(prev => ({
      ...prev,
      sosContacts: prev.sosContacts.filter(c => c !== contact),
    }));
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      {/* User Profile Settings */}
      <section>
        <h2>User Profile</h2>
        <div className="setting-item">
          <label>Font Size:</label>
          <select
            value={settings.fontSize}
            onChange={(e) => handleChange('fontSize', e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="setting-item">
          <label>High Contrast Mode:</label>
          <input
            type="checkbox"
            checked={settings.highContrast}
            onChange={(e) => handleChange('highContrast', e.target.checked)}
          />
        </div>
        <div className="setting-item">
          <label>Language:</label>
          <select
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </section>

      {/* Health and Medication Settings */}
      <section>
        <h2>Health & Medication</h2>
        <div className="setting-item">
          <label>Medication Reminders:</label>
          <input
            type="checkbox"
            checked={settings.medicationReminders}
            onChange={(e) => handleChange('medicationReminders', e.target.checked)}
          />
        </div>
        <div className="setting-item">
          <label>Health Alerts:</label>
          <input
            type="checkbox"
            checked={settings.healthAlerts}
            onChange={(e) => handleChange('healthAlerts', e.target.checked)}
          />
        </div>
      </section>

      {/* Communication Settings */}
      <section>
        <h2>Communication</h2>
        <div className="setting-item">
          <label>Notification Type:</label>
          <select
            value={settings.notificationType}
            onChange={(e) => handleChange('notificationType', e.target.value)}
          >
            <option value="sound">Sound</option>
            <option value="vibration">Vibration</option>
            <option value="both">Both</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Silent Hours:</label>
          <input
            type="time"
            value={settings.silentHours.start}
            onChange={(e) => handleChange('silentHours', { ...settings.silentHours, start: e.target.value })}
          />
          <span>to</span>
          <input
            type="time"
            value={settings.silentHours.end}
            onChange={(e) => handleChange('silentHours', { ...settings.silentHours, end: e.target.value })}
          />
        </div>
      </section>

      {/* Safety Settings */}
      <section>
        <h2>Safety</h2>
        <div className="setting-item">
          <label>Location Tracking:</label>
          <input
            type="checkbox"
            checked={settings.locationTracking}
            onChange={(e) => handleChange('locationTracking', e.target.checked)}
          />
        </div>
        <div className="setting-item">
          <label>Safe Zones:</label>
          <button onClick={addSafeZone}>Add Safe Zone</button>
          <ul>
            {settings.safeZones.map((zone, index) => (
              <li key={index}>
                {zone} <button onClick={() => removeSafeZone(zone)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="setting-item">
          <label>SOS Contacts:</label>
          <button onClick={addSosContact}>Add SOS Contact</button>
          <ul>
            {settings.sosContacts.map((contact, index) => (
              <li key={index}>
                {contact} <button onClick={() => removeSosContact(contact)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Daily Activity Settings */}
      <section>
        <h2>Daily Activity</h2>
        <div className="setting-item">
          <label>Activity Reminders:</label>
          <input
            type="checkbox"
            checked={settings.activityReminders}
            onChange={(e) => handleChange('activityReminders', e.target.checked)}
          />
        </div>
      </section>

      {/* Privacy Settings */}
      <section>
        <h2>Privacy</h2>
        <div className="setting-item">
          <label>Data Encryption:</label>
          <input
            type="checkbox"
            checked={settings.dataEncryption}
            onChange={(e) => handleChange('dataEncryption', e.target.checked)}
          />
        </div>
      </section>

      {/* Interface Settings */}
      <section>
        <h2>Interface</h2>
        <div className="setting-item">
          <label>Theme:</label>
          <select
            value={settings.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Text-to-Speech:</label>
          <input
            type="checkbox"
            checked={settings.textToSpeech}
            onChange={(e) => handleChange('textToSpeech', e.target.checked)}
          />
        </div>
      </section>
    </div>
  );
}

export default Settings;
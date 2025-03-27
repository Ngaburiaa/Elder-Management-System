import React from "react";
import "../services.css"

function Services() {
  return (
    <div className="services-inner">
      <div className="services-container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p className="subtitle">Exceptional Care, Tailored for You</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h2>1. Medical & Healthcare Services</h2>
            <ul>
              <li>✅ 24/7 Nursing Care – Professional nurses to monitor health conditions.</li>
              <li>✅ Doctor Consultations – Regular checkups by doctors and specialists.</li>
              <li>✅ Medication Management – Ensuring timely and accurate intake of prescriptions.</li>
              <li>✅ Emergency Response System – Immediate medical assistance for emergencies.</li>
              <li>✅ Physical Therapy & Rehabilitation – Recovery programs for injuries.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>2. Nutritional & Dietary Support</h2>
            <ul>
              <li>✅ Balanced Meals – Nutritious, senior-friendly meals.</li>
              <li>✅ Special Diet Plans – Customized meals for diabetes, hypertension, etc.</li>
              <li>✅ Hydration Monitoring – Ensuring residents stay hydrated.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>3. Accommodation & Housekeeping</h2>
            <ul>
              <li>✅ Comfortable Living Spaces – Private or shared rooms with safety features.</li>
              <li>✅ Housekeeping Services – Daily cleaning, laundry, and waste disposal.</li>
              <li>✅ Safe & Accessible Environment – Wheelchair ramps, anti-slip flooring.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>4. Personal Care & Assistance</h2>
            <ul>
              <li>✅ Bathing & Grooming Assistance – Help with personal hygiene.</li>
              <li>✅ Dressing & Mobility Support – Assistance with walking, standing, etc.</li>
              <li>✅ Toileting & Incontinence Care – Dignified and respectful support.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>5. Social & Recreational Activities</h2>
            <ul>
              <li>✅ Group Activities – Bingo, chess, storytelling, etc.</li>
              <li>✅ Exercise & Yoga – Light fitness programs.</li>
              <li>✅ Music & Art Therapy – Enhancing mental well-being.</li>
              <li>✅ Outdoor Walks & Gardening – Safe spaces for relaxation.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>6. Safety & Security Services</h2>
            <ul>
              <li>✅ 24/7 Surveillance & Security – Preventing unauthorized access.</li>
              <li>✅ Fall Prevention Measures – Emergency call buttons, non-slip flooring.</li>
              <li>✅ Fire & Emergency Preparedness – Regular drills and quick-response teams.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>7. Transportation & Mobility Assistance</h2>
            <ul>
              <li>✅ Doctor’s Appointments Transport – Safe rides to hospitals.</li>
              <li>✅ Shopping & Errands – Assistance in buying essentials.</li>
              <li>✅ Wheelchair & Walker Support – Ensuring safe movement.</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>8. Mental & Emotional Well-being Support</h2>
            <ul>
              <li>✅ Counseling & Therapy – Support for depression, anxiety, dementia.</li>
              <li>✅ Religious & Spiritual Services – Prayer groups, meditation, chaplain visits.</li>
              <li>✅ Family & Social Visits – Encouraging interaction with loved ones.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

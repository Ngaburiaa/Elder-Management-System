import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import './billing.css';

const ServiceCard = ({ title, items, price, serviceKey, onSubscribe, showForm, onClose }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
        <div className="button-group">
          <button className="price-btn">Price: Ksh {price}</button>
          <button className="subscribe-btn" onClick={() => onSubscribe(serviceKey)}>
            Subscribe
          </button>
        </div>
      </div>
      {showForm && (
        <PaymentForm 
          onClose={() => onClose(serviceKey)} 
          serviceKey={serviceKey} 
          price={price}
        />
      )}
    </div>
  );
};

function Billing() {
  const [paymentForms, setPaymentForms] = useState({
    "Medical & Healthcare Services": false,
    "Nutritional & Dietary Support": false,
    "Accommodation & Housekeeping": false,
    "Personal Care & Assistance": false,
    "Social & Recreational Activities": false,
    "Safety & Security Services": false,
    "Transportation & Mobility Assistance": false,
    "Mental & Emotional Well-being Support": false
  });

  const handleSubscribe = (service) => {
    console.log(`Opening form for: ${service} with price ${services.find(s => s.key === service)?.price}`);
    setPaymentForms(Object.keys(paymentForms).reduce((acc, key) => ({
      ...acc,
      [key]: key === service
    }), {}));
  };

  const handleClose = (service) => {
    console.log(`Closing form for: ${service}`);
    setPaymentForms(prev => ({
      ...prev,
      [service]: false
    }));
  };

  const services = [
    {
      title: "1. Medical & Healthcare Services",
      items: [
        "24/7 Nursing Care – Professional nurses to monitor health conditions",
        "Doctor Consultations – Regular checkups by doctors and specialists",
        "Medication Management – Ensuring timely and accurate intake of prescriptions",
        "Emergency Response System – Immediate medical assistance for emergencies",
        "Physical Therapy & Rehabilitation – Recovery programs for injuries"
      ],
      price: 1000,
      key: "Medical & Healthcare Services"
    },
    {
      title: "2. Nutritional & Dietary Support",
      items: [
        "Balanced Meals – Nutritious, senior-friendly meals",
        "Special Diet Plans – Customized meals for diabetes, hypertension, etc",
        "Hydration Monitoring – Ensuring residents stay hydrated"
      ],
      price: 12000,
      key: "Nutritional & Dietary Support"
    },
    {
      title: "3. Accommodation & Housekeeping",
      items: [
        "Comfortable Living Spaces – Private or shared rooms with safety features",
        "Housekeeping Services – Daily cleaning, laundry, and waste disposal",
        "Safe & Accessible Environment – Wheelchair ramps, anti-slip flooring"
      ],
      price: 1500,
      key: "Accommodation & Housekeeping"
    },
    {
      title: "4. Personal Care & Assistance",
      items: [
        "Bathing & Grooming Assistance – Help with personal hygiene",
        "Dressing & Mobility Support – Assistance with walking, standing, etc",
        "Toileting & Incontinence Care – Dignified and respectful support"
      ],
      price: 800,
      key: "Personal Care & Assistance"
    },
    {
      title: "5. Social & Recreational Activities",
      items: [
        "Group Activities – Bingo, chess, storytelling, etc",
        "Exercise & Yoga – Light fitness programs",
        "Music & Art Therapy – Enhancing mental well-being",
        "Outdoor Walks & Gardening – Safe spaces for relaxation"
      ],
      price: 1000,
      key: "Social & Recreational Activities"
    },
    {
      title: "6. Safety & Security Services",
      items: [
        "24/7 Surveillance & Security – Preventing unauthorized access",
        "Fall Prevention Measures – Emergency call buttons, non-slip flooring",
        "Fire & Emergency Preparedness – Regular drills and quick-response teams"
      ],
      price: 2000,
      key: "Safety & Security Services"
    },
    {
      title: "7. Transportation & Mobility Assistance",
      items: [
        "Doctor’s Appointments Transport – Safe rides to hospitals",
        "Shopping & Errands – Assistance in buying essentials",
        "Wheelchair & Walker Support – Ensuring safe movement"
      ],
      price: 3000,
      key: "Transportation & Mobility Assistance"
    },
    {
      title: "8. Mental & Emotional Well-being Support",
      items: [
        "Counseling & Therapy – Support for depression, anxiety, dementia",
        "Religious & Spiritual Services – Prayer groups, meditation, chaplain visits",
        "Family & Social Visits – Encouraging interaction with loved ones"
      ],
      price: 5000,
      key: "Mental & Emotional Well-being Support"
    }
  ];

  return (
    <div className="services-inner">
      <div className="services-container">
        <div className="services-header">
          <h1>Our services bills</h1>
          <p className="subtitle">Exceptional Care, Tailored for You</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              title={service.title}
              items={service.items}
              price={service.price}
              serviceKey={service.key}
              onSubscribe={handleSubscribe}
              showForm={paymentForms[service.key]}
              onClose={handleClose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Billing;




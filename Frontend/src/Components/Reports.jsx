


import React from 'react';
import ReportGenerator from './ReportGenerator';
import './report.css';

function Report() {

  const services = [
    {
      title: "1. Medical & Healthcare Services",
      items: [
        "24/7 Nursing Care – Caregivers monitor health conditions",
        "Doctor Consultations – Caregivers coordinate regular checkups",
        "Medication Management – Caregivers ensure timely prescription intake",
        "Emergency Response – Caregivers provide immediate assistance",
        "Physical Therapy – Caregivers assist with recovery exercises"
      ],
      price: 1000,
      key: "Medical & Healthcare Services"
    },
    {
      title: "2. Nutritional & Dietary Support",
      items: [
        "Balanced Meals – Caregivers prepare senior-friendly meals",
        "Special Diet Plans – Caregivers customize meals for health needs",
        "Hydration Monitoring – Caregivers ensure residents stay hydrated",
        "Feeding Assistance – Caregivers help residents with eating"
      ],
      price: 12000,
      key: "Nutritional & Dietary Support"
    },
    {
      title: "3. Accommodation & Housekeeping",
      items: [
        "Comfortable Living Spaces – Caregivers maintain safe rooms",
        "Housekeeping Services – Caregivers handle cleaning and laundry",
        "Safe Environment – Caregivers ensure accessibility features"
      ],
      price: 1500,
      key: "Accommodation & Housekeeping"
    },
    {
      title: "4. Personal Care & Assistance",
      items: [
        "Bathing & Grooming – Caregivers assist with personal hygiene",
        "Dressing & Mobility – Caregivers help with clothing and movement",
        "Toileting & Incontinence – Caregivers provide dignified support",
        "Daily Routine Support – Caregivers assist with everyday tasks"
      ],
      price: 800,
      key: "Personal Care & Assistance"
    },
    {
      title: "5. Social & Recreational Activities",
      items: [
        "Group Activities – Caregivers organize bingo, chess, and storytelling",
        "Exercise & Yoga – Caregivers lead light fitness programs",
        "Music & Art Therapy – Caregivers facilitate creative sessions",
        "Outdoor Walks – Caregivers accompany residents for relaxation"
      ],
      price: 1000,
      key: "Social & Recreational Activities"
    },
    {
      title: "6. Safety & Security Services",
      items: [
        "24/7 Surveillance – Caregivers monitor for unauthorized access",
        "Fall Prevention – Caregivers ensure safety with emergency buttons",
        "Fire Preparedness – Caregivers conduct drills and respond quickly"
      ],
      price: 2000,
      key: "Safety & Security Services"
    },
    {
      title: "7. Transportation & Mobility Assistance",
      items: [
        "Doctor’s Appointments – Caregivers arrange safe transport",
        "Shopping & Errands – Caregivers assist with buying essentials",
        "Mobility Support – Caregivers help with wheelchairs and walkers"
      ],
      price: 3000,
      key: "Transportation & Mobility Assistance"
    },
    {
      title: "8. Mental & Emotional Well-being Support",
      items: [
        "Counseling & Therapy – Caregivers support mental health needs",
        "Spiritual Services – Caregivers facilitate prayer and meditation",
        "Family Visits – Caregivers encourage social interactions",
        "Cognitive Stimulation – Caregivers engage residents in memory games"
      ],
      price: 5000,
      key: "Mental & Emotional Well-being Support"
    }
  ];

  return (
    <div className="reports-page">
      <h1>Reports</h1>
      <ReportGenerator services={services} />
    </div>
  );
}

export default Report;
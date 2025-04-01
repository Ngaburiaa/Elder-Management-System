import React from 'react';
import CaregiverReport from './CaregiverReport';
import "./Care.css"

const CareGiverActivities = () => {
  const caregivers = [
    {
      name: 'Alex ',
      role: 'Nurse',
      report: [
        '<span>Medication: </span>The patient is currently undergoing mental therapy as she has shown instability.',
        '<span>First Aid Kit: </span>Ensure you have the following in your kit to act in case of any emergency:<br/>- Pain killers: Used to ease pain.<br/>- Insulin: To regulate high blood sugar.<br/>- Thermometer: To record patient temperature.',
        '<span>Progress: </span>The patient is responding positively to the high blood pressure medication, and her sugar levels have successfully stabilized.',
        '<span>Blood Pressure: </span>109',
        '<span>Glucose Level: </span>150'
      ]
    },
    {
      name: 'Dr. Smith',
      role: 'Doctor',
      report: [
        '<span>Diagnosis: </span>Hypertension and Type 2 Diabetes',
        '<span>Treatment Plan: </span>Prescription for antihypertensive medication and oral hypoglycemics',
        '<span>Next Appointment: </span>June 15, 2023, at 10 AM'
      ]
    },
    {
      name: 'Sarah Johnson',
      role: 'Physical Therapist',
      report: [
        '<span>Physical Therapy Sessions: </span>Twice a week for strength and balance training',
        '<span>Exercise Recommendations: </span>Daily walks for 30 minutes, stretching exercises'
      ]
    },
    {
      name: 'Michael Chen',
      role: 'Nutritionist',
      report: [
        '<span>Dietary Recommendations: </span>Low-sodium, low-sugar diet',
        '<span>Meal Plan: </span>Balanced meals with lean proteins, whole grains, and plenty of vegetables'
      ]
    },
    {
      name: 'Emily Davis',
      role: 'Social Worker',
      report: [
        '<span>Social Support: </span>Strong network of family and friends',
        '<span>Community Resources: </span>Referred to local senior center for social activities'
      ]
    }
  ];

  return (
    <div className="caregiver-activities">
  
      <h2>CareGivers Comments</h2>
      {caregivers.map((caregiver, index) => (
        <CaregiverReport key={index} {...caregiver} />
      ))}
    </div>
  );
};

export default CareGiverActivities;
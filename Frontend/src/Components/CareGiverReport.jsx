

import React from 'react';
import "./Care.css"

const CaregiverReport = ({ name, role, report }) => {
 
  const parseReportItem = (reportItem) => {
    const spanRegex = /<span>(.*?)<\/span>/;
    const match = reportItem.match(spanRegex);
    if (match) {
      const label = match[1]; 
      const value = reportItem.replace(/<span>.*?<\/span>/, '').trim(); 
      return { label, value };
    } else {
      return { label: '', value: reportItem }; 
    }
  };

  return (
    <div className="caregiver-section">
      <h3>{name} ({role})</h3>
      {report.map((item, index) => {
        const { label, value } = parseReportItem(item);
        return (
          <div key={index} className="report-item">
            {label && <div className="label">{label}</div>}
            <div className="value" dangerouslySetInnerHTML={{ __html: value }} />
          </div>
        );
      })}
    </div>
  );
};

export default CaregiverReport;
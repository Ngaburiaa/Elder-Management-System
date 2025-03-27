import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./report.css";

//To be replaced with actual data from database
const mockHealthData = [
  {
    Resident: "John Doe",
    VitalSigns: "120/80 mmHg, 72 bpm",
    Medication: "Yes",
  },
  {
    Resident: "Jane Smith",
    VitalSigns: "130/85 mmHg, 68 bpm",
    Medication: "No",
  },
];
const mockCaregiverData = [
  { Caregiver: "Alice", Hours: "40", Tasks: "5" },
  { Caregiver: "Bob", Hours: "35", Tasks: "4" },
];
const mockIncidentData = [
  { Date: "2025-03-15", Type: "Fall", Details: "Minor injury, handled" },
  { Date: "2025-03-16", Type: "Emergency", Details: "Medical response" },
];
const mockOccupancyData = [
  { Room: "101", Status: "Occupied", Resident: "John Doe" },
  { Room: "102", Status: "Vacant", Resident: "N/A" },
];

function ReportGenerator({ services }) {
  const [reportType, setReportType] = useState("financial");
  const [reportData, setReportData] = useState([]);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  useEffect(() => {
    const generateReportData = () => {
      if (
        !services &&
        !["health", "caregiver", "incident", "occupancy"].includes(reportType)
      ) {
        console.warn(
          "Services prop or required data is undefined, skipping data generation."
        );
        setReportData([]);
        return;
      }

      switch (reportType) {
        case "financial":
          setReportData(
            services.map((service) => ({
              Service: service.title || "Unnamed Service",
              Price: `Ksh ${service.price?.toLocaleString() || 0}`,
              Status: "Pending",
            }))
          );
          break;
        case "activity":
          setReportData(
            services.map((service) => ({
              Service: service.title || "Unnamed Service",
              Activities: service.items?.join("\ ") || "No activities listed",
            }))
          );
          break;
        case "health":
          setReportData(mockHealthData);
          break;
        case "caregiver":
          setReportData(mockCaregiverData);
          break;
        case "incident":
          setReportData(mockIncidentData);
          break;
        case "occupancy":
          setReportData(mockOccupancyData);
          break;
        default:
          setReportData([]);
      }
    };

    generateReportData();
  }, [reportType, services]);

  const generatePDF = () => {
    if (!reportData.length) {
      alert("No data available to generate report");
      return;
    }

    try {
      const doc = new jsPDF();
      const reportTitle = `Elderly Care Home - ${
        reportType.charAt(0).toUpperCase() + reportType.slice(1)
      } Report`;
      const dateString = `Date Range: ${dateRange.start || "N/A"} to ${
        dateRange.end || "N/A"
      }`;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(16);
      doc.text(reportTitle, 14, 20);
      doc.setFontSize(10);
      doc.text(dateString, 14, 26);

      const columns = {
        financial: ["Service", "Price", "Status"],
        activity: ["Service", "Activities"],
        health: ["Resident", "Vital Signs", "Medication Adherence"],
        caregiver: ["Caregiver", "Hours Worked", "Tasks Completed"],
        incident: ["Date", "Type", "Details"],
        occupancy: ["Room", "Status", "Resident"],
      }[reportType];

      const rows = reportData.map((row) => {
        return Object.values(row).map((cell) => (cell || "N/A").toString());
      });

      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 30,
        theme: "striped",
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [41, 128, 185], textColor: 255 },
        columnStyles: {
          0: { cellWidth: "auto" },
          1: { cellWidth: "auto" },
          ...(columns.length > 2 && { 2: { cellWidth: "auto" } }),
        },
      });

      doc.save(`${reportType}_report_${Date.now()}.pdf`);
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("Error generating PDF. Please check console for details.");
    }
  };

  return (
    <div className="report-generator">
      <h2>Generate Custom Report</h2>
      <div className="report-controls">
        <div className="input-group">
          <label>Report Type:</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="report-select"
          >
            <option value="financial">Financial Summary</option>
            <option value="activity">Activity Log</option>
            <option value="health">Health Report</option>
            <option value="caregiver">Caregiver Performance</option>
            <option value="incident">Incident Report</option>
            <option value="occupancy">Occupancy Report</option>
          </select>
        </div>

        <div className="date-range">
          <label>Date Range:</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
            className="date-input"
          />
          <span>to</span>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
            className="date-input"
          />
        </div>

        <button
          onClick={generatePDF}
          disabled={!reportData.length}
          className="generate-button"
        >
          Generate PDF Report
        </button>
      </div>

      <div className="report-preview">
        <h3>Data Preview</h3>
        {reportData.length > 0 ? (
          <table className="preview-table">
            <thead>
              <tr>
                {reportType === "financial" && (
                  <>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Status</th>
                  </>
                )}
                {reportType === "activity" && (
                  <>
                    <th>Service</th>
                    <th>Activities</th>
                  </>
                )}
                {reportType === "health" && (
                  <>
                    <th>Resident</th>
                    <th>Vital Signs</th>
                    <th>Medication Adherence</th>
                  </>
                )}
                {reportType === "caregiver" && (
                  <>
                    <th>Caregiver</th>
                    <th>Hours Worked</th>
                    <th>Tasks Completed</th>
                  </>
                )}
                {reportType === "incident" && (
                  <>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Details</th>
                  </>
                )}
                {reportType === "occupancy" && (
                  <>
                    <th>Room</th>
                    <th>Status</th>
                    <th>Resident</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {reportData.map((row, index) => (
                <tr key={index}>
                  {reportType === "financial" && (
                    <>
                      <td>{row.Service}</td>
                      <td>{row.Price}</td>
                      <td>{row.Status}</td>
                    </>
                  )}
                  {reportType === "activity" && (
                    <>
                      <td>{row.Service}</td>
                      <td>{row.Activities}</td>
                    </>
                  )}
                  {reportType === "health" && (
                    <>
                      <td>{row.Resident}</td>
                      <td>{row.VitalSigns}</td>
                      <td>{row.Medication}</td>
                    </>
                  )}
                  {reportType === "caregiver" && (
                    <>
                      <td>{row.Caregiver}</td>
                      <td>{row.Hours}</td>
                      <td>{row.Tasks}</td>
                    </>
                  )}
                  {reportType === "incident" && (
                    <>
                      <td>{row.Date}</td>
                      <td>{row.Type}</td>
                      <td>{row.Details}</td>
                    </>
                  )}
                  {reportType === "occupancy" && (
                    <>
                      <td>{row.Room}</td>
                      <td>{row.Status}</td>
                      <td>{row.Resident}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">No available data for selected parameters</p>
        )}
      </div>
    </div>
  );
}

export default ReportGenerator;

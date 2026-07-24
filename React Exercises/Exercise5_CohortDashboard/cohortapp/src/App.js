import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
  { name: 'React Batch 1', status: 'ongoing', startDate: '01-Jan-2024', endDate: '31-Mar-2024', participants: 30 },
  { name: 'Java Batch 5', status: 'completed', startDate: '01-Jun-2023', endDate: '31-Aug-2023', participants: 25 },
  { name: 'Spring Boot Batch 2', status: 'ongoing', startDate: '15-Feb-2024', endDate: '15-May-2024', participants: 20 },
  { name: 'Angular Batch 3', status: 'completed', startDate: '01-Sep-2023', endDate: '30-Nov-2023', participants: 28 }
];

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;

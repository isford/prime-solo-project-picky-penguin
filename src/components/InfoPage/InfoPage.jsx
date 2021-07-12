import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container lists-of-items">
      <h3>This app was built using</h3>
      <ul>
        <li>Material UI</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Redux</li>
        <li>PostgreSQL</li>
        <li>Chart.js</li>
      </ul>

      <h3>Moving Forward</h3>
      <ul>
        <li>Be able to track long term history of penguins</li>
        <li>Export to CSV</li>
        <li>Make all tables organizable by name, date, fish average etc.</li>
      </ul>
    </div>
  );
}

export default InfoPage;

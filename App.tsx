import React, { useState } from 'react';
import Header from './components/Header';
import MusicChart from './components/MusicChart';
import Footer from './components/Footer';

const App = () => {
  // The component now holds no data, acting as a pure template.
  const [songs] = useState([]);
  const [expandedRank, setExpandedRank] = useState(null);

  const handleToggleExpand = (rank) => {
    setExpandedRank(prevRank => (prevRank === rank ? null : rank));
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <Header />
        <main className="mt-8">
          {/* The chart is rendered with an empty array, showing the template structure. */}
          <MusicChart
            songs={songs}
            expandedRank={expandedRank}
            onToggleExpand={handleToggleExpand}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;

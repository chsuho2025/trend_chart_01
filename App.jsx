import React, { useState, useEffect } from 'react';
import { fetchRealMusicChart } from './services/musicDataService';
import Header from './components/Header';
import MusicChart from './components/MusicChart';
import Footer from './components/Footer';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRank, setExpandedRank] = useState(null);

  // 실제 음악 데이터 로드
  useEffect(() => {
    const loadChartData = async () => {
      setLoading(true);
      try {
        const chartData = await fetchRealMusicChart();
        setSongs(chartData);
      } catch (error) {
        console.error('Error loading chart data:', error);
        // 에러 시 빈 배열 유지
        setSongs([]);
      } finally {
        setLoading(false);
      }
    };

    loadChartData();
  }, []);

  const handleToggleExpand = (rank) => {
    setExpandedRank(prevRank => (prevRank === rank ? null : rank));
  };

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white font-sans flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">트렌드 데이터 로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <Header />
        <main className="mt-8">
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

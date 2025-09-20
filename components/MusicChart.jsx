import React from 'react';
import ChartItem from './ChartItem';

const MusicChart = ({ songs, expandedRank, onToggleExpand }) => {
  if (!songs || songs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg">
          차트 데이터를 불러오는 중...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {songs.map((song) => (
        <ChartItem 
          key={song.rank} 
          song={song}
          isExpanded={expandedRank === song.rank}
          onToggleExpand={() => onToggleExpand(song.rank)}
        />
      ))}
    </div>
  );
};

export default MusicChart;

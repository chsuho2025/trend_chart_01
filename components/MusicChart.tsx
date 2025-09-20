import React from 'react';
import ChartItem from './ChartItem';

const MusicChart = ({ songs, expandedRank, onToggleExpand }) => {
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

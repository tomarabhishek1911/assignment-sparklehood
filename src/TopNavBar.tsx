import React from 'react';

interface TopNavBarProps {
  selectedSeverity: string;
  setSelectedSeverity: (severity: string) => void;
  handleSortToggle: () => void;
  sortOrder: 'latest' | 'oldest';
  openForm: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ selectedSeverity, setSelectedSeverity, handleSortToggle, sortOrder, openForm }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-[#161b22] shadow-md gap-4 md:gap-0">
      <h1 className="text-2xl font-bold text-blue-400 text-center md:text-left">
        AI Safety Incident Dashboard
      </h1>

      <div className="flex justify-center md:justify-center w-full md:w-auto">
        <button
          onClick={openForm}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition w-full md:w-auto"
        >
          Report New Incident
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
        <select
          value={selectedSeverity}
          onChange={(e) => setSelectedSeverity(e.target.value)}
          className="bg-[#0d1117] border border-gray-700 text-gray-200 p-2 rounded-md w-full md:w-auto"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          onClick={handleSortToggle}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition w-full md:w-auto"
        >
          Sort: {sortOrder === 'latest' ? 'Newest First' : 'Oldest First'}
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;

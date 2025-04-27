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
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 bg-white shadow-md gap-4 md:gap-0">
      <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
        AI Safety Incident Dashboard
      </h1>

      <div className="flex justify-center md:justify-center w-full md:w-auto">
        <button
          onClick={openForm}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition w-full md:w-auto"
        >
          Report New Incident
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
        <select
          value={selectedSeverity}
          onChange={(e) => setSelectedSeverity(e.target.value)}
          className="border p-2 rounded-md w-full md:w-auto"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          onClick={handleSortToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full md:w-auto"
        >
          Sort: {sortOrder === 'latest' ? 'Latest First' : 'Oldest First'}
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;

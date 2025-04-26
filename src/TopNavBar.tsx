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
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">AI Safety Incident
      Dashboard</h1>

      <div className="flex-1 flex justify-center">
        <button
          onClick={openForm}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Report New Incident
        </button>
      </div>

      <div className="flex items-center gap-4">
        <select
          value={selectedSeverity}
          onChange={(e) => setSelectedSeverity(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button
          onClick={handleSortToggle}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Sort: {sortOrder === 'latest' ? 'Latest First' : 'Oldest First'}
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;

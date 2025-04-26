import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import { incidents as initialIncidents } from './data';
import DisplayCard from './DisplayCard';
import ReportIncidentForm from './ReportIncidentForm';

const App: React.FC = () => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const [showForm, setShowForm] = useState(false);

  const filteredIncidents = incidents.filter((incident) =>
    selectedSeverity === 'All' ? true : incident.severity === selectedSeverity
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
  });

  const handleAddIncident = (newIncident: any) => {
    setIncidents([...incidents, newIncident]);
  };

  const nextId = incidents.length + 1 > 35 ? incidents.length + 1 : 36;

  return (
    <div>
      <TopNavBar
        selectedSeverity={selectedSeverity}
        setSelectedSeverity={setSelectedSeverity}
        handleSortToggle={() => setSortOrder(sortOrder === 'latest' ? 'oldest' : 'latest')}
        sortOrder={sortOrder}
        openForm={() => setShowForm(true)}
      />

      {showForm && (
        <ReportIncidentForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddIncident}
          nextId={nextId}
        />
      )}

      {/* Display Box */}
      <div className="mt-8 p-6 border border-gray-300 rounded-lg text-center">
        <h2 className="text-2xl font-semibold">AI Safety Incidents</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {sortedIncidents.map((incident) => (
            <DisplayCard key={incident.id} incident={incident} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

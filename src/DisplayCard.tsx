import React, { useState } from 'react';

interface Incident {
  id: number;
  title: string;
  description: string;
  severity: string;
  reported_at: string;
  long_description: string;
}

interface DisplayCardProps {
  incident: Incident;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ incident }) => {
  const [showMore, setShowMore] = useState(false);

  const severityColors: { [key: string]: string } = {
    Low: 'bg-yellow-100 text-yellow-800',
    Medium: 'bg-orange-100 text-orange-800',
    High: 'bg-red-100 text-red-800',
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-50 cursor-pointer">
      <h1 className="text-xl font-semibold mb-2">ID: {incident.id}</h1>
      <h3 className="text-xl font-semibold mb-2">{incident.title}</h3>
      
      <p className="text-gray-600 mb-4">{incident.description}</p>

      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${severityColors[incident.severity]}`}>
        Severity: {incident.severity}
      </div>

      <p className="text-gray-500 mt-2">
  Reported At: {new Date(incident.reported_at).toLocaleDateString('en-GB')}
</p>

      {showMore && (
        <p className="text-gray-700 mt-4">{incident.long_description}</p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-blue-500 hover:underline"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default DisplayCard;

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
    Low: 'bg-yellow-500 text-black',
    Medium: 'bg-orange-400 text-black',
    High: 'bg-red-500 text-black',
  };

  return (
    <div className="p-6 bg-[#161b22] border border-gray-700 rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-[#1f2733] cursor-pointer">
      <h1 className="text-lg font-semibold text-blue-400 mb-2">ID: {incident.id}</h1>
      <h3 className="text-2xl font-bold text-gray-200 mb-3">{incident.title}</h3>

      <p className="text-gray-400 mb-4">{incident.description}</p>

      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${severityColors[incident.severity]}`}>
        Severity: {incident.severity}
      </div>

      <p className="text-gray-500 mt-4 text-sm">
        Reported At: {new Date(incident.reported_at).toLocaleString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })}
      </p>

      {showMore && (
        <p className="text-gray-300 mt-4">{incident.long_description}</p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-cyan-400 hover:underline focus:outline-none"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default DisplayCard;

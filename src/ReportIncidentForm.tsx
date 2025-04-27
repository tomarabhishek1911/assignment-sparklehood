import React, { useState } from 'react';

interface Incident {
  id: number;
  title: string;
  description: string;
  severity: string;
  reported_at: string;
  long_description: string;
}

interface ReportIncidentFormProps {
  onClose: () => void;
  onSubmit: (incident: Incident) => void;
  nextId: number;
}

const ReportIncidentForm: React.FC<ReportIncidentForimport React, { useState } from 'react';

interface Incident {
  id: number;
  title: string;
  description: string;
  severity: string;
  reported_at: string;
  long_description: string;
}

interface ReportIncidentFormProps {
  onClose: () => void;
  onSubmit: (incident: Incident) => void;
  nextId: number;
}

const ReportIncidentForm: React.FC<ReportIncidentFormProps> = ({ onClose, onSubmit, nextId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Low',
    reported_at: '',
    long_description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert('All fields must be filled!');
      return;
    }

    const newIncident: Incident = {
      id: nextId,
      ...formData,
    };

    onSubmit(newIncident);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#0d1117] p-6 rounded-lg w-96 shadow-2xl relative border border-gray-700">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">Report New Incident</h2>

        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="bg-[#161b22] border border-gray-600 text-gray-200 w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          className="bg-[#161b22] border border-gray-600 text-gray-200 w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          className="bg-[#161b22] border border-gray-600 text-gray-200 w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <input
          name="reported_at"
          type="datetime-local"
          value={formData.reported_at}
          onChange={handleChange}
          className="bg-[#161b22] border border-gray-600 text-gray-200 w-full p-3 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="long_description"
          placeholder="Long Description"
          value={formData.long_description}
          onChange={handleChange}
          className="bg-[#161b22] border border-gray-600 text-gray-200 w-full p-3 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportIncidentForm;
mProps> = ({ onClose, onSubmit, nextId }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Low',
    reported_at: '',
    long_description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert('All fields must be filled!');
      return;
    }

    const newIncident: Incident = {
      id: nextId,
      ...formData,
    };

    onSubmit(newIncident);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Report New Incident</h2>

        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange}
          className="border w-full p-2 mb-3 rounded-md" />
        
        <input name="description" placeholder="Short Description" value={formData.description} onChange={handleChange}
          className="border w-full p-2 mb-3 rounded-md" />
        
        <select name="severity" value={formData.severity} onChange={handleChange}
          className="border w-full p-2 mb-3 rounded-md">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <input name="reported_at" type="datetime-local" value={formData.reported_at} onChange={handleChange}
          className="border w-full p-2 mb-3 rounded-md" />

        <textarea name="long_description" placeholder="Long Description" value={formData.long_description} onChange={handleChange}
          className="border w-full p-2 mb-3 rounded-md" rows={4} />

        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">Cancel</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReportIncidentForm;

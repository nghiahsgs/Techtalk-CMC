import { useState } from 'react';
import TechTalkModal from './TechTalkModal';

export default function TechTalkCard({ techtalk }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-gray-100"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{techtalk.title}</h3>
        <div className="mb-4">
          <p className="text-gray-600 font-medium">{techtalk.speaker}</p>
          <p className="text-gray-500 text-sm">{techtalk.role}</p>
        </div>
        <p className="text-gray-700 line-clamp-3">{techtalk.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(techtalk.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="text-blue-600 text-sm font-medium">View Details →</span>
        </div>
      </div>

      <TechTalkModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        techtalk={techtalk}
      />
    </>
  );
}
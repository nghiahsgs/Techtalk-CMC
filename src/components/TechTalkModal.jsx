import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function TechTalkModal({ isOpen, setIsOpen, techtalk }) {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = techtalk.slideUrl;
    link.download = `${techtalk.title.toLowerCase().replace(/ /g, '-')}-slides.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <Dialog.Title className="text-2xl font-semibold">
              {techtalk.title}
            </Dialog.Title>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Speaker</h3>
            <p className="text-gray-700">{techtalk.speaker}</p>
            <p className="text-gray-600">{techtalk.role}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-gray-700">{techtalk.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Topics Covered</h3>
            <ul className="list-disc list-inside">
              {techtalk.topics.map((topic, index) => (
                <li key={index} className="text-gray-700">{topic}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Presentation
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
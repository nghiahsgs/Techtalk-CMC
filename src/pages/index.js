import { techtalks } from '../data/techtalks';
import TechTalkCard from '../components/TechTalkCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">TechTalks</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techtalks.map((techtalk) => (
            <TechTalkCard key={techtalk.id} techtalk={techtalk} />
          ))}
        </div>
      </div>
    </div>
  );
}
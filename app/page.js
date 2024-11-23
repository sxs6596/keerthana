import Hero from '../components/Hero'; 
import FeaturedTheses from '../components/FeaturedThesis';
import LatestUpdates from '../components/LatestUpdates';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <LatestUpdates />
      <FeaturedTheses />
    </div>
  );
}

import { Hero } from '@/modules/hero';
import { Carousel } from '@/components/carousel/Carousel';

export default function HomePage() {
  return (
    <div className='flex flex-col gap-10'>
      <Hero />
      <Carousel />
    </div>
  );
}

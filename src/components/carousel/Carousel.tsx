'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useId } from 'react';

import { CarouselPagination } from '@/components/carouselPagination/CarouselPagination';

import { slides } from './carousel.data';

interface Props {}

export function Carousel({}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className='flex flex-col gap-y-6'>
      <CarouselPagination slides={slides} emblaApi={emblaApi} />

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {slides.map(el => {
            const id = useId();

            return (
              <div
                key={id}
                className='flex flex-col flex-[0_0_420px] justify-between min-w-0 h-64 mr-4 p-6 bg-gray rounded-lg
                sm:flex-row sm:flex-wrap sm:basis-[100%] sm:gap-x-6 sm:h-[212px]'
              >
                {el.icon}

                <span
                  className='text-3xl select-none
                  sm:w-[calc(100%-60px-1.5rem)] sm:text-2xl'
                >
                  {el.title}
                </span>

                <span
                  className='hidden
                  sm:block sm:w-full sm:text-sm sm:self-end'
                >
                  {el.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

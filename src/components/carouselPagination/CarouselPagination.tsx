import styles from './carouselPagination.module.css';
import { cn } from '@/utils';

import { useEffect, useId, useState } from 'react';

import type { UseEmblaCarouselType } from 'embla-carousel-react';

interface Props {
  slides: any[];
  emblaApi: UseEmblaCarouselType['1'];
}

export function CarouselPagination(props: Props) {
  const { slides, emblaApi } = props;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setIsSliding(true);
      setTimeout(() => {
        setActiveIndex(emblaApi.selectedScrollSnap());
        setIsSliding(false);
      }, 300);
    };

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const onScrollToSlide = (index: number) => {
    if (!emblaApi) return;

    emblaApi.scrollTo(index);
  };

  return (
    <div
      className='hidden
      sm:flex sm:w-30 sm:gap-x-2'
    >
      {slides.map((_, i) => {
        const id = useId();

        return (
          <button
            key={id}
            className={cn('flex w-2 h-2 bg-midGray rounded-full', {
              [styles.active]: i === activeIndex,
              [styles.sliding]: i === activeIndex && isSliding,
            })}
            onClick={() => onScrollToSlide(i)}
          />
        );
      })}
    </div>
  );
}

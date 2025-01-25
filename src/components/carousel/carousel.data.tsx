import Analysis from './assets/analysis.svgr';
import SV from './assets/sv.svgr';
import Job from './assets/job.svgr';
import Training from './assets/training.svgr';
import Interview from './assets/interview.svgr';
import Recomendation from './assets/recommendation.svgr';

export const slides = [
  {
    title: 'Анализ текущего состояния карьеры',
    description:
      'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
    icon: <Analysis width={60} height={60} className='shrink-0' />,
  },
  {
    title: 'Сопроводительные письма и резюме',
    description:
      'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
    icon: <SV width={60} height={60} className='shrink-0' />,
  },
  {
    title: 'Поиск работы',
    description:
      'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
    icon: <Job width={60} height={60} className='shrink-0' />,
  },
  {
    title: 'Тренинг по презентации личного бренда',
    description: `Подсветим сильные стороны и грамотно выстроим самопрезентацию`,
    icon: <Training width={60} height={60} className='shrink-0' />,
  },
  {
    title: 'Подготовка к собеседованию',
    description: 'Научим говорить о себе кратко, ярко и профессионально.',
    icon: <Interview width={60} height={60} className='shrink-0' />,
  },
  {
    title: 'Рекомендация по базе STEMPS Career',
    description: 'Поможем встретиться соискателю и работодателю.',
    icon: <Recomendation width={60} height={60} className='shrink-0' />,
  },
];

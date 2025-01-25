interface Props {}

export function Hero({}: Props) {
  return (
    <div
      className='flex justify-between border-b border-b-ligthGray
      sm:flex-wrap sm:border-b-0'
    >
      <div
        className='py-3 w-1/12
        sm:w-full pb-2 sm:pt-0 sm:border-b sm:border-b-ligthGray'
      >
        <span
          className='text-violet text-5xl font-normal
          sm:text-2xl'
        >
          1.0
        </span>
      </div>

      <div
        className='py-3 w-7/12 max-w-[960px]
        sm:w-full sm:pt-2 sm:pb-0'
      >
        <span
          className='text-violet text-5xl font-normal
          sm:sm:text-2xl'
        >
          Наши услуги
        </span>
      </div>
    </div>
  );
}

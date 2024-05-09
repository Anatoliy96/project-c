import React from 'react'

const Form = () => {
  return (
    <section className='bg-customGray'>
        <div className='flex flex-col items-center w-full h-full pb-10 container mx-auto'>
        <div className='text-white font-space-grotesk lg:w-[40%] mx-auto p-5 mt-10 w-[50%]'>
            <h1 className='font-semibold lg:text-6xl sm:text-3xl mt-10 pb-8'>Готово ли сте да работим заедно?</h1>
            <p className=''>Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
        </div>
        <div className='p-4'>
            <input className='p-4 rounded-l-md' type='text' placeholder='мобилен телефон'></input>
            <button className='bg-customYellow p-4 rounded-r-md hover:bg-slate-400 hover:text-white duration-300'>
                Изпрати
            </button>
        </div>
        </div>
        
        
    </section>
  )
}

export default Form
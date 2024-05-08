import React from 'react'

const Header = () => {
  return (
    <section>
        <div className='flex flex-col w-[90%] mx-auto text-center'>
            <div className='w-[80%] mx-auto p-10 text-customBlack'>
            <h1 className='text-space-grotesk text-black font-semibold lg:text-[72px] w-[80%] mx-auto 
             text-6xl md-mt-[70px] md:leading-[108%] md:-tracking-[4px] lg:w-[50%] lg:pt-10'>Гъвкави решения за сухопътен транспорт за всеки клиент</h1>
            </div>
            <div className='flex justify-center'>
            <img src='hero-image.png' width={969} height={690}></img>                    
            </div>
            
        </div>
    </section>
  )
}

export default Header
const Description = () => {
  return (
    <section className="flex flex-col justify-center items-center p-10 lg:w-[60%] w-[100%] mx-auto">
       <div>
        <div className="justify-center items-center">
          <h1 className="font-space-grotesk font-semibold text-customBlue mb-9 mt-5 lg:text-5xl md:text-3xl sm:text-2xl">Решения</h1>
          <p className="font-inter text-customBlue lg:text-xl text-l">Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.</p>
          <p className="pt-10 font-inter text-customBlue lg:text-xl text-l">Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.</p>
          <ol className="list-disc font-inter text-customBlue lg:text-xl text-l lg:ml-8 ml-5">
             <li>Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
             <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
             <li>Взимане на стоки и доставки за от и в България;</li>
             <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
             <li>Регулярни групажни линии;</li>
             <li>Транспортни услуги до Турция и Близкия изток;</li>
             <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
          </ol>
        </div>
        <div className="pt-7">
        <h2 className="font-space-grotesk font-semibold text-customBlue lg:text-5xl md:text-3xl sm:text-2xl mb-9 mt-5">Предимства </h2>
            <p className="font-inter lg:text-xl text-l text-customGreen">Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.</p>
            <p className="pt-10 font-inter lg:text-xl text-l text-customGreen">Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.</p>
        </div>
       </div>
    </section>
    
  )
}

export default Description
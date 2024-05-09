

const Services = () => {
    return (
      <section>
          <div className="flex justify-start p-10 items-center">
              <h1 className="font-space-grotesk font-semibold text-5xl text-customBlack p-5 lg:mr-[1000px] mr-[100px]">Други услуги</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 p-5">
              <div className="flex flex-col gap-1 lg:w-[30%]  items-center justify-center">
                  <img src="opasni-tovari.png" alt="" className="rounded-xl hover:scale-105 duration-300"/>
                  <p className="text-customBlue text-2xl font-semibold p-5">Опасни товари
                      (ADR)
                  </p>
              </div>
  
              <div className="flex flex-col gap-1 lg:w-[30%] items-center justify-center">
                  <img src="hladilen-transport.png" alt="" className="rounded-xl hover:scale-105 duration-300" />
                  <p className="text-customBlue text-2xl font-semibold p-5 ">Хладилен транспорт
                  </p>
              </div>
  
              <div className="flex flex-col gap-1 lg:w-[30%] items-center justify-center">
                  <img src="izvyngabaritni-tovari.png" alt="" className="rounded-xl hover:scale-105 duration-300" />
                  <p className="text-customBlue text-2xl font-semibold p-5 ">Извънгабаритни
                  </p>
              </div>
  
          </div>
      </section>
    )
  }
  
  export default Services
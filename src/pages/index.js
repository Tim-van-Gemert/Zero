import ImageBlock from "@/components/imageBlock"
export default function Home() {
  return (
    <div className="flex flex-col  w-screen items-center h-full ">
      <div className="w-full flex flex-col">
            <div className="w-full h-[250px]  md:h-[350px] lg:h-[600px] flex justify-center items-center bg-top bg-[url('/truck.png')] bg-cover">
              <div class="w-full h-full relative z-10 flex  justify-center items-center backdrop-brightness-[25%]">
                  <h1 className="uppercase justify-center text-center text-white relative text-[35px] md:text-[60px] lg:text-[100px]  p-12 flex flex-row  font-primary ">
                    <img src="/leaf.png" className=" md:w-[100px] w-[75px]  md:h-[100px] h-[75px] lg:w-[150px] lg:h-[150px] absolute  bottom-10 lg:bottom-12 right-0 lg:right-6"/>
                    <img src="/leafleft.png" className="  md:w-[100px] w-[75px]  md:h-[100px] h-[75px] lg:w-[150px] lg:h-[150px] absolute  bottom-10 lg: bottom-12 left-0 lg:left-6 "/>
                      The zero waste <br/> foodtruck
                  </h1>
              </div>
            </div>
            <div className="w-full h-[30px] lg:h-[50px] z-20 -mt-6 md:-mt-12 bg-[#E7F5F4]"></div>
      </div>
      <div className="w-full h-fit  max-w-[1360px]">
        <div className="md:mt-24 md:mb-24 mt-12 mb-24 w-full">
          <ImageBlock  url={'/01.png'} imageLeft={true}/>
        </div>
        <div className="md:mt-24 md:mb-24 mt-12 mb-12">
          <ImageBlock  url={'/01.png'} imageLeft={false}/>
        </div>
      </div>
    </div>

  )
}

import ImageBlock from "@/components/imageBlock"
export default function Home() {
  return (
    <div className="flex flex-col  w-screen items-center h-full ">
      <div className="w-full flex flex-col">
            <div className="w-full h-[600px] flex justify-center items-center bg-top bg-[url('/truck.png')] bg-cover">
              <div class="w-full h-full relative z-10 flex  justify-center items-center backdrop-brightness-[30%]">
                  <h1 className="uppercase justify-center text-center text-white relative text-[100px]  p-12 flex flex-row  font-primary ">
                    <img src="/leaf.png" className="w-[150px] h-[150px] absolute bottom-12 right-6"/>
                    <img src="/leafleft.png" className="w-[150px] h-[150px] absolute bottom-12 left-6 "/>
                      The zero waste <br/> foodtruck
                  </h1>
              </div>
            </div>
            <div className="w-full h-[100px] z-20 -mt-12 bg-[#E7F5F4]"></div>
      </div>
      <div className="w-full h-fit  max-w-[1360px]">
        <div className="mt-24 w-full mb-24 ">
          <ImageBlock  url={'/01.png'} imageLeft={true}/>
        </div>
        <div className="mt-24 mb-24 ">
          <ImageBlock  url={'/01.png'} imageLeft={false}/>
        </div>
      </div>
    </div>

  )
}

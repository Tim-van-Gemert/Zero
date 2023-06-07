const MainImage = ({url, inverted, inslider, index}) => {
    return (
        <div className={` w-full lg:w-fit ${!inslider ? 'h-fit ' : 'h-full'}  relative  md:p-3`}>
            <div className={`absolute h-2 md:h-4 ${inverted ? 'top-0 right-0' : 'bottom-0 right-2 md:right-4'} w-[80px] md:w-[114px] bg-[#70B06F90]`}></div>
            <div className={`absolute w-2 md:w-4 ${inverted ? 'top-2 md:top-4 right-0' : 'bottom-0 right-0'} h-[64px] md:h-[98px] bg-[#70B06F90]`}></div>
                <div className="w-full h-full relative">
                    <img src={url} className={`w-full ${!inslider ? 'lg:w-[550px]  lg:h-[350px]' : ' lg:w-full h-[200px] lg:h-full'} p-5 object-cover`}/>
                    
                    {inslider ?
                    <>
                        <div className="rounded-full text-white top-6 text-[36px] right-10 absolute z-20">0{index}</div>
                        <div className="rounded-full w-[100px] absolute z-20 -right-2 -bottom-2 h-[100px] bg-[#E7F5F4]"></div>
                    </>
                    :
                    null}
                </div>
            <div className={`absolute h-2 md:h-4 ${inverted ? 'bottom-0 left-0' : 'top-0 left-2 md:left-4'} w-[80px] md:w-[114px] bg-[#70B06F90]`}></div>
            <div className={`absolute w-2 md:w-4 ${inverted ? ' bottom-2 md:bottom-4 left-0' : 'top-0 left-0'} h-[64px] md:h-[98px] bg-[#70B06F90]`}></div>
        </div>
    )
}

export default MainImage
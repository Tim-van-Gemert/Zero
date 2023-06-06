const MainImage = ({url, inverted}) => {
    return (
        <div className=" w-full lg:w-fit h-fit  relative  p-5">
            <div className={`absolute h-4 ${inverted ? 'top-0 right-0' : 'bottom-0 right-0'} w-[114px] bg-[#70B06F90]`}></div>
            <div className={`absolute w-4 ${inverted ? 'top-4 right-0' : 'bottom-4 right-0'} h-[98px] bg-[#70B06F90]`}></div>
            <img src={url} className=" w-full lg:w-[550px] p-5 lg:h-[350px] bg-cover"/>
            <div className={`absolute h-4 ${inverted ? 'bottom-0 left-0' : 'top-0 left-0'} w-[114px] bg-[#70B06F90]`}></div>
            <div className={`absolute w-4 ${inverted ? 'bottom-0 left-0' : 'top-4 left-0'} bottom-4 left-0 h-[98px] bg-[#70B06F90]`}></div>
        </div>
    )
}

export default MainImage
import MainImage from "./image"
const ImageBlock = ({ url, imageLeft }) => {
        if(imageLeft) {
        return (
        <div className="grid  h-full w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 px-5 items-center ">
            <MainImage url={url} inverted={imageLeft} />
            <div className="flex flex-col gap-2">
                <p className="text-[30px] md:text-[36px]">Lorem Ipsum</p>
                <p className="text-[24px] md:text-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <p className="text-[24px] md:text-[26px] font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
        </div>
        )
        } else {
        return (
            <div className="grid  h-full w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 px-5 items-center ">
                <div className="flex flex-col gap-2 order-1 md:order-none ">
                    <p className="text-[30px] md:text-[36px]">Lorem Ipsum</p>
                    <p className="text-[24px] md:text-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <p className="text-[24px] md:text-[26px] font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                <MainImage url={url}  inverted={imageLeft}/>
            </div>
        )
        }
}

export default ImageBlock
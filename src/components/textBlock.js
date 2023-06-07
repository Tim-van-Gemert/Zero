import MainImage from "./image"
const TextBlock = ({ url, imageLeft }) => {
    return (
        <div className="grid h-full w-full relative grid-cols-1  items-center ">
              <div className={`flex flex-col gap-4  bg-[#E7F5F4] p-12`}>
                <p className="text-2xl md:text-4xl">Lorem Ipsum</p>
                <p className="text-md md:text-2xl">Our mission is to provide delicious food while minimizing waste and promoting sustainability.</p>
                <p className="text-md md:text-2xl font-thin">We believe in making a positive impact on the environment by adopting eco-friendly practices and offering zero waste options.</p>
              </div>
              {/* <MainImage url={url} inverted={imageLeft} /> */}
        </div>
    )
}

export default TextBlock
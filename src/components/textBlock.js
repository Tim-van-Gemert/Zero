import MainImage from "./image"
const TextBlock = ({title, subtitle, paragraph }) => {
    return (
        <div className="grid h-full w-full relative grid-cols-1  items-center ">
              <div className={`flex flex-col gap-4  bg-[#E7F5F4] p-12`}>
                <p className="text-2xl md:text-4xl">{title}</p>
                <p className="text-md md:text-2xl">{subtitle}</p>
                <p className="text-md md:text-2xl font-thin">{paragraph}</p>
              </div>
        </div>
    )
}

export default TextBlock
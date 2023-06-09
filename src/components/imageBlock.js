import MainImage from "./image";

const ImageBlock = ({ url, imageLeft, title, subtitle, paragraph }) => {
  const imageAlignmentClass = imageLeft ? "order-none" : "order-1 lg:order-none";

  return (
    <div className="grid h-full w-full grid-cols-1  font-secondary lg:grid-cols-2 gap-12 lg:gap-12  items-center">
      {imageLeft && (
        <>
            <MainImage url={url} inverted={imageLeft} />
            <div className={`flex flex-col gap-4 pr-7 ${imageAlignmentClass}`}>
            <p className="text-2xl md:text-4xl">{title}</p>
            <p className="text-md md:text-2xl">{subtitle}</p>
            <p className="text-md md:text-2xl font-secondarylight font-thin">{paragraph}</p>
            </div>
        </>

      )}
      
      {!imageLeft && (
        <>
        <div className={`flex flex-col gap-4 pl-7 ${imageAlignmentClass}`}>
            <p className="text-2xl md:text-4xl">{title}</p>
            <p className="text-md md:text-2xl">{subtitle}</p>
            <p className="text-md md:text-2xl font-secondarylight font-thin">{paragraph}</p>
        </div>
        <MainImage url={url} inverted={imageLeft} />

        </>

      )}
    </div>
  );
};

export default ImageBlock;

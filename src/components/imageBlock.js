import MainImage from "./image";

const ImageBlock = ({ url, imageLeft }) => {
  const imageAlignmentClass = imageLeft ? "order-none" : "order-1 lg:order-none";

  return (
    <div className="grid h-full w-full grid-cols-1  md:px-24 lg:grid-cols-2 gap-12 lg:gap-12 px-5 items-center">
      {!imageLeft && (
        <div className={`flex flex-col gap-2 ${imageAlignmentClass}`}>
          <p className="text-2xl md:text-4xl">Lorem Ipsum</p>
          <p className="text-md md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <p className="text-md md:text-2xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      )}
      <MainImage url={url} inverted={imageLeft} />
      {imageLeft && (
        <div className={`flex flex-col gap-2 ${imageAlignmentClass}`}>
          <p className="text-2xl md:text-4xl">Lorem Ipsum</p>
          <p className="text-md md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <p className="text-md md:text-2xl font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
      )}
    </div>
  );
};

export default ImageBlock;

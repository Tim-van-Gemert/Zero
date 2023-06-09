import MainImage from "./image";

const ImageBlock = ({ url, imageLeft }) => {
  const imageAlignmentClass = imageLeft ? "order-none" : "order-1 lg:order-none";

  return (
    <div className="grid h-full w-full grid-cols-1  font-secondary lg:grid-cols-2 gap-12 lg:gap-12  items-center">
      {imageLeft && (
        <>
            <MainImage url={url} inverted={imageLeft} />
            <div className={`flex flex-col gap-4 ${imageAlignmentClass}`}>
            <p className="text-2xl md:text-4xl">Lorem Ipsum</p>
            <p className="text-md md:text-2xl">Our mission is to provide delicious food while minimizing waste and promoting sustainability.</p>
            <p className="text-md md:text-2xl font-secondarylight font-thin">We believe in making a positive impact on the environment by adopting eco-friendly practices and offering zero waste options.</p>
            </div>
        </>

      )}
      
      {!imageLeft && (
        <>
        <div className={`flex flex-col gap-4 ${imageAlignmentClass}`}>
          <p className="text-2xl md:text-4xl">Lorem Ipsum</p>
          <p className="text-md md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <p className="text-md md:text-2xl font-secondarylight  font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <MainImage url={url} inverted={imageLeft} />

        </>

      )}
    </div>
  );
};

export default ImageBlock;

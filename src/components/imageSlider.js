import MainImage from "./image";

const ImageSlider = ({ url}) => {
    const steps = ['/step1.png', '/step2.png', '/step3.png']
    let index = 0
  return (
    <div className=" w-full lg:w-full grid  grid-cols-1 lg:grid-cols-3  px-5 lg:px-24 gap-16 lg:gap-24">
        { steps.map((step)=>{
            index++
                return (
                    <MainImage url={step} inverted={true} inslider={true} index={index}/>
                )
        
        })}
    </div>
  );
};

export default ImageSlider;

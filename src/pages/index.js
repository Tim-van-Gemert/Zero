import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageBlock from "@/components/imageBlock";
import ImageSlider from "@/components/imageSlider";

export default function Home() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [block1Ref, block1InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [block2Ref, block2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [block3Ref, block3InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col  items-center h-full">
      
      <div className="w-full flex flex-col">
        <div
          ref={titleRef}
          className="w-full h-[300px] md:h-[350px] lg:h-[500px] flex justify-center   relative items-center bg-top bg-[url('/truck.png')] bg-cover"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="uppercase justify-center z-20 text-center text-white relative text-[35px] md:text-[60px] lg:text-[100px] p-12 flex flex-row font-primary"
          >
            <img
              src="/leaf.png"
              className="md:w-[100px] w-[75px] md:h-[100px] h-[75px] lg:w-[150px] lg:h-[150px] absolute bottom-10 lg:bottom-12 right-0 lg:right-6"
            />
            <img
              src="/leafleft.png"
              className="md:w-[100px] w-[75px] md:h-[100px] h-[75px] lg:w-[150px] lg:h-[150px] absolute bottom-10 lg:bottom-12 left-0 lg:left-6"
            />
            The zero waste <br /> foodtruck
          </motion.h1>
          <div className="w-full h-full absolute z-10 flex justify-center items-center backdrop-brightness-[30%]"></div>
        </div>
      <div className="w-full h-[50px] -mt-12  relative z-20  bg-[#E7F5F4]"></div>

      </div>
      <div className="w-full h-fit flex flex-col max-w-[1360px]">
        <motion.div
          ref={block1Ref}
          initial={{ opacity: 0, x: -20 }}
          animate={block1InView ? { opacity: 1, x: 0 } : {}}
          className="my-20 w-full"
        >
          <ImageBlock url={"/01.png"} imageLeft={true} />
        </motion.div>
        <motion.div 
        ref={block3Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={block3InView ? { opacity: 1, y: 0 } : {}}
        className="my-20">
          <ImageSlider/>
        </motion.div>
        <motion.div
          ref={block2Ref}
          initial={{ opacity: 0, x: 20 }}
          animate={block2InView ? { opacity: 1, x: 0 } : {}}
          className="my-20"
        >
          <ImageBlock url={"/02.png"} imageLeft={false} />
        </motion.div>

      </div>
    </div>
  );
}

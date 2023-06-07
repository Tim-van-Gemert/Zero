import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageBlock from "@/components/imageBlock";
import ImageSlider from "@/components/imageSlider";
import TextBlock from "@/components/textBlock";
import Header from "@/components/header";

export default function About() {
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
    <div className="flex flex-col  items-center h-full ">
      
      <div className="w-full flex  justify-center items-center flex-col  ">
        <div
          ref={titleRef}
          className="sm:w-[1200px] w-full sm:h-[300px] md:h-[350px] lg:h-[300px] flex justify-center   relative items-center bg-center bg-[url('/transaction.jpg')] bg-cover"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="uppercase justify-center z-20 text-center text-white relative text-[35px] md:text-[60px] lg:text-[100px] p-12 flex flex-row font-primary"
          >
            Our process
          </motion.h1>
          <div className="w-full h-full absolute z-10 flex justify-center items-center backdrop-brightness-[30%]"></div>
        </div>


      </div>
      <div className="w-full h-fit flex flex-col max-w-[1200px] px-10 lg:px-0">
        <motion.div ref={block1Ref} initial={{ opacity: 0, x: -20 }} animate={block1InView ? { opacity: 1, x: 0 } : {}} className="my-20 w-full">
          <ImageBlock url={"/01.png"} imageLeft={true} />
        </motion.div>
        <motion.div ref={block3Ref} initial={{ opacity: 0, y: 20 }} animate={block3InView ? { opacity: 1, y: 0 } : {}} className="my-20">
        <ImageSlider />
        </motion.div>
        <motion.div ref={block2Ref} initial={{ opacity: 0, x: 20 }} animate={block2InView ? { opacity: 1, x: 0 } : {}} className="my-20">
          <ImageBlock url={"/02.png"} imageLeft={false} />
        </motion.div>

      </div>
    </div>
  );
}

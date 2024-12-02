import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// Helper function to combine class names
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const ParallaxScroll = ({
  imagePath = "/placeholder.jpg",
  className,
}: {
  imagePath?: string;
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <motion.div style={{ y: translateFirst }} className="grid gap-10">
          <img
            src={imagePath}
            className="h-80 w-full object-cover object-left-top rounded-lg m-0 p-0"
            alt="parallax image"
          />
        </motion.div>
        
        <motion.div style={{ y: translateSecond }} className="grid gap-10">
          <img
            src={imagePath}
            className="h-80 w-full object-cover object-center rounded-lg m-0 p-0"
            alt="parallax image"
          />
        </motion.div>
        
        <motion.div style={{ y: translateThird }} className="grid gap-10">
          <img
            src={imagePath}
            className="h-80 w-full object-cover object-right-top rounded-lg m-0 p-0"
            alt="parallax image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
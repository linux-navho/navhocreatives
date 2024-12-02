import { HeroParallax } from "~/components/ui/hero-parallax-scroll";
import  ParallaxScroll  from "~/components/ui/parallax-scroll";
import useSlowScroll from "~/hooks/useSlowScroll";
export default function ParallaxScrollSecondDemo() {
    
    useSlowScroll(0.7);
    const products = [
        {
          title: "Product 1",
          link: "/image1.jpg",
          thumbnail: "/image1.webp",
        },
        {
          title: "Product 2",
          link: "/product2",
          thumbnail: "/image2.webp",
        },
        {
          title: "Product 3",
          link: "/product3",
          thumbnail: "/image3.webp",
        },
      ];
  return <HeroParallax products={products} />;
    {/* <ParallaxScroll imagePath="/image1.webp" />; */}
}


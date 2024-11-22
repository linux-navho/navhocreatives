import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

export default function CarouselDemo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel
        className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl" // Responsively adjust max width
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
          Fade({})
        ]}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-0 relative">
                    <div className="relative w-full aspect-[16/9]">
                      <img
                        src={`image${index + 1}.webp`} // Assuming image files are named image1.jpg, image2.jpg, etc.
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-full absolute top-0 left-0"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

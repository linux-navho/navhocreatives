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

export function Imageslide() {
  return (
    <div className="w-full bg-yellow-900">
      <Carousel
        className="w-full relative"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
          Fade({}),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 rounded-none">
                <CardContent className="p-0 relative">
                  <div className="w-full h-[700px] lg:h-full lg:max-h-svh relative">
                    {/* Image placed first */}
                    <img
                      src={`image${index + 1}.webp`}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-b-[6px] absolute inset-0"
                    />
                    {/* Semi-transparent blue overlay */}
                    <div className="absolute inset-0 bg-blue-600/70 mix-blend-multiply z-10" />
                    {/* Content container */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
                      <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
                        WE PRODUCE<br />QUALITY DRIVERS
                      </h1>
                      <div className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg">
                        <span className="text-white text-xl">079 324 8972</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 21l1.9-5.7a8.5 8.5 0 113.4 3.4z" />
                        </svg>
                      </div>
                      <div className="mt-4">
                        <p className="text-white text-2xl font-semibold">FOR ONLY R3500</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Imageslide;
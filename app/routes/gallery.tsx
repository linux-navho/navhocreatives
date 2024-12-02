import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export default function MasonryGridGallery() {
  // Images organized into 4 columns
  const columns = [
    // Column 1
    [
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    ],
    // Column 2
    [
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://docs.material-tailwind.com/img/team-3.jpg"
    ],
    // Column 3
    [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      "https://docs.material-tailwind.com/img/team-3.jpg",
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ],
    // Column 4

    [
      "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
    ]
  ];

  return (
    <div className="relative h-svh w-full overflow-hidden rounded-lg bg-background">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columns.map((columnImages, idx) => (
          <Marquee
            key={idx}
            vertical
            className="[--duration:30s]"
            pauseOnHover
            reverse={idx % 2 === 1}
          >
            <div className="grid gap-4">
              {columnImages.map((src, imageIdx) => (
                <div key={imageIdx} className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        className={cn(
                          "h-auto max-w-full rounded-lg object-cover object-center cursor-pointer",
                          "transition-all duration-300 hover:scale-105"
                        )}
                        src={src}
                        alt={`gallery-photo-${imageIdx}`}
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[768px]">
                      <img
                        alt={`gallery-photo-${imageIdx}-large`}
                        className="h-full w-full object-cover object-center rounded-lg"
                        src={src}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </Marquee>
        ))}
      </div>
    </div>
  );
}
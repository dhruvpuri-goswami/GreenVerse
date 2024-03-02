import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import plantImg from "../../../public/plant.jpg"
import plant1Img from "../../../public/plant_1.jpg"

export function PostImageSlide() {
  const arr = [plant1Img, plantImg];
  return (
    <Carousel className="w-[250px] max-w-sm m-auto">
      <CarouselContent>
        {arr.map((imgSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                <img width={800} height={400} src={imgSrc.src} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}

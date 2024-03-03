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
import Image from "next/image"

export function PostImageSlide({ images }) {
  console.log(images)
  return (
    <Carousel className="w-[250px] max-w-sm m-auto">
      <CarouselContent>
        { images.length === 0 && 
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <Image
                    src={plantImg}
                    alt="Your image description"
                    width={500}
                    height={300}
                    layout="responsive" // Optional: Use responsive layout
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        }
        {
        images.map((imgSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <Image
                    src={imgSrc}
                    alt="Your image description"
                    width={500}
                    height={300}
                    layout="responsive" // Optional: Use responsive layout
                  />
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

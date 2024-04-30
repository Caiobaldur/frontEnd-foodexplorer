import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DishCard } from "../DishCard";
import { Container } from "./styles";

export function EmblaCarousel(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Container>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <h1>{props.title}</h1>
          <div className="embla__container">
            <div className="embla__slide">
              <DishCard />
            </div>
            <div className="embla__slide">
              <DishCard />
            </div>
            <div className="embla__slide">
              <DishCard />
            </div>
            <div className="embla__slide">
              <DishCard />
            </div>
            <div className="embla__slide">
              <DishCard />
            </div>
            <div className="embla__slide">
              <DishCard />
            </div>
          </div>
        </div>

        <div>
          <button class="embla__prev" onClick={scrollPrev}>
            Prev
          </button>
          <button class="embla__next" onClick={scrollNext}>
            Next
          </button>
        </div>
      </div>
    </Container>
  );
}
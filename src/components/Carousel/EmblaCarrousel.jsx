import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DishCard } from '../DishCard'
import { Container } from "./styles";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <Container>

    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <DishCard/>
        </div>
        <div className="embla__slide"><DishCard/></div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
    </Container>
  )
}

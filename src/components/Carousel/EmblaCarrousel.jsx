import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from "embla-carousel-autoplay";
import { DishCard } from "../DishCard";
import { Container } from "./styles";

export function EmblaCarousel(props) {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel([Autoplay()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  

  return (
    <Container>
      <section className="embla">
        <h1>{props.title}</h1>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <DishCard/>
            </div>
          ))}
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
}
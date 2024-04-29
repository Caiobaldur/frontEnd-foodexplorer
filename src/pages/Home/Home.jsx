import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { EmblaCarousel } from "../../components/Carousel/EmblaCarrousel";
import { Footer } from "../../components/Footer/Footer";

import { Container } from "./styles";

export function Home() {

  return (
    <Container>
       <Header/>
       <FeatureCard/>
       <EmblaCarousel/>
       <Footer/>
    </Container>
  );

}
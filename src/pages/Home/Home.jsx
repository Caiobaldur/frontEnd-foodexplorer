import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { EmblaCarousel } from "../../components/Carousel/EmblaCarrousel";
import { Footer } from "../../components/Footer/Footer";
import { Container } from "./styles";
import { DishCard } from "../../components/DishCard";

export function Home() {
   const mealsSlides = [
    <DishCard key={1} />, 
    <DishCard key={2} />,
    <DishCard key={3} />,
    <DishCard key={4} />,
    <DishCard key={5} />,
    <DishCard key={6} />,
  ];


  return (
    <Container>
       <Header/>
       <FeatureCard/>
       <EmblaCarousel slides={mealsSlides} title="Refeições"/>
       <EmblaCarousel slides={mealsSlides} title="Sobremesas"/>
       <EmblaCarousel slides={mealsSlides} title="Bebidas"/>
       <Footer/>
    </Container>
  );

}
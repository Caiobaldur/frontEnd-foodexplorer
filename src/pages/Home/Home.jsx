import { Button } from "../../components/Button/Button";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { Header } from "../../components/Header/Header";

import { Container } from "./styles";

export function Home() {

  return (
    <Container>
       <Header/>
       <FeatureCard/>
    </Container>
  );

}
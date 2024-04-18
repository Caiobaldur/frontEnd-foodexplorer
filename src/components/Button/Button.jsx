import { Container } from "./styles";

export function Button(props) {
  return (
    <Container type="button">
      <p>{props.title}</p>
    </Container>
  );
}

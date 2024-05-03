import { Container } from "./styles";

export function Button(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <Container type="button" onClick={handleClick}>
      {props.title}
    </Container>
  );
}

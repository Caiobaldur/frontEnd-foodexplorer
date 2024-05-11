import { FiPlus, FiX } from "react-icons/fi";
import {Container} from './styles';

export function IngredientTag({isNew, value, onClick, ...rest}){
  return(
    <Container>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
      type="button"
      onClick={onclick}
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}
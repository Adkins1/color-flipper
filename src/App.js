import { useState } from 'react'
import randomColor from 'color-randomizer'
import {
  Container,
  Navbar,
  MainSection,
  ColorCode,
  Button, 
  NavButton,
  NavLogo
} from './AppStyles'

function App() {

  const [color, setColor] = useState("#29a329")
  const [option, setOption] = useState("hex")

  const generateColor = () => {
    setColor(randomColor({ format: option }));
  }

  const changeOption = (e, opt) => {
    e.preventDefault();
    setOption(opt);
  }

  return (
      <Container>
        <Navbar>
          <NavLogo>React ColorFlipper</NavLogo>
          <NavButton 
            onClick={e => changeOption(e, "name")}
            className={option === 'name' ? 'active' : null}
          >Normal</NavButton>
          <NavButton 
            onClick={e => changeOption(e, "hex")}
            className={option === 'hex' ? 'active' : null}
          >Hex</NavButton>
          <NavButton 
            onClick={e => changeOption(e, "rgb")}
            className={option === 'rgb' ? 'active' : null}  
          >RGB</NavButton>
        </Navbar>
          <MainSection color={color}>
            <ColorCode>Background: {color}</ColorCode>
            <Button onClick={generateColor}>Change color</Button>
          </MainSection>
      </Container>
  );
}

export default App;

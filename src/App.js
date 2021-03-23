import React from 'react';
import BurgerBox from './components/containers/Burger/Burger';
import GlobalStyle from './components/GlobalStyle';
import Pear from './components/Pear/Pear';
import OrangeBox from './components/Orange/Orange';
import Tomato from './components/Tomato/Tomato';
import GrapesBox from './components/Grapes/Grapes';
import BroccoliBox from './components/Broccoli/Broccoli';
const App = () => {
  return(
    <div>
      <GlobalStyle/>
      <BurgerBox/>
      <Tomato/>
      <Pear/>
      <OrangeBox/>
      <GrapesBox/>
      <BroccoliBox/>
    </div>
  )
}
export default App
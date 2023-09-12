import React from "react";
import { useState } from "react";
import BaseWithControls from "../components/BaseWithControls";
import {ThemeProvider} from '@mui/material/styles';
import theme from "../theme/theme";


function App() {
 
  // let initialNavigation = () => {
  //   let x = window.location.href.split('/')
  //   if(x[x.length-1] === "") {
  //     return "works"
  //   }
  //   return(x[x.length-1])
  // }

  // navigation function
  let setNewStance = (newStance) => {
    changeStance(newStance);
  };
  let [stance, changeStance] = useState('');

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <BaseWithControls stance={stance} changeStance={setNewStance} />
    </div>
    </ThemeProvider>
  );
}

export default App;



import React, { useState } from "react"

import "../style/main.scss"

import Menu from "../components/organisms/Menu"
import TextList from "../components/atoms/Text"
import options from "../components/molecules/Options"
import MyComponent from "../components/molecules/List"


const App = () => {

  return (
    <>
    <Menu/>
    <TextList />
    <MyComponent options={options}/>
    
    </>
  )

}

export default App;

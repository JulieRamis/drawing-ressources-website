import React, { useState } from "react"

import Menu from "../components/organisms/Menu"

import "../style/main.scss"
import MyComponent from "../components/molecules/List"

const App = () => {

  return (
    <>
    <Menu/>
    <MyComponent/>
      <p>A</p>
    </>
  )

}

export default App;

import React, { useState } from "react"

import "../style/main.scss"

import Menu from "../components/organisms/Menu"
import TextList from "../components/atoms/Text"
import MyComponent from "../components/molecules/List"

const App = () => {

  return (
    <>
    <Menu/>
    <TextList />
    <MyComponent/>
      <p>A</p>
    </>
  )

}

export default App;

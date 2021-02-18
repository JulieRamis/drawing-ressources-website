import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'posture', label: 'Postures' },
  { value: 'cloth', label: 'Vêtements' },
  { value: 'haircut', label: 'Coupe de cheveux' },
  { value: 'anatomy', label: 'Anatomie' },
  { value: 'expressions', label: 'Expressions' },
  { value: 'creature', label: 'Créatures, Animaux' },
  { value: 'sets', label: 'Décors' },
  { value: 'materials', label: 'Matériaux' },
  { value: 'perspective', label: 'Perspective' },
  { value: 'shadow-light', label: 'Ombre, Lumière' },
  { value: 'colorimetry', label: 'Colorimétrie' }
]

const MyComponent = () => (
  
  <Select onChange={() => console.log(options)} 
    options={options}
    defaultValue= {[options[5]]}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
      ...theme.colors,
        text: 'orangered',
        primary25: 'hotpink',
        primary: '#a4243b',
      },
    })}
  />
)

export default MyComponent
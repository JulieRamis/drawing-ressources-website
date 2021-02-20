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
  <div className="zone-list">
   
  <Select onChange={() => console.log(options)} 
    options={options}
    defaultValue= {[options[5]]}
    styles={{
      control: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
      }),
      menu: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
      }),
      option: (provided, state) => ({
         ...provided,
         borderRadius: 10,
         cursor: 'pointer'
      })
    }}
    theme={(theme) => ({
      ...theme,
      borderRadius: 10,
      colors: {
      ...theme.colors,
        text: 'orangered',
        primary25: '#9a031e57',
        primary: '#9a031e',
      },
    })}
  />
  </div>
)

export default MyComponent
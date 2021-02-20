import React, { useState } from 'react'
import Select from 'react-select'

const MyComponent = (props) => {
  const [text, setText] = useState(props.options[0]);

  const onChange = selectedOption => {
    setText(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
    return (
      <div className="zone-list">
      <Select
        options={props.options}
        onChange={onChange}
        value={text}
        
        styles={{
          control: (provided) => ({
            ...provided,
            cursor: 'pointer',
          }),
          menu: (provided) => ({
            ...provided,
            cursor: 'pointer',
          }),
          option: (provided) => ({
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
    );
};
export default MyComponent;

import React, { useState } from 'react'
import Select from 'react-select'

import Anatomy from "../../organisms/Content/Anatomy"
import Cloth from "../../organisms/Content/Cloth"
import Colorimetry from "../../organisms/Content/Colorimetry"
import Creature from "../../organisms/Content/Creature"
import Expressions from "../../organisms/Content/Expressions"
import Haircut from "../../organisms/Content/Haircut"
import Materials from "../../organisms/Content/Materials"
import Perspective from "../../organisms/Content/Perspective"
import Posture from "../../organisms/Content/Posture"
import Sets from "../../organisms/Content/Sets"
import ShadowLight from "../../organisms/Content/ShadowLight"


const MyComponent = (props) => {
  const [text, setText] = useState(props.options[0]);

  const [div, setDiv] = useState();
    const handleClick = () =>  {
      switch (text.value) {
        case 'anatomy':
          {setDiv(<div><Anatomy /></div>)};break;
        case 'cloth':
          {setDiv(<div><Cloth /></div>)};break;
          case 'colorimetry':
          {setDiv(<div><Colorimetry /></div>)};break;
        case 'creature':
          {setDiv(<div><Creature /></div>)};break;
          case 'expressions':
          {setDiv(<div><Expressions /></div>)};break;
        case 'haircut':
          {setDiv(<div><Haircut /></div>)};break;
          case 'materials':
          {setDiv(<div><Materials /></div>)};break;
        case 'perspective':
          {setDiv(<div><Perspective /></div>)};break;
          case 'posture':
          {setDiv(<div><Posture /></div>)};break;
        case 'sets':
          {setDiv(<div><Sets /></div>)};break;
        case 'shadow-light':
        {setDiv(<div><ShadowLight /></div>)};break;
          
        default:
          {setDiv(<div></div>)};
      }
    }
  
  const onChange = selectedOption => { 
    setText(selectedOption)
  };
    return (
      <article>
      <section className="zone-list">
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
      <button onClick={() => handleClick()}> Clear Selection </button>
      </section>

        {div}
        
      </article>
    );
};
export default MyComponent;

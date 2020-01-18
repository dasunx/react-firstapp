import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) =>(
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps}/>
    {
      label ?
      (<lable className={`${otherProps.value.length ? 'shrink' : ''} form-input-lable`}>
        {lable}
      </lable>)
      :null
    }
  </div>
)

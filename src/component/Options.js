import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div >
        <div className="widget_header">
        <h3 className="widget_header--title">Your Options </h3>
        <button
         onClick={props.handledeleteoption}
         className="button button--link"
         >Remove All </button>
         </div>
        {props.options.length===0 && <p className=" widget--message">enter an option</p>}
        {   
           props.options.map((option,index) => (
           <Option 
           key={option} 
           optionText={option}
           count={index + 1}
           handledeleteoptionsingular={props.handledeleteoptionsingular}
           />
        ) )

        }
            
    </div>

);

export default Options;
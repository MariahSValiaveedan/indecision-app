import React from 'react';

const Action = (props) => (
    <div>

         <button className="big-button"
         onClick={props.handlepick}
         disabled={!props.hasoptions}
         >
         what should i do?</button>
    </div>     
 ); 



export default Action;
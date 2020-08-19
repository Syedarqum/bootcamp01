import React from 'react';
function Dinner(props){
    return(
        <div>
             <h1>Pakistan is serving cake today</h1>
             <h1>Hm dekhein gey</h1>
             <h1>Today we are serving {props.serving}</h1>
        </div>)
   }
 export default Dinner;
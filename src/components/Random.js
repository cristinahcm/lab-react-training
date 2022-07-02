import React from "react";
function Random(props) {
    const random = Math.floor(props.min + Math.random() * (props.max - props.min));
      return (
        <div>Random value is {random}</div>
      )
    }
    
    export default Random;
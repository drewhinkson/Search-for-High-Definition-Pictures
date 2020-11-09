import React from 'react'


const RandomPicture= (props) => { 

   function clickMe(){
    props.onClick()
   }
     
  

    return (
        <div >
    <button onClick ={clickMe}>Random Picture</button>
    </div>
    )
}

export default RandomPicture;
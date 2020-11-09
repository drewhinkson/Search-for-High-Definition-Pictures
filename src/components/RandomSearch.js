import React from 'react'


const RandomPicture= (props) => { 

   function clickMe(){
    props.onClick()
   }
     
  

    return (
        <div>
    <button style={{borderRadius:15}}className="ui orange button" onClick ={clickMe}>Random Picture</button>
    </div>
    )
}

export default RandomPicture;
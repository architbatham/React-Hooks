import React, { useState } from 'react'

export default function UseState() {
    //state variable

    //working with setter function We have create hear object insted 
    //of create useStatess 

    const [car , setCar] = useState({
        brand : "I phone-X",
        model : "IOS11",
        year : "2015",
        color: "Red"
    });



    const updateColor = ()=>{
        setCar((previous)=>{
            return{...previous,color: "blue"}
        })
    }



  return (
    <>
    <h1>My {car.brand} </h1>
    <h2>Its is a {car.color} {car.model} {car.year}</h2>
    <button onClick={updateColor}>Blue</button>
    </>
  )
}

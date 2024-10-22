import React,{useState} from 'react'

export default function App2() {
    const [car, setCar] = useState({
        model:"Royal enfield",
        color: "gray",
        year: 2024,
        price: 410000
    });
    const handleChange = () => {
        setCar(oldinfo => {
            return {...oldinfo, color:"black", engine: "350CC"}
        });
    };
    
  return (
    <>
    <h1>Car information</h1>
    <p>
        <b>Model:</b> {car.model} <br />
        <b>Color:</b> {car.color} <br />
        <b>Year:</b> {car.year} <br />
        <b>Price:</b> {car.price} <br />
    </p>
    <button onClick={handleChange}>Click to change</button>
    </>
    
  )
}


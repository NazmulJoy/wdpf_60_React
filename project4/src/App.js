import React from 'react'
import { fruits } from './Fruits';
import Button1 from './Count';
    const items = fruits.map(
        fruit=>
            <li key={fruit.id} style={{color: fruit.local ? 'Red' : 'Green'}}>
               <b>Name:</b> {fruit.title} <br/>
               <b>Price:</b> {fruit.price}
            </li>
         
    )
    function MyButton() {
        function handleClick() {
          alert('You clicked me!');
        }
      
        return (
          <button className='blue' onClick={handleClick}>
            Click me
          </button>
        );
      }

        const user = {
        name: 'Jim carrey',
        imageUrl: 'https://i.guim.co.uk/img/media/01f5a19891a82b24fdbf635f272f6a8b0f51680b/485_39_1692_1015/master/1692.jpg?width=620&dpr=1&s=none&crop=none',
        imageSize: 200,
      };

export default function App() {
  return (
    <>
    <div>This is App</div>
    <MyButton/>
    <h1>{user.name}</h1>
    <img
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: '240px',
          height: '250px'
        }}
      />
      <hr/>
      <ul>
        {items}
      </ul>
      <Button1/>
    </>
  )
}



/*
import React, { useState } from 'react';
import './eventhandlers';


function Handlers(){




  function button(){
    alert('Thank you for submitted application!');
  }
  const clickButton = (name) => {
  console.log('we will get back to you after review your application! '+  name)
  }
return (
  <div>
    <button onClick={button} className='submit'>Submit</button>
    <button onClick={(e) => {clickButton('Sindhu')}} className='submit'>Click me</button>
   
  </div>
)



const [text, setText] = useState('Guest');
const [quantity, setQuantity] = useState(1);
const [comment, setComment] = useState('');
const [payment, setpayment] = useState('');
const[shipping, setShipping] = useState('');

function inputField (event){
  setText(event.target.value)
 
}
function clickButton(){
  alert(text+', Thank you!!')

}
function inputQuantity(event){
  setQuantity(event.target.value)

}
function commentChange(event){
  setComment(event.target.value)

}

function paymentChange(event){
  setpayment(event.target.value)

}
function shippingChange(event){
  setShipping(event.target.value)
}
return(
  <div>
    <input onChange={inputField} value={text} ></input>
    <button onClick={clickButton}>Submit</button>
    <p>Name: {text}</p>


    <input value={quantity} type ='number' onChange={inputQuantity}></input>
    <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={commentChange} placeholder='Please provide house address'/>
    <p>Comment: {comment}</p>

    <select value={payment} onChange={paymentChange}>
      <option value ='' >Select an option</option>
      <option value="Visa">Visa</option>
      <option value="Master Card">Master Card</option>
      <option Value="Gift Card">Gift Card</option>
    </select>
    <p>payment: {payment}</p>

<label>
  <input type='radio' value='pickup'
  checked = {shipping === 'pickup'} onChange={shippingChange}
  
  ></input>Pickup
</label>

<br></br>

<label>
  <input type='radio' value ='Delivery'  checked={shipping === 'Delivery'} onChange={shippingChange}></input>
Delivery</label>

<p>Shipping: {shipping}</p>


  </div>
)



} 

export default Handlers;
*/

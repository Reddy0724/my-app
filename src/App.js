import './App.css';
import React,{useState} from 'react';
import axios from 'axios';



function Button(){
  const[option, setOption] = useState('');
  const [search, setSearch] =useState('');

  function optionElement(event){
    setOption(event.target.value)

  }
  function searchhandler(event){
    
  setSearch(event.target.value);
  console.log(search);
     
  }


  return(
    <div className='buttons'>
      <div  >
      <select  className='optionButton' value={option} onChange={optionElement}>
          
      <option value=''>women's wear</option>
      <option value = 'Jeans'>Jeans</option>
      <option value= 'Tops'>Tops</option>
      <option value='Dresses'>Dresses</option>
      <option value="Sport's wear">Sport's Wear</option>

      </select>
      <select className='optionButton' value={option} onChange={optionElement}>
          
          <option value=''>Men's wear</option>
          <option value = 'Indo-Western Attire'>Indo-Western Attire</option>
          <option value= 'Suits'>Suits</option>
          <option value='Hoodies'>Hoodies</option>
          <option value="Sport's wear">Sport's Wear</option>
          <option value="Contemporary Styles">Contemporary Styles</option>

    
          </select>
          <select className='optionButton' value={option} onChange={optionElement}>
          
          <option value=''>Kid's wear</option>
          <option value = 'Floral & Party Dresses'>Floral & Party Dresses</option>
          <option value= 'Off-Shoulder Gowns'>Off-Shoulder Gowns</option>
          <option value='Dresses'>Dresses</option>
          <option value="Sport's wear">Sport's Wear</option>
         
    
          </select>
          <select className='optionButton' value={option} onChange={optionElement}>
          
          <option value=''>Beauty Products</option>
          <option value = 'Skincare Essentials'>Skincare Essentials</option>
          <option value= 'Moisturizers & Serums'>Moisturizers & Serums</option>
          <option value='Eyeshadow Palettes'> Eyeshadow Palettes</option>
          <option value='Cleansing Combo'>Cleansing Combo</option>
    
          </select>
       <input value = {search} onChange= {searchhandler} type='text' className= 'searchButton' placeholder='Looking for something?'></input>
      
       
       
      
      
        
      </div>
      <p className="para">we're happy to help you!!</p>
   
      
    
      </div>
      
   
   

  )

}

function App() {

  return (
    <div className="App">
        <p>  
         Welcome to My page
        </p>
        < Button/>
     </div>
      
  );
}

export default App;

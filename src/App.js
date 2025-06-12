import './App.css';

function Button(){
  return(
    <div className='buttons'>
      <div >
      <button>
     woman
      </button>
      <button>
        Men
      </button>
      <button>
        Kids
        </button>
      <button>
        Home
      </button>
      <button>
        Beauty
      </button>
        
      </div>
   
      
      <input placeholder="What you'r looking for?"></input>
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
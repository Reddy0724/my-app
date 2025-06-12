import './App.css';

function Button(){
  return(
    <div className='buttons'>
      <div >
      <button>
     woman's wear
      </button>
      <button>
        Men's wear
      </button>
      <button>
        Kid's wear
        </button>
      <button>
        Home page
      </button>
      <button>
        Beauty Products
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
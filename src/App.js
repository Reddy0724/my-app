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
      welcome to Home page
      </button>
      <button>
        Beauty Merchandise
      </button>
      <p className="para">we're happy to help you!!</p>
      
        
      </div>
   
      
      <input placeholder="how may i help?"></input>
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

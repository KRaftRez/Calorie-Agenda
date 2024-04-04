import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  return (
   
    <div className="App">
  
    <div className='SFood'><div className='Text3'>SelectedFood</div></div>
    <div className='Wrapper'>
      <div className='Text1'>Description</div>
      <div className='Text'>Kcal</div>
      <div className='Text'>Protein(g)</div>
      <div className='Text'>Fat(g)</div>
      <div className='Text'>Carbs(g)</div>
    
    </div>
    <div className='Wrapper3'>
      <div className='Text6'>Blue Cheese</div>
      <div className='Text7'>353</div>
      <div className='Text7'>21.4</div>
      <div className='Text7'>27.25</div>
      <div className='Text7'>27.25</div>
    </div>
    <div className='Wrapper3'>
      <div className='Text6'>Blue Cheese</div>
      <div className='Text7'>353</div>
      <div className='Text7'>21.4</div>
      <div className='Text7'>27.25</div>
      <div className='Text7'>27.25</div>
    </div>
    <div className='Wrapper2'>
      <div className='Text0'>Total</div>
      <div className='Text4'>0.0</div>
      <div className='Text4'>0.0</div>
      <div className='Text4'>0.0</div>
      <div className='Text4'>0.0</div>
    </div>
    <div className='Search'>
      <input type="text" className='SearchBar' placeholder="Search..."></input>
      <button className='Button'> +</button>
    </div>
    <div className='Wrapper'>
      <div className='Text1'>Description</div>
      <div className='Text'>Kcal</div>
      <div className='Text'>Protein(g)</div>
      <div className='Text'>Fat(g)</div>
      <div className='Text'>Carbs(g)</div>
    
    </div>
    <div className='Wrapper3'>
      <div className='Text6'>Blue Cheese</div>
      <div className='Text7'>353</div>
      <div className='Text7'>21.4</div>
      <div className='Text7'>27.25</div>
      <div className='Text7'>27.25</div>
    </div>
    <div className='Wrapper3'>
      <div className='Text6'>Blue Cheese</div>
      <div className='Text7'>353</div>
      <div className='Text7'>21.4</div>
      <div className='Text7'>27.25</div>
      <div className='Text7'>27.25</div>
    </div>
    <div className='Wrapper3'>
      <div className='Text6'>Blue Cheese</div>
      <div className='Text7'>353</div>
      <div className='Text7'>21.4</div>
      <div className='Text7'>27.25</div>
      <div className='Text7'>27.25</div>
    </div>
     <div className='Wrapper3'>
      <div className='Text6'>Blue Cheese</div>
      <div className='Text7'>353</div>
      <div className='Text7'>21.4</div>
      <div className='Text7'>27.25</div>
      <div className='Text7'>27.25</div>
    </div>
    
    <div className='AddItem'>
    <div className='AddText'><div className='Text3'>Add Items</div></div>
    <div>
    <input type="text" className='Add' placeholder="Description"></input>
    </div>
    <input type="text" className='Add' placeholder="Kcal"></input>
    <input type="text" className='Add' placeholder="Protain(g)"></input>
    <input type="text" className='Add' placeholder="Fat(g)"></input>
    <input type="text" className='Add' placeholder="Carbs(g)"></input>
    <button className='AddButton'>Add Item</button>
    </div>
    </div>

    

    
  );
}

export default App;

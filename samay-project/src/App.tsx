import './App.css';
import { Button } from '@material-ui/core'
function App(){
    function myfun(){
        alert('hello sir');
    }
    return (
        <div className="App">
            <h1>hello </h1>
            <Button varient= "contained" 
            onClick={myfun}    style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '5px',
                cursor: 'pointer',
              }}>Click</Button>
        </div>
    );
}
   export default App;
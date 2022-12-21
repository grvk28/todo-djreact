import logo from './logo.svg';
import './App.css';
import Form from './form';
import List from './list';

function App(){
	
		return (
			<div className="body">
       <Form/> 
       <hr
                    style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                        width:'100%'
                    }}
                />
                <h2>List</h2>
       <List/> 
			</div>
		);
	}

export default App;

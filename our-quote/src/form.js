import logo from './logo.svg';
import './App.css';

import React from "react";
import axios from "axios";
import { useState } from 'react';

function Form(){
	

	
		let [input1,setInput1]=useState();
    let [input2,setInput2]=useState();

    

	

	const handleInput1 = (e) => {
		setInput1(e.target.value);
    
	};

  const handleInput2 = (e) => {
		//setInput1(e.target.value);
    setInput2(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/wel/", {
				name: input1,
				detail: input2,
			})
			.then((res) => {
				let v={
					user: "",
					quote: "",
				};
			})
			.catch((err) => {});
      setInput1('')
      setInput2('')
	};


		return (
			
        <div className='top'>
				<form className='form' onSubmit={handleSubmit}>
            <div className='inputs'>
					<div className="s1">
						<div className="">Task</div>
                        <div>
						<input type="text" className="input1"
							placeholder="Name of the Task"
							value={input1} name="user"
							onChange={handleInput1} />
            
                        </div>
					</div>

					<div className="s2">
						<div className="">Description</div>
                        <div>
						<input type='text' className="input1"
								placeholder="Describe what to do ....."
								value={input2} 
								onChange={handleInput2}/>
                        </div>
					</div>

          <div className='butn'>
					<button type="submit" className="btn">
						Submit
					</button>
          </div>
          </div>
				</form>
        </div>



				
			
		);
	}

export default Form;

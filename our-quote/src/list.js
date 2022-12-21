import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function List(){
    let data=[{name:'gaurav',details:'ertyui'},{name:'gaurav',details:'ertyui'}]
    
    let [details,setDetails]=useState(data);
    
    useEffect=(()=>{
        axios.get("http://localhost:8000/wel/")
        .then((res) => {
            console.log(res)
            setDetails(res.data) 
        })
        .catch((err) => {})
    },[])
    
   console.log(details);
    
    return(
        <div>
             { details.map((value,i)=>{
                   // console.log(value);
                   return(
                   
                    <div className="list">
                        <div>{i+1}</div>
                        <div>{value.name}</div>
                        <div>{value.details}</div>
                    </div>
                  
                   );
                   
                })
            }
        
        </div>
    )
}

export default List;
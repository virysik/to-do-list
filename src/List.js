import React from "react";
import "./List.css";

export default function List() {
    return (
        <div className = "List">
             <div className="row">
                <div className="col-8">
                    <ul>
                        <li>
                            _________________
                        </li>
                   </ul>
                </div>
                <div className="col-4">  
                      <button className = "btn btn-primary">Not done</button>
                </div> 
            </div>
                    
            
            <form>
                <div className="row"> 
                  <div className="col-9">  
                     <input type="text" className = "form-control"  placeholder="type an action" />
                   </div> 
                   <div className="col-3">
                        <input type="button" className="btn btn-primary" value="Add" />
                   </div>
                </div>
            </form>
        </div>
)
}
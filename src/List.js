import React from "react";
import "./List.css";

export default function List() {
    return (
        <div className = "List">
            
                <div className="row">
                <div className="col-10">
                        <span>* ___________</span>
                        </div>
                         <div className = "col-2">
                    <button>NOT DONE</button>
                    </div>
                  </div>
                    
            
            <form>
                <input type="text" placeholder="type an action" />
                <input type="button" value="Add" />
            </form>
        </div>
)
}
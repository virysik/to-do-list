import React, { useState } from "react";
import Path from "./Path";
import "./List.css";

export default function List() {
    let [action, setAction] = useState({});
    let [actions, setActions] = useState("____________");
    
    function updateAction(event) {
        setAction({
            task: event.target.value,
            key: new Date()
        });
        console.log(action);
    }
    function addAction(event) {
        event.preventDefault();
        setActions(action.task);
    }
    let form = (
        <form onSubmit = {addAction}>
                    <div className="row">
                        <div className="col-9">
                            <input type="text" onChange = {updateAction} className="form-control" placeholder="type an action" />
                        </div>
                        <div className="col-3">
                            <input type="submit" className="btn btn-primary" value="Add" />
                        </div>
                    </div>
            </form>
    )
    
        return (
            <div className="List">
                <Path element={actions} />
                {form}
            </div>
        )
}
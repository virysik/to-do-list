import React, { useState } from "react";
import Path from "./Path";
import "./List.css";

export default function List() {
    let [action, setAction] = useState(null)
    let[second, setSecond] = useState(null)
    let [typed, setTyped] = useState(false);
    function updateAction(event) {
        setAction(event.target.value);
    }
    function addAction() {
        setTyped(true);
        setSecond("______")

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
    if (typed) {
        return (
            <div className="List">
                <Path element={action} />
                <Path element={second} />
                {form}
            </div>
        )
    } else {
        return (
            <div className="List">
                <Path element= "____" />
                {form}
            </div>
        )
    }
}
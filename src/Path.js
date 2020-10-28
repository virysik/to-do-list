import React from "react";

export default function Path(props) {
    return (
        <div className="row Path">
                    <div className="col-8">
                        <ul>
                            <li>
                        {props.element}
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">Not done</button>
                    </div>
                </div>
    )
}

import React from "react";
import "../../styles/home.css";

export const Carta = ({ character }) => {

    return (
        <div className="container-fluid text-center mt-5 row d-flex justify-content-center align-items-center">
            {
                character.map((item, i) => (
                    <div key={i} className="card col-2 m-2">
                        <img src={item.image} />
                        <p>{item.name}</p>
                        <p>{item.species}</p>
                    </div>

                ))
            }
        </div>
    );
};
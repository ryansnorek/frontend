import { useHistory } from "react-router";
import React, { useState } from "react";
import Form from "./Form";

const Item = ({ item, handleEdit, handleDelete }) => {
    const { push } = useHistory();

    const handleItemClick = id => {
        push(`items/${id}`);
    };
    
    return (
        <div>
            <div className="item">
                <div className="left" onClick={() => handleItemClick(item.item_id)}>
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="right" onClick={() => handleItemClick(item.item_id)}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        </div>
    )
};

export default Item;
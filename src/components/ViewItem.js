import { useParams } from "react-router";
import React, { useState } from "react";
import Form from "./Form";

const ViewItem = () => {
    const { id } = useParams();
    const [editForm, setEditForm] = useState({ name:"", description:"", price:"" });

    const handleChange = e => setEditForm({ ...editForm, [e.target.name]: e.target.value });
    const submitEditForm = e => {
        e.preventDefault();
    };
    
    return (
        <div className="view-item">
            <h1>view item #{id}</h1>
            {/* <div className="edit-delete">
                <button className="edit" onClick={() => handleEdit(item.item_id)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(item.item_id)}>Delete</button>
            </div> */}
            <Form submit={submitEditForm} values={editForm} change={handleChange}/>
        </div>
    );
};

export default ViewItem;
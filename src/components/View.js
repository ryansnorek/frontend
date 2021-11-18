import tokenAuthorization from "../utils/tokenAuthorization";
import { useState, useEffect } from "react";
import Item from "./Item";

const View = () => {
    const [items, setItems] = useState([]);
    const [makingListing, setMakingListing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const [editingListing, setEditingListing] = useState(false);
    // const [errors, setErrors] = useState(false);
    const [listing, setListing] = useState({
        name: "",
        description: "",
        price: "",
        img: "",
        item_id: ""
    });

    // GET ALL ITEMS //
    useEffect(() => {
        setIsLoading(true);
        tokenAuthorization()
            .get(`/items`)
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    // MAKE NEW LISTING //
    const handleMakeListing = () => setMakingListing(!makingListing);
    const handleChange = e => setListing({ ...listing, [e.target.name]: e.target.value })
    const submitListing = e => {
        e.preventDefault();

        listing.item_id = items.length;

        tokenAuthorization()
            .post(`/items`, listing)
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
            .finally(() => setMakingListing(false));
    };

    // EDIT + DELETE //
    const handleEdit = id => {
        // setEditingListing(true);

        // DISPLAY EDITING FORM
    };
    const submitEdit = id => {
        // OnClick from the editing form
        tokenAuthorization()
            .put(`/items/${id}`) // add arguement for edits
            .then(res => setItems(res.data)) 
            .catch(err => console.log(err)) // setErrors
    };
    const handleDelete = id => {
        tokenAuthorization()
            .delete(`/items/${id}`)
            .then(res => setItems(res.data)) 
            .catch(err => console.log(err)) // setErrors
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading"></div>
            </div>
        )
    }

    return (
        <div className="view">
            <button className="make-listing" onClick={handleMakeListing}>Make listing</button>
            {makingListing && 
            <div className="listing">
                <form onSubmit={submitListing}>
                    <input 
                        name="name"
                        placeholder="item name"
                        value={listing.name}
                        onChange={handleChange}
                    />
                    <input 
                        name="description"
                        placeholder="description"
                        value={listing.description}
                        onChange={handleChange}
                    />
                    <input 
                        name="price"
                        placeholder="price"
                        value={listing.price}
                        onChange={handleChange}
                    />
                    <button>Post</button>
                </form>
            </div>
            }
            {items && items.map(item => <Item key={item.item_id} item={item} handleEdit={handleEdit} handleDelete={handleDelete}/>)}
        </div>
    );
};

export default View;
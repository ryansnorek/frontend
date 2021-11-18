import tokenAuthorization from "../utils/tokenAuthorization";
import { BASE_URL } from "../config";
import { useState, useEffect } from "react";
import Item from "./Item";

const View = () => {
    const [items, setItems] = useState([]);
    const [makingListing, setMakingListing] = useState(false);
    const [listing, setListing] = useState({
        name: "",
        description: "",
        price: "",
        img: ""
    })
    // GET ALL ITEMS //
    useEffect(() => {
        tokenAuthorization()
            .get(`/items`)
            .then(res => {
                setItems(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    // MAKE NEW LISTING //
    const handleMakeListing = () => setMakingListing(true);
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
        // tokenAuthorization()
        // .put(/items/${id}`)
        // .then(res => setItems(res.data)) 
        // .catch(err => console.log(err))
    };
    const handleDelete = id => {
        tokenAuthorization()
            .delete(`/items/${id}`)
            .then(res => setItems(res.data)) 
            .catch(err => console.log(err))
    };

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
            {items && items.map(item => <Item item={item} handleEdit={handleEdit} handleDelete={handleDelete}/>)}
        </div>
    );
};

export default View;
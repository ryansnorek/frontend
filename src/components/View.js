import tokenAuthorization from "../utils/tokenAuthorization";
import { BASE_URL } from "../config";
import { useState, useEffect } from "react";
import axios from "axios";

const View = () => {
    const [items, setItems] = useState([]);
    const [makingListing, setMakingListing] = useState(false);
    const [listing, setListing] = useState({
        name: "",
        description: "",
        price: "",
        img: "",
        item_id: items.length
    })
    // GET ALL ITEMS //
    useEffect(() => {
        tokenAuthorization()
            .get(`${BASE_URL}/items`)
            .then(res => {
                setItems(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    // MAKE NEW LISTING //
    const handleMakeListing = e => {
        setMakingListing(true);
    };
    const handleChange = e => setListing({ ...listing, [e.target.name]: e.target.value })
    const submitListing = e => {
        e.preventDefault();
        tokenAuthorization()
            .post(`${BASE_URL}/items`, listing)
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
            // .finally(() => setMakingListing(false));
    };

    const handleDelete = id => {
        // axios.delete(`${BASE_URL}/items/${id}`)
        //     .then(res => setItems(res.data)) 
        //     .catch(err => console.log(err))
    };
    // {/* [GET] https://african-marketplace-2.herokuapp.com/api/items/:item_id */}
    // {/* [POST] https://african-marketplace-2.herokuapp.com/api/items */}
    // {/* [DELETE] https://african-marketplace-2.herokuapp.com/api/items/:item_id */}
    // {/* [PUT] https://african-marketplace-2.herokuapp.com/api/items/:item_id */}

    return (
        <div className="view">
            <button className="make-listing" onClick={handleMakeListing}>Make listing</button>
            {makingListing ? 
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
            </div> :
            ""
            }
            {items.map(item => {
                return (
                    <div className="item">
                        <div className="left">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="right">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="edit-delete">
                            <button>Edit</button>
                            <button className="delete" onClick={() => handleDelete(item.item_id)}>Delete</button>
                        </div>
                    </div>
                )
            })}

          
        </div>
    );
};

export default View;
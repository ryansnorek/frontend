import tokenAuthorization from "../utils/tokenAuthorization";
import { BASE_URL } from "../config";
import { useState } from "react";

const View = () => {
    const [items, setItems] = useState([]);

    tokenAuthorization()
        .get(`${BASE_URL}/items`)
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    // {/* [GET] https://african-marketplace-2.herokuapp.com/api/items */}
    // {/* [GET] https://african-marketplace-2.herokuapp.com/api/items/:item_id */}
    // {/* [POST] https://african-marketplace-2.herokuapp.com/api/items */}
    // {/* [DELETE] https://african-marketplace-2.herokuapp.com/api/items/:item_id */}
    // {/* [PUT] https://african-marketplace-2.herokuapp.com/api/items/:item_id */}

    return (
        <div className="view">
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
                    </div>
                )
            })}

          
        </div>
    );
};

export default View;
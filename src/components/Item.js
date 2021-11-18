import { useHistory } from "react-router";

const Item = ({ item, handleEdit, handleDelete }) => {
    const { push } = useHistory();
    const handleItemClick = id => {
        push(`items/${id}`)
    };
    return (
        <div>
            <div className="item" onClick={() => handleItemClick(item.item_id)}>
                <div className="left">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="right">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                </div>
                <div className="edit-delete">
                    <button onClick={() => handleEdit(item.item_id)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(item.item_id)}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default Item;
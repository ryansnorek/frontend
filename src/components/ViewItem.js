import { useParams } from "react-router";

const ViewItem = () => {
    const { id } = useParams();

    return (
        <div className="view-item">
            <h1>view item #{id}</h1>
        </div>
    );
};

export default ViewItem;
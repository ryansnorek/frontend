const Form = ({ submit, change, values  }) => {
    return (
        <div className="listing">
                <form onSubmit={submit}>
                    <input 
                        name="name"
                        placeholder="item name"
                        value={values.name}
                        onChange={change}
                    />
                    <input 
                        name="description"
                        placeholder="description"
                        value={values.description}
                        onChange={change}
                    />
                    <input 
                        name="price"
                        placeholder="price"
                        value={values.price}
                        onChange={change}
                    />
                    <button>Post</button>
                </form>
            </div>
    )
};

export default Form;
import React from "react";


const ViewForm = ({fields, setFields}) => {
    const addField = () => {
        const newField = {id: fields.length + 1 , label: "newField" , value: ""};
        setFields([...fields, newField])
    }
    const deleteField = (id) => {
        const removeField = fields.filter(field => field.id !== id);
        setFields(removeField)

    }
    const editField = (id, newValue) => {
        const updateField = fields.map(field => field.id === id ? {...field, value: newValue} : field 
        ); 
       setFields(updateField);
    }
    return(
        <div>
            <button type="button" onClick={addField}>Add Field</button>
                <form>
                    {fields.map(field => (
                        <div key={field.id}>
                            <label>{field.label}</label>
                            <input type="text" value={field.value} onChange={(event) => editField(field.id, event.target.value)} />
                            <button type="button" onClick={() => deleteField(field.id)}>deleted</button>
                        </div>   
                    ))}
                  
                </form>
        </div>
    )
}
export default ViewForm;
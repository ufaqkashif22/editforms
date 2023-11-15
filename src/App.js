import React, {useState} from 'react';
import './App.css';
import ViewForm from './components/ViewForm';
const App = () => {
  const [fields, setFields] = useState([
    {id :1, label: "Name", value: "" },
    {id :2, label: "Contact", value: "" },
    {id :3, label: "Email", value: "" },
    {id :4, label: "Age", value: "" }
  ])
  return (

    <div>
        <h2> My Form</h2>
        <ViewForm fields={fields} setFields={setFields}/>
    </div>
  );
}

export default App;

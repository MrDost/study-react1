import "./FormItem.css"
import { useState, useEffect } from "react"
import "./Button.css"

export const FormItem = ({ title, label1, placeholder1, label2, placeholder2, updateObj }) => {
  const [inputs, setInputs] = useState({ input1: "", input2: "" })

  function handleInput(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  function handleForm(e) {
    e.preventDefault();

    switch (title) {
      case 'Personal Info':
        updateObj(prevObj => ({...prevObj, name: inputs.input1, position: inputs.input2}));
        break;
      case 'Education':
        updateObj(prevObj => ({...prevObj, education: [...prevObj.education, {eduName: inputs.input1, eduDate: inputs.input2}]}));
        break;
      case 'Work Experience':
        updateObj(prevObj => ({...prevObj, experience: [...prevObj.experience, {companyName: inputs.input1, workDate: inputs.input2}]}));
        break;
    }

    setInputs({input1: "", input2: ""});
  }

  return (
    <form action="">
        <h2>{title}</h2>
        <label htmlFor="firtField">{label1}</label>
        <input
          value={inputs.input1}
          onChange={(e) => handleInput(e)}
          type="text"
          id="firtField"
          name='input1'
          placeholder={placeholder1}
        />
        <label htmlFor="secondField">{label2}</label>
        <input
          value={inputs.input2}
          onChange={(e) => handleInput(e)}
          type="text"
          id="secondField"
          name="input2"
          placeholder={placeholder2}
        />
        <button onClick={(e) => handleForm(e)}>Add</button>
    </form>
  )
}

// import React from "react";

import { useState } from "react";



const App = () => {


  // const [firstName,setFirstName]=useState("")
  // const [lastName,setLastName]=useState("")

  // function changelastNameHandler(e){
  //   setLastName(e.target.value)
  //   console.log(lastName)
  // }
  // function changeFirstNameHandler(e){
  //   setFirstName(e.target.value)
  //   console.log(firstName)
  // }

  //handle multiple state
  const [formData, setFormData] = useState({
    // firstName: "", lastName: '', email: "", comments: "", isVisible: "",mode:"",favCar:""
  })
  console.log(formData)
  
  console.log(formData)
  function changeHandler(event) {
   const {name ,value,type,checked} =event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, [name]: type==="checkbox"?checked:value
      }
    })
  }
  function submitHandler(event){
    event.preventDefault()
    console.log("Final printing the entire data")
    console.log(formData)

  }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" id="text"  placeholder="FirstName" onChange={changeHandler} name="firstName" value={formData.firstName} />

        <br />
        <br />

        <input type="text" placeholder="FirstName" onChange={changeHandler} name="lastName" value={formData.lastName} />
        <br />
        <br />

        <input type="email"   placeholder="Enter Your eMail Here" onChange={changeHandler} name="email" value={formData.email} />

        <br />
        <br />
        <textarea placeholder="Enter your Comments" onChange={changeHandler} name="comments" value={formData.comments} ></textarea>
        <br />
        <br />
        <input type="checkbox" onChange={changeHandler} name="isVisible" checked={formData.isVisible} id="isVisible" />
        <label htmlFor="isVisible">Am I visible</label>
        <br />
        <br />
        <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode==="Online-Mode"} />
        <label htmlFor="Online-Mode">OnlineMode</label>
        <br />
        <br />
        <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode" />
        <label htmlFor="radio" checked={formData.mode==="Offline-Mode"} >OfflineMode</label>
        <br />
        <br />
        <label htmlFor="favCar">YourCar </label>
        <select name="favCar" value={formData.favCar} id="" onChange={changeHandler}>
        <option value="scarpio">scarpio</option>
        <option value="fartuner">fartuner</option>
        <option value="Tharr">Tharr</option>
        <option value="Legender">Legender</option>
        <option value="Defender">Defender</option>
        </select>
        <br />
        <br />

        <input type="submit"   />
      </form>
      
    </div>
  );
};


export default App;

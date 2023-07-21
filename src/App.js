import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    isChecked: true,
    country: "India",
    comments: false,
    candidates: false,
    offers: false,
  });

  console.log(formData);
  function inputHandler(event) {
    const { name, checked, type, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }
  return (
   <div class="flex flex-col items-center p-4  ">
    <form class="w-full md:w-2/3 sm:w:1/3 shadow-lg px-10 py-2 border-s-2 " onSubmit={submitHandler}>
      <label class="block mb-2" htmlFor="text">First name</label>
      <input type="text" id="text" name="firstName" value={formData.firstName} onChange={inputHandler}
        placeholder="Chethan" class="w-full p-2 border rounded-md outline-none mb-2" />

      <label class="block mb-2" htmlFor="lastName">Last name / Sir Name</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={inputHandler}
        placeholder="Hindi" class="w-full p-2 border rounded-md outline-none mb-2" />

      <label class="block mb-2" htmlFor="email">Email address</label>
      <input type="email" id="email" name="email" onChange={inputHandler} placeholder="chethan8055@gmail.com"
        class="w-full p-2 border rounded-md outline-none mb-2" />

      <label class="block mb-2" htmlFor="country">Country</label>
      <select name="country" id="country" value={formData.country} onChange={inputHandler}
        class="w-full p-2 border rounded-md outline-none mb-2">
        <option value="India">India</option>
        <option value="United State">United State</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>

      <label class="block mb-2" htmlFor="address">Street address</label>
      <input type="text" name="address" id="address" onChange={inputHandler} placeholder="1234 Main St"
        class="w-full p-2 border rounded-md outline-none mb-2" />

      <label class="block mb-2" htmlFor="cityName">City</label>
      <input type="text" name="cityName" onChange={inputHandler} placeholder="Bengalore" id="cityName"
        class="w-full p-2 border rounded-md outline-none mb-2" />

      <label class="block mb-2" htmlFor="stateAddress">State / Postal Code</label>
      <input type="text" name="stateAddress" id="stateAddress" onChange={inputHandler} placeholder="West Bengal"
        class="w-full p-2 border rounded-md outline-none mb-2" />

      <label class="block mb-2" htmlFor="postAddress">ZIP / Postal Code</label>
      <input type="text" name="postAddress" id="postAddress" onChange={inputHandler} placeholder="Z13301"
        class="w-full p-2 border rounded-md outline-none mb-2" />

      <fieldset class="mb-4">
        <legend>By Email</legend>
        <div class="flex items-center">
          <input type="checkbox" name="comments" id="comments" onChange={inputHandler} value={formData.isChecked}
            class="mr-2" />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comment on a posting</p>
          </div>
        </div>

        <div class="flex items-center">
          <input type="checkbox" name="candidates" id="candidates" onChange={inputHandler} value={formData.isChecked}
            class="mr-2" />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when someone posts a comment on a posting</p>
          </div>
        </div>

        <div class="flex items-center">
          <input type="checkbox" id="offers" name="offers" onChange={inputHandler} value={formData.isChecked}
            class="mr-2" />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when someone posts a comment on a posting</p>
          </div>
        </div>
      </fieldset>

      <fieldset class="mb-4">
        <legend>Push Notification</legend>
        <p>These are delivered via SMS to your mobile phone</p>
        <div class="mt-2">
          <input type="radio" id="Every" onChange={inputHandler} name="mode" value="Every" class="mr-2" />
          <label htmlFor="Every">Everything</label>
          <br />
          <input type="radio" id="same" onChange={inputHandler} name="mode" value="same" class="mr-2" />
          <label htmlFor="same">Same as Small</label>
          <br />
          <input type="radio" id="no-push" onChange={inputHandler} name="mode" value="no-push" class="mr-2" />
          <label htmlFor="no-push">No push notification</label>
        </div>
      </fieldset>
      <input type="submit" name="submit" value="Save"
        class="bg-blue-700 text-white font-bold rounded py-2 px-4 cursor-pointer hover:bg-blue-600 w-full" />
    </form>
  </div>
  );
};

export default App;

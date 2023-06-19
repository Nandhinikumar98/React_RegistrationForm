import React, { useState } from "react";
import Displayvalue from "./Displayvalue";

const Form = () => {
  const [Values, setValues] = useState({});
  const [Tablevalue, setTablevalue] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTablevalue([...Tablevalue, Values]);
    setValues({});
    console.log("submit");
  };

  return (
    <center>
      <h1>Registration form using Props</h1>
      <form onSubmit={handleSubmit}>
        <div className="App">
          <label>Username : </label>
          <input
            type="username"
            name="username"
            value={Values.name}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password : </label>
          <input
            type="password"
            name="password"
            value={Values.password}
            onChange={handleChange}
            required
          />
          <br />
          <label>Address : </label>
          <input
            type="address"
            name="address"
            value={Values.address}
            onChange={handleChange}
            required
          />
          <br />
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={Values.email}
            onChange={handleChange}
            required
          />
          <br />
          <label>
            Gender :
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={Values.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={Values.gender === "Female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
          <br />
        </div>
        <button type="submit">submit</button>
      </form>
      <Displayvalue details={Tablevalue} data={setTablevalue} />
    </center>
  );
};

export default Form;

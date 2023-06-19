import React, { useState } from "react";

const Propsform = (onSubmit) => {
  const [Values, SetValues] = useState({
    username: "",
    password: "",
    address: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    SetValues({ ...Values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /*const handleprops = (e) => {
    e.preventDefault();
  };*/
  return (
    <>
      <form className="registerform" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username : </label>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={Values.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={Values.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">Address : </label>
        <input
          type="address"
          placeholder="Enter address"
          name="address"
          value={Values.address}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          placeholder="Enter email address"
          name="email"
          value={Values.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Gender : </label>
        <input type="radio" name="gender" value="Male" />
        Male
        <input type="radio" name="gender" value="Female" />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Propsform;

import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");

const handleRegister =async ()=>{

    const url = "https://code-ville.vercel.app/users"

const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNo: phoneNumber,
    password: password,
    department: department
}

try{

    const response = await axios.post(url, data)
console.log(response);

}catch(err){
    console.log(err);
}
}

  return (
    <div>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="First Name"
      /> <br/>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      /> <br/>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /> <br/>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone No"
      /> <br/>
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Dept"
      /> <br/>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /> <br/>
      <button onClick={()=>handleRegister()}>Register</button>
    </div>
  );
};

export default Register;

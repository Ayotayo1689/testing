import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");
   if(!isLoggedIn){
    navigate("/")
   }
  }, []);

  return <div>Profile</div>;
};

export default Profile;

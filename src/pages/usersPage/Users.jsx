import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ProfileImg from "../../images/capture.png";
import Loader from "../../components/Loader";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://code-ville.vercel.app/users");
      const dataJson = await response.json();
      setData(dataJson);
    } catch (err) {
      console.log(err);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
        {
            loading && <Loader/>
        }
      <div
        style={{
          width: "80Vw",
        }}
      >
        {data?.map((oneData) => {
          return (
            <Accordion key={oneData.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {oneData.firstName + " " + oneData.lastName}
              </AccordionSummary>
              <AccordionDetails>
                <div
                  className=""
                  style={{
                    height: "100%",
                    width: "fit-content",
                    border: "2px solid black",
                  }}
                >
                  <img
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "cover",
                    }}
                    src={oneData.profilePic ? oneData.profilePic : ProfileImg}
                    alt="profile image"
                  />
                </div>
                <div className=""></div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

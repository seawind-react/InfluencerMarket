import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/api.css";

export default function API() {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    const headers = {
      "x-api-key": "123456789123456789",
    };

    axios
      .get("https://projects.seawindsolution.com/MODEL/Webservices/getBanner", {
        headers,
      })
      .then((res) => {
        setMyData(res.data.ResponseData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <pre>{JSON.stringify(mydata, null, 2)}</pre>
        {mydata.map((item) => {
          const { Title, Image } = item;
          return (
            <div className="card">
              <h2>{Title}</h2>
              <img className="img" src={Image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

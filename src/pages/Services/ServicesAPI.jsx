// import React, { useEffect, useState } from 'react'
// import Services from './Services';
// import axios from 'axios';

// const ServicesAPI = () => {
//     const [servicesData, setservicesData] = useState([]);
//     const [errors, setErrors] = useState({});
//     const [apiResponse, setApiResponse] = useState(null);

//     useEffect(() => {
//         const headers = {
//             "x-api-key": "123456789123456789",
//         };
//         axios.get(" https://projects.seawindsolution.com/MODEL/Webservices/getServices",
//             // servicesData,
//             {
//                 headers,
//             }
//         )
//             .then((res) => {
//                 // Handle the successful response if needed
//                 setservicesData(res.data)
//                 setApiResponse(res.data.Message); // You can set any success message you want
//                 // Reset form data and errors
//                 setErrors({});
//             })
//             .catch((error) => {
//                 // Handle the error if needed
//                 console.error("API error:", error);
//                 setApiResponse("An error occurred. Please try again later.");
//             });
//     }, []);

//     return (
//         <Services servicesData={servicesData} />
//     )
// }

// export default ServicesAPI
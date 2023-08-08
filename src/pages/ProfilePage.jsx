import React, { useEffect, useState } from "react";
import "../style/profilepage.css";
import Bg from "../assests/Images/services-banner.jpg";
import Title from "../assests/Images/title-icon.png";
import axios from "axios";

const ProfilePage = () => {
  const profileDataString = sessionStorage.getItem("InfluncerData");
  const sessionData = JSON.parse(profileDataString);
  const ID = sessionData.ResponseData.Id;

  const [profileData, setProfileData] = useState({
    ProfileDetails: {
      Id: ID,
      Type: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      AddressLine1: "",
      AddressLine2: "",
      Country: "",
      State: "",
      City: "",
      Zip: "",
      Gender: "",
      DOB: "",
    },
    ModelDetails: {
      ModelId: "",
      catId: "",
      name: "",
      Height: "",
      Weight: "",
      Age: "",
      Bust: "",
      Waist: "",
      Hips: "",
      Facebook: "",
      Twitter: "",
      Instagram: "",
      LinkedIn: "",
      Message: "",
      TELENT: "",
      Image: null,
      description: "",
    },
    ModelImages: [],
    PlanDetails: [
      {
        UserId: "",
        Name: "",
        Amount: "",
        PaymentMethod: "",
        PaymentDate: "",
        PaymentStatus: "",
        TransactionId: "",
        Message: "",
      },
    ],
  });
  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);

  const [category, setcategory] = useState([]);

  useEffect(() => {
    // Fetch the user's existing data from the API
    fetchUserProfile();

    //Category Get using APi
    axios
      .get(
        "https://projects.seawindsolution.com/MODEL/Webservices/getCategory",
        {
          headers: {
            "x-api-key": "123456789123456789",
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setcategory(res.data.ResponseData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  const fetchUserProfile = async () => {
    try {
      // Make a GET request to your API endpoint to fetch the user's profile data
      const response = await axios.get(
        `https://projects.seawindsolution.com/MODEL/Webservices/getProfile/${ID}`,
        {
          headers: {
            "x-api-key": "123456789123456789",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.IsSuccess === true) {
        setProfileData(response.data.ResponseData);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  const Handler = (e) => {
    // setProfileData({ ...profileData, [e.target.name]: e.target.value })
    const { name, value, files, checked } = e.target;

    setProfileData((prevState) => ({
      ...prevState,
      ProfileDetails: {
        ...prevState.ProfileDetails,
        [name]: value,
      },
      ModelDetails: {
        ...prevState.ModelDetails,
        [name]: value,
        // [e.target.TELENT]: checked,
        TELENT: checked
          ? prevState.ModelDetails.TELENT
            ? prevState.ModelDetails.TELENT + "," + value
            : value
          : typeof prevState.ModelDetails.TELENT === "string"
            ? prevState.ModelDetails.TELENT.replace(
              new RegExp(`,?${value}`, "g"),
              ""
            )
            : prevState.ModelDetails.TELENT,
      },
    }));
  };

  // ============SingleImage============
  const HandlerImage = (e) => {
    const { name, value, files } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      ModelDetails: {
        ...prevState.ModelDetails,
        Image: files[0], // This will store the image file in the state
      },
    }));
  };

  // ============MultipleImage============
  const HandlerImageMultiple = (e) => {
    const { name, value, files } = e.target;
    // const imageFilesArray = Array.from(files);
    const imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      imagesArray.push(files[i]);
    }
    setProfileData((prevState) => ({
      ...prevState,
      ModelImages: imagesArray,
    }));
  };

  // const handleImageChange = (event) => {
  //     // Handle file input change for the profile image
  //     const file = event.target.files[0];
  //     setProfileData({ ...profileData, [event.target.ProfileImage]: file });
  // };

  const MySubmit = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "multipart/form-data",
      "x-api-key": "123456789123456789",
    };

    const formData = new FormData();

    formData.append("Id", profileData.ProfileDetails.Id);
    formData.append("Type", profileData.ProfileDetails.Type);
    formData.append("FirstName", profileData.ProfileDetails.FirstName);
    formData.append("LastName", profileData.ProfileDetails.LastName);
    formData.append("Email", profileData.ProfileDetails.Email);
    formData.append("Phone", profileData.ProfileDetails.Phone);
    formData.append("AddressLine1", profileData.ProfileDetails.AddressLine1);
    formData.append("AddressLine2", profileData.ProfileDetails.AddressLine2);
    formData.append("Country", profileData.ProfileDetails.Country);
    formData.append("State", profileData.ProfileDetails.State);
    formData.append("City", profileData.ProfileDetails.City);
    formData.append("Gender", profileData.ProfileDetails.Gender);
    formData.append("DOB", profileData.ProfileDetails.DOB);

    formData.append("ModelId", profileData.ModelDetails.ModelId);
    formData.append("catId", profileData.ModelDetails.catId);
    formData.append("name", profileData.ModelDetails.name);
    formData.append("Height", profileData.ModelDetails.Height);
    formData.append("Weight", profileData.ModelDetails.Weight);
    formData.append("Age", profileData.ModelDetails.Age);
    formData.append("Bust", profileData.ModelDetails.Bust);
    formData.append("Waist", profileData.ModelDetails.Waist);
    formData.append("Hips", profileData.ModelDetails.Hips);
    formData.append("Facebook", profileData.ModelDetails.Facebook);
    formData.append("Instagram", profileData.ModelDetails.Instagram);
    formData.append("Twitter", profileData.ModelDetails.Twitter);
    formData.append("LinkedIn", profileData.ModelDetails.LinkedIn);
    formData.append("Message", profileData.ModelDetails.Message);

    formData.append("Image", profileData.ModelDetails.Image);
    formData.append("TELENT", profileData.ModelDetails.TELENT);
    formData.append("description", profileData.ModelDetails.description);
    for (let i = 0; i < profileData.ModelImages.length; i++) {
      formData.append("ModelImages", profileData.ModelImages[i]);
    }
    axios
      .post(
        `https://projects.seawindsolution.com/MODEL/Webservices/updateProfile/${ID}`,
        formData,
        {
          headers,
        }
      )
      .then((res) => {
        // Handle the successful response if needed
        console.log("API response:", res.data);
        if (res.IsSuccess == false) {
          setApiResponse(res.data.Message);
          fetchUserProfile();
        } else {
          setApiResponse(res.data.Message); // You can set any success message you want
        }
        // Reset form data and errors

        setErrors({});
      })
      .catch((error) => {
        // Handle the error if needed
        console.error("API error:", error);
        setApiResponse("An error occurred. Please try again later.");
      });
  };
  return (
    <div>
      <div>
        <main>
          <section className="inner-page-banner">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-md-12">
                  <img src={Bg} alt="" />
                  <h1 className="h1 page-section-internal__heading page-section_internal"></h1>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-5 pb-5 modeling-details-section bg-black">
            <div className="container">
              <div className="page-title text-center">
                <h2 className="m-0 text-white">User Profile</h2>
                <div className="text-center mb-3">
                  <img src={Title} alt="icon" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into
                </p>
              </div>
            </div>
            <div className="container modeling-content-details mt-5 pt-2 pb-5">
              <div className="row  d-flex justify-content-center">
                <div className="col-md-8 model-about-content">
                  <div className="model-contact-form mb-4">
                    <form onSubmit={MySubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="model-basic-title mb-4">
                            <div className="user-profile-title">
                              Your Account Details
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              className="form-control"
                              id="FirstName"
                              name="FirstName"
                              value={profileData.ProfileDetails.FirstName}
                              placeholder="First Name*"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Last Name{" "}
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              className="form-control"
                              id="LastName"
                              name="LastName"
                              value={profileData.ProfileDetails.LastName}
                              placeholder="Last Name*"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Enter your Mobile
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="Phone"
                              name="Phone"
                              value={profileData.ProfileDetails.Phone}
                              className="form-control"
                              placeholder="Enter your Mobile"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Enter your Email
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="Email"
                              name="Email"
                              value={profileData.ProfileDetails.Email}
                              className="form-control"
                              placeholder="Enter your Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              City<span className="text-danger">*</span>
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="City"
                              name="City"
                              value={profileData.ProfileDetails.City}
                              className="form-control"
                              placeholder="Enter your City"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              State<span className="text-danger">*</span>
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="State"
                              name="State"
                              value={profileData.ProfileDetails.State}
                              className="form-control"
                              placeholder="Enter your State"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Address Line1
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="AddressLine1"
                              name="AddressLine1"
                              value={profileData.ProfileDetails.AddressLine1}
                              className="form-control"
                              placeholder="AddressLine1"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Address Line2
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="AddressLine2"
                              name="AddressLine2"
                              value={profileData.ProfileDetails.AddressLine2}
                              className="form-control"
                              placeholder="AddressLine2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Country
                            </label>
                            <input
                              onChange={Handler}
                              required
                              type="text"
                              id="Country"
                              name="Country"
                              value={profileData.ProfileDetails.Country}
                              className="form-control"
                              placeholder="Country"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-2 account-details-form">
                          <div className="form-group">
                            <label className="Profile-text text-left">
                              Gender
                            </label>
                            <select
                              name="Gender"
                              id="Gender"
                              value={profileData.ProfileDetails.Gender}
                              className="form-control"
                              onChange={Handler}
                              required
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="model-basic-info mt-4">
                        <div className="model-basic-title mb-4">
                          <div className="user-profile-title">Your Profile</div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Name <span className="text-danger">*</span>
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.name}
                                  id="name"
                                  name="name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Height
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.Height}
                                  id="Height"
                                  name="Height"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2 d-none">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                <span className="text-danger">*</span>
                              </label>
                              <div className="controls">
                                <input
                                  type="text"
                                  id="slug"
                                  name="slug"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Age
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.Age}
                                  id="Age"
                                  name="Age"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Weight
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.Weight}
                                  id="Weight"
                                  name="Weight"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Bust/Chest
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.Bust}
                                  id="Bust"
                                  name="Bust"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Waist
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.Waist}
                                  id="Waist"
                                  name="Waist"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="Profile-text text-left">
                                Hips
                              </label>
                              <div className="controls">
                                <input
                                  onChange={Handler}
                                  required
                                  type="text"
                                  value={profileData.ModelDetails.Hips}
                                  id="Hips"
                                  name="Hips"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-group">
                              <label className="text-left">
                                Date Of Birth *
                              </label>
                              <div className="form-group">
                                <input
                                  onChange={Handler}
                                  required
                                  type="date"
                                  name="DOB"
                                  value={profileData.ProfileDetails.DOB}
                                  className="form-control"
                                  placeholder="Last Name*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="model-social-media mt-4">
                          <div className="model-basic-title mb-4">
                            <div className="user-profile-title">
                              Your Social Profile Links
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-group">
                                <label className="Profile-text text-left">
                                  Facebook
                                </label>
                                <div className="controls">
                                  <input
                                    onChange={Handler}
                                    required
                                    type="text"
                                    value={profileData.ModelDetails.Facebook}
                                    id="Facebook"
                                    name="Facebook"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-group">
                                <label className="Profile-text text-left">
                                  Twitter
                                </label>
                                <div className="controls">
                                  <input
                                    onChange={Handler}
                                    required
                                    type="text"
                                    value={profileData.ModelDetails.Twitter}
                                    id="Twitter"
                                    name="Twitter"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-group">
                                <label className="Profile-text text-left">
                                  Instagram
                                </label>
                                <div className="controls">
                                  <input
                                    onChange={Handler}
                                    required
                                    type="text"
                                    value={profileData.ModelDetails.Instagram}
                                    id="Instagram"
                                    name="Instagram"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-group">
                                <label className="Profile-text text-left">
                                  LinkedIn
                                </label>
                                <div className="controls">
                                  <input
                                    onChange={Handler}
                                    required
                                    type="text"
                                    value={profileData.ModelDetails.LinkedIn}
                                    id="LinkedIn"
                                    name="LinkedIn"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 model-short">
                              <div className="form-group">
                                <label className="text-left mb-2 pl-0">
                                  Additional Information
                                </label>
                                <div className="form-group">
                                  <textarea
                                    name="Message"
                                    id="Message"
                                    value={profileData.ModelDetails.Message}
                                    className="description form-control"
                                    placeholder="Textarea text"
                                    aria-invalid="false"
                                    onChange={Handler}
                                    required
                                    rows="6"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="model-short-description mb-4 mt-4">
                          <div className="model-basic-title mb-4">
                            <div className="user-profile-title">
                              Images Upload{" "}
                            </div>
                          </div>

                          <div className="row d-flex justify-content-center ">
                            <div className="col-md-6">
                              <div className="model-images-upload">
                                <div className="form-group">
                                  <label className="Profile-text text-left">
                                    Profile Img
                                    <span className="text-danger">
                                      (size &lt; 1MB)
                                    </span>
                                  </label>
                                  <div className="controls">
                                    <input
                                      onChange={HandlerImage}
                                      required
                                      type="file"
                                      name="Image"
                                      accept="image/*"
                                      className="form-control valimage"
                                    // value={profileData.ModelDetails.Image}
                                    />
                                  </div>
                                  <div className="form-control-feedback">
                                    <small>
                                      Please select an a png,jpeg,jpg,gif file
                                      only.
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="images-upload-profile">
                                {/* Display the single image */}
                                {profileData.ModelDetails.Image && (
                                  <div>
                                    <img
                                      src={URL.createObjectURL(
                                        profileData.ModelDetails.Image
                                      )}
                                      alt="Selected Image"
                                      style={{ maxWidth: "200px" }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ==============================MULTIPLE IMAGE========================== */}
                        <div className="model-short-description mb-4">
                          <div className="row profile-upload-col d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                              <h5 className="text-left">Portfolio Images</h5>
                            </div>

                            <div className="col-md-6">
                              <div className="model-images-upload">
                                <div className="form-group">
                                  <label className="Profile-text text-left">
                                    Model Img
                                    <span className="text-danger">
                                      (size &lt; 1MB)
                                    </span>
                                  </label>
                                  <div className="controls">
                                    <input
                                      onChange={HandlerImageMultiple}
                                      type="file"
                                      id="image"
                                      multiple
                                      required
                                      accept="image/*"
                                      name="ModelImage"
                                      // value={profileData.ModelImages}
                                      className="form-control valimage"
                                    />
                                  </div>
                                  <div className="form-control-feedback">
                                    <small>
                                      Please select an a png,jpeg,jpg,gif file
                                      only.
                                    </small>
                                  </div>
                                </div>
                              </div>
                              {/* Display multiple images */}
                              {profileData.ModelImages.map((image, index) => (
                                <div key={index}>
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index + 1}`}
                                    style={{ maxWidth: "200px" }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12">
                              <div className="profile-gallery-col">
                                <div className="controls"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="model-social-media mt-5">
                          <div className="model-basic-title mb-4">
                            <div className="user-profile-title">Talents</div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 mb-2">
                              <div className="form-group">
                                <h6 className="mb-3 text-left">
                                  Select all fields that best fit your talent(s)
                                  <span className="text-danger">*</span>
                                </h6>
                                <div className="talents-content">
                                  <div className="frm_opt_container">
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-0"
                                    >
                                      <label for="field_n53n3-0">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT1"
                                          // checked={profileData.ModelDetails.TELENT.includes("Print Model")}
                                          id="field_n53n3-0"
                                          value="Print Model"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Print Model
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-1"
                                    >
                                      <label for="field_n53n3-1">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT2"
                                          // checked={profileData.ModelDetails.TELENT.includes("Promotional Model/Brand Ambassador")}
                                          id="field_n53n3-1"
                                          value="Promotional Model/Brand Ambassador"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Promotional Model/Brand Ambassador
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-2"
                                    >
                                      <label for="field_n53n3-2">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT3"
                                          // checked={profileData.ModelDetails.TELENT.includes("Emcee/Spokesperson")}
                                          id="field_n53n3-2"
                                          value="Emcee/Spokesperson"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Emcee/Spokesperson
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-3"
                                    >
                                      <label for="field_n53n3-3">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT4"
                                          // checked={profileData.ModelDetails.TELENT.includes("Actor/Actress")}
                                          id="field_n53n3-3"
                                          value="Actor/Actress"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Actor/Actress
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-4"
                                    >
                                      <label for="field_n53n3-4">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT5"
                                          // checked={profileData.ModelDetails.TELENT.includes("Dancer")}
                                          id="field_n53n3-4"
                                          value="Dancer"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Dancer
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-5"
                                    >
                                      <label for="field_n53n3-5">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT6"
                                          // checked={profileData.ModelDetails.TELENT.includes("Singer")}
                                          id="field_n53n3-5"
                                          value="Singer"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Singer
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-6"
                                    >
                                      <label for="field_n53n3-6">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT7"
                                          // checked={profileData.ModelDetails.TELENT.includes("Photographer")}
                                          id="field_n53n3-6"
                                          value="Photographer"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Photographer
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-7"
                                    >
                                      <label for="field_n53n3-7">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT8"
                                          // checked={profileData.ModelDetails.TELENT.includes("Makeup Artist")}
                                          id="field_n53n3-7"
                                          value="Makeup Artist"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Makeup Artist
                                      </label>
                                    </div>
                                    <div
                                      className="frm_checkbox"
                                      id="frm_checkbox_79-8"
                                    >
                                      <label for="field_n53n3-8">
                                        <input
                                          onClick={Handler}
                                          type="checkbox"
                                          name="TELENT9"
                                          // checked={profileData.ModelDetails.TELENT.includes("Hair Stylist")}
                                          id="field_n53n3-8"
                                          value="Hair Stylist"
                                          data-reqmsg="This field cannot be blank."
                                          aria-required="true"
                                          data-invmsg="Select all fields that best fit your talent(s) is invalid"
                                          aria-invalid="false"
                                        />{" "}
                                        Hair Stylist
                                      </label>
                                    </div>
                                  </div>
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="model-social-media mt-4">
                          <div className="model-basic-title mb-4">
                            <div className="user-profile-title">Category</div>
                          </div>

                          <div className="row">
                            <div className="col-md-12 mb-2">
                              <div className="form-group">
                                <label className="Profile-text text-left">
                                  Select Model Category
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="category-content mt-2">
                                  <select
                                    name="catId"
                                    id="catId"
                                    multiple=""
                                    className="form-control"
                                    value={profileData.ModelDetails.catId}
                                    onChange={Handler}
                                    required
                                  >
                                    <option>Select Your Model Category</option>
                                    {category.map((item) => {
                                      return (
                                        <>
                                          <option value={item.Id}>
                                            {item.Title}
                                          </option>
                                        </>
                                      );
                                    })}
                                  </select>
                                  <div className="help-block"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <input
                              type="submit"
                              // form="profileFrm"
                              value="Submit"
                              // name="Profile"
                              className="btn btn-danger margin_0 px-5 py-3"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="plan-details">
          <div className="table-responsive">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  {/* <th scope="col">UserId</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">PaymentMethod</th>
                  <th scope="col">PaymentDate</th>
                  <th scope="col">PaymentStatus</th>
                  <th scope="col">TransactionId</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              {profileData.PlanDetails.map((value, index) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        {/* <th scope="col">{value.UserId}</th> */}
                        <th scope="col">{value.Name}</th>
                        <th scope="col">{value.Amount}</th>
                        <th scope="col">{value.PaymentMethod}</th>
                        <th scope="col">{value.PaymentDate}</th>
                        <th scope="col">{value.PaymentStatus}</th>
                        <th scope="col">{value.TransactionId}</th>
                        <th scope="col">{value.Message}</th>
                      </tr>
                    </tbody>
                  </>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;

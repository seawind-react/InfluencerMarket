import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import LoginForm from '../pages/Login';
import FemaleModel from '../pages/FemaleModel';
import MaleModelPage from '../pages/MaleModels';
import Celebraties from '../pages/Celebraties';
import KidsModels from '../pages/KidsModels';
import FemaleInfluencer from '../pages/Influencer/FemaleInfluencer';
import HowItsWork from '../pages/Influencer/HowItsWork';
import AboutUS from '../pages/AboutUS';
import HireModel from '../pages/HireModel';
import ProfilePage from '../pages/ProfilePage';
import MaleInfluncer from '../pages/Influencer/MaleInfluencer';
import ContactUS from '../pages/Contact';
import LogOut from '../pages/Logout';
import HireInfuncer from '../pages/HireInfluencer';
import ChangePassword from '../pages/ChangePassword';
import Booking from '../pages/Booking';
import Services from '../pages/Services/Services';
import ServiceDetail from '../pages/Services/ServiceDetails ';
import PlanDetails from '../pages/PlanDetails';
import FAQ from '../pages/FAQ';
import PostCampaign from '../pages/PostCampaign';
// import API from "../pages/API"
// import PopularModelPage from '../pages/PopularModel';
const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("InfluncerData"));

  return (
    <Routes>

      {isLoggedIn ?
        <>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/hiremodel' element={<HireModel />} />
          <Route path='/hireinfluencer' element={<HireInfuncer />} />
          <Route path='/female-models' element={<FemaleModel />} />
          <Route path='/male-models' element={<MaleModelPage />} />
          <Route path='/celebrities' element={<Celebraties />} />
          <Route path='/kids-models' element={<KidsModels />} />
          <Route path='/female-influencer' element={<FemaleInfluencer />} />
          <Route path='/male-influencer' element={<MaleInfluncer />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path='/plan' element={<PlanDetails />} />

          <Route path='/howitwork' element={<HowItsWork />} />
          <Route path='/about-us' element={<AboutUS />} />
          <Route path='/contactUS' element={<ContactUS />} />

          <Route path='/postCampaign' element={<PostCampaign />} />

          <Route path='/faq' element={<FAQ />} />

          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/*' element={<Navigate to='/home' />} />
        </>
        :
        <>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/hiremodel' element={<HireModel />} />
          <Route path='/hireinfluencer' element={<HireInfuncer />} />
          <Route path='/female-models' element={<FemaleModel />} />
          <Route path='/male-models' element={<MaleModelPage />} />
          <Route path='/celebrities' element={<Celebraties />} />
          <Route path='/kids-models' element={<KidsModels />} />
          <Route path='/female-influencer' element={<FemaleInfluencer />} />
          <Route path='/male-influencer' element={<MaleInfluncer />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          <Route path='/plan' element={<PlanDetails />} />

          <Route path='/postCampaign' element={<PostCampaign />} />

          <Route path='/howitwork' element={<HowItsWork />} />
          <Route path='/about-us' element={<AboutUS />} />
          <Route path='/contactUS' element={<ContactUS />} />
          <Route path='/booking' element={<Booking />} />

          <Route path='/faq' element={<FAQ />} />

          <Route path='/*' element={<Navigate to='/home' />} />
        </>}
    </Routes>
  )
}

export default Router

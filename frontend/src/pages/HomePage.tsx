import React from "react";
//
import { Banner, BannerImage, Carousel, HeroBanner } from "../components";
import { data } from "../data/homePageData";
import { dataImg, sliderSettingsImg } from "../data/carouselData";
import { dataVid, sliderSettingsVid } from "../data/carouselData";
import BannerSm from "../assets/bannerSmall.jpg";
import { IRootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { getProfile, logoutUser } from "../store/auth/actionCreators";
import { LoginForm } from "../components/Form/LoginForm";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успeшно авторизовались, {profile}</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
      <button onClick={() => dispatch(getProfile())}>update profile</button>
    </div>
  );

  return (
    <>
      <HeroBanner video={data.video} image={data.image} />
      <div>{isLoggedIn ? renderProfile() : <LoginForm />}</div>
      <Carousel
        data={dataImg}
        settings={sliderSettingsImg}
        title={"POPULAR ROUTS"}
        path={"/search"}
        text={"View more "}
      />
      <Banner />
      <BannerImage image={BannerSm} />
      <Carousel
        data={dataVid}
        settings={sliderSettingsVid}
        title={"FAR FROM PEOPLE"}
        path={"/search"}
        text={"Search more "}
      />
    </>
  );
};

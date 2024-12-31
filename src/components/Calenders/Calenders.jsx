import React from "react";
import { Calendar, theme } from "antd";
import { Helmet } from "react-helmet-async";
import Animation from "./Animation.json";
import Lottie from "lottie-react";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Calendars = () => {
  const { token } = theme.useToken();

  const wrapperStyle = {
    // width: 500,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const style = {
    width: "100%",

    position: "absolute", // Makes the animation span the entire viewport
    top: 0,
    left: 0,
  };

  return (
    <div className="relative w-full max-h-[300px] md:max-h-[500px] lg:max-h-[1000px] overflow-hidden">
      <Lottie style={style} animationData={Animation} loop={true} />
      <div className="mt-0 md:mt-[100px] lg:mt-[500px] mx-auto w-11/12 lg:h-[1000px] ">
        <div className="">
          <Helmet>
            <title>Calendar</title>
          </Helmet>
          <div></div>
          <div
            style={wrapperStyle}
            className="mt-5 mx-auto lg:mt-0 max-w-sm md:max-w-md lg:max-w-lg   p-4"
          >
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendars;

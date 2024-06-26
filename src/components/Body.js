import React from "react";
import MyProfile from "./MyProfile";

import UpdateDeleteDoc from "./UpdateDeleteDoc";
import ShareDoc from "./ShareDoc";
const Body = () => {
  return (
    <div>
      <UpdateDeleteDoc />
      <ShareDoc />
      <MyProfile />
    </div>
  );
};

export default Body;

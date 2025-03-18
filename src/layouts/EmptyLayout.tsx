import React, { FC } from "react";

import { Outlet, useNavigate } from "react-router-dom";

const EmptyLayout: FC<{}> = () => {
  return <Outlet />;
};

export default EmptyLayout;

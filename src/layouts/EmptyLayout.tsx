import { FC } from "react";

import { Outlet } from "react-router-dom";

const EmptyLayout: FC<{}> = () => {
  return <Outlet />;
};

export default EmptyLayout;

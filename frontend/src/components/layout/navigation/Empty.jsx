import { Outlet, Link } from "react-router-dom";

// Layout vide, qui sert pour les auths
const Empty = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Empty;

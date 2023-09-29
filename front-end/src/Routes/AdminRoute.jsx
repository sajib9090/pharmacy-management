/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../GlobalContext/AuthProvider";
import Loader from "../components/Loader/Loader";
import { useUserContext } from "../GlobalContext/UserContext";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { singleUser } = useUserContext();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user?.email && singleUser?.email && singleUser?.isAdmin === true) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

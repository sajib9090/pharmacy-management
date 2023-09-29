// /* eslint-disable react/prop-types */
// import { Navigate, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../GlobalContext/AuthProvider";
// import Loader from "../components/Loader/Loader";
// import { useUserContext } from "../GlobalContext/UserContext";

// const AdminRoute = ({ children }) => {
//   const { user, loading, logOut } = useContext(AuthContext);
//   const { singleUser } = useUserContext();
//   const location = useLocation();

//   if (loading) {
//     return <Loader />;
//   }
//   if (user?.email && singleUser?.email && singleUser?.isAdmin === true) {
//     return children;
//   } else {
//     logOut();
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;

/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../GlobalContext/AuthProvider";
import Loader from "../components/Loader/Loader";
import { useUserContext } from "../GlobalContext/UserContext";

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const { singleUser } = useUserContext();
  const location = useLocation();
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        await singleUser();
        setIsLoadingUser(false);
      } catch (error) {
        setIsLoadingUser(false);
        logOut();
      }
    };

    if (loading) {
      loadUser();
    } else {
      setIsLoadingUser(false);
    }
  }, [loading, singleUser, logOut]);

  if (isLoadingUser) {
    return <Loader />;
  }

  if (user?.email && singleUser?.email && singleUser?.isAdmin === true) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

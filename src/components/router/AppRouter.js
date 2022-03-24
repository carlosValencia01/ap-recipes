import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
// import { firebase } from "../firebase/firebase-config";
// import { useDispatch } from "react-redux";
// import { login } from "../actions/auth";

export const AppRouter = () => {
  // const dispatch = useDispatch();

  // const [checking, setChecking] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user?.uid) {
  //       dispatch(login(user.uid, user.displayName));
  //       setIsLoggedIn(true);
  //       setUserName(user.displayName);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setChecking(false);
  //   });
  // }, [dispatch, setChecking, setIsLoggedIn]);

  // if (checking) {
  //   return <h1>Loading...</h1>;
  // }

  // if (isLoggedIn) {
  //   window.alert(`Welcome ${userName}`);
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DashboardRoutes />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

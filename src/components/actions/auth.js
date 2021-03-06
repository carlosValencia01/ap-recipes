import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    //dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        //dispatch(finishLoading());
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        //dispatch(finishLoading());
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

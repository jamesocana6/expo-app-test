import { Button, Text, Platform } from "react-native";
import { auth, provider } from "../../firebaseConfig"
import { signInWithRedirect, signOut, getRedirectResult, signInWithPopup } from "firebase/auth";

const SignIn = () => {

  const handleSignIn = () => {
    if (Platform.OS === "web") {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user)
        }).catch((error) => {
          console.log("ERROR")
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
        });
    } else if (Platform.OS === "android" || Platform.OS === "ios") {
      signInWithRedirect(auth, provider)
      getRedirectResult(auth)
        .then((result) => {
          const user = result.user;
          console.log(user)
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
        });
    }

  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("signout successful")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }



  return (
    <>
      <Text>SignIn</Text>
      <Button onPress={handleSignIn} title={"Sign In"} />
      <Button onPress={handleSignOut} title={"Sign Out"} />
    </>
  )
}

export default SignIn;
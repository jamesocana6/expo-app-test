import { Button, View, Text, Platform } from "react-native";
import { auth, provider } from "../../firebaseConfig"
import { signInWithRedirect, signOut, getRedirectResult, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState(undefined)
  const handleSignIn = () => {
    if (Platform.OS === "web") {
      signInWithPopup(auth, provider)
        .then((result) => {
          // const user = result.user;
          setUser(result.user)
          console.log(result.user)
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
      setUser(undefined)
    }).catch((error) => {
      // An error happened.
    });
  }

  const signedIn = () => {
    return (
      <View>
        <Text>Hello {user.displayName}!</Text>
        <Button onPress={handleSignOut} title={"Sign Out"} />
      </View>
    )
  }


  const signedOut = () => {
    return (
      <View>
        <Button onPress={handleSignIn} title={"Sign In"} />
      </View>
    )
  }

  return user ? signedIn() : signedOut();
}

export default SignIn;
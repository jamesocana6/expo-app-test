import { Button, View, Text, Platform } from "react-native";
import { auth, provider } from "../../firebaseConfig"
import { signInWithRedirect, signOut, getRedirectResult, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { TestContext } from "../../App";
import * as SecureStore from 'expo-secure-store';


const SignIn = () => {
  async function save(key, value) {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  }

  let value = useContext(TestContext)
  console.log(value)
  const [user, setUser] = useState(undefined)
  useEffect(() => {setUser(value)}, [])
  const handleSignIn = () => {
    if (Platform.OS === "web") {
      signInWithPopup(auth, provider)
        .then((result) => {
          // const user = result.user;
          setUser(result.user)
          localStorage.setItem("SignedIn", JSON.stringify(result.user))
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
          save("SignedIn", user)
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
      setUser(null)
      localStorage.setItem("SignedIn", null)
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
        <Text>Not signed in</Text>
        <Button onPress={handleSignIn} title={"Sign In"} />
      </View>
    )
  }

  return user ? signedIn() : signedOut();
}

export default SignIn;
import Layout from "../components/Layout";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { app } from "../firebase";
import { getAuth, onAuthStateChanged, GithubAuthProvider, signInWithPopup  } from "firebase/auth";
// import { getFirestore, collections } from "firebase/firestorre"

export default function fire() {

  const auth = getAuth(app);
  const logearse = () =>{
    const provider = new GithubAuthProvider();
    
    signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GithubAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
       // The signed-in user info.
    const user = res.user;
      console.log(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  }
  // const db = getFirestore(app)
  // const todoCollection = collections(db, "todo")

  //detectar si el usuario esta logeado
  onAuthStateChanged(auth, (user) => {
    if (user == null) {
      console.log("no hay usuario");
    } else {
      console.log("logeado");
    }
  });

  // seguir este tuto: https://www.youtube.com/watch?v=rQvOAnNvcNQ&t=224s
  // const uiConfig = {
  //   singInSuccessUrl: "/",
  //   singInOptions: [app.auth.GithubAuthProvider.PROVIDER_ID]
  //   }

  return (
    <Layout>
      <div>
        <h1>Aqui las pruebas de firebase</h1>
        <p>empezamos con el login</p>
        <button className="btn" onClick={()=>{logearse()}}>Logearse</button>
        {/* <StyledFirebaseAuth uiConfig={uiConfig} firebase={firebase.auth} /> */}
      </div>
    </Layout>
  );
}

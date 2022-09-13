import Layout from "../components/Layout";
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";
import { app } from "../firebase";
import {getAuth}  from  "firebase/auth";

export default function fire() {
 const auth = getAuth(app);
 console.log(auth)
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
        {/* <StyledFirebaseAuth uiConfig={uiConfig} firebase={firebase.auth} /> */}
      </div>
    </Layout>
  );
}

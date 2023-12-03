import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {CommentCard} from "./features/commentCard/CommentCard";
import {Reactions} from "./features/Reactions/Reactions";

function App() {
  return (
    <>
      <img
        style={{maxWidth: "100%"}}
        src="https://lh5.googleusercontent.com/PeSnwsXtz23vzisaH2XvxjGCFjJtAc4334y9o7-5_WSS3E-usVOPNToZhSfWE773uWEX9CnCUKmOAe3E-6sHssPmIw_aEJeW6D3JsT7Zx3dPKC0f00nvSwz7O3DGvlMiwlT_oov4"
      />
      <Reactions />
    </>
  );
}

export default App;

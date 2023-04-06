import { SignUp } from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "./components/SignIn";
import { useEffect, useState } from "react";

import { Home } from "./components/Home";
function App() {
  const [cred, setCred] = useState();

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setCred({
        ...cred,
        name: localStorage.getItem("name"),
        password: localStorage.getItem("password"),
        email: localStorage.getItem("email"),
        number: localStorage.getItem("number"),
        profession: localStorage.getItem("profession"),
      });
    }
  }, []);

  function getCred() {
    console.log(cred);
  }

  return (
    <div className="App">
      {getCred()}
      <BrowserRouter>
        <Routes>
          {!cred ? (
            <Route path="/" element={<SignUp setCred={setCred} />} />
          ) : null}
          {cred ? <Route path="/" element={<SignIn cred={cred} />} /> : null}
          {cred ? <Route path="/home" element={<Home />} /> : null}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

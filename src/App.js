import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function formHandler(e) {
    e.preventDefault();
  }

  async function loginHandler() {
    console.warn(email, password);
    let item = { email, password };

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      const result = await response.json();
      console.log(result);
      localStorage.setItem("user-info", JSON.stringify(result));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <Header />
      <div className='login_container'>
        <Login
          setEmail={setEmail}
          setPassword={setPassword}
          loginHandler={loginHandler}
          formHandler={formHandler}
        />
        <Banner />
      </div>
    </div>
  );
}

export default App;

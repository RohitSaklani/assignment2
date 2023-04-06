import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function SignUp({ setCred }) {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [number, setNumber] = useState("");

  const [profession, setProfession] = useState("");

  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("profession", profession);
    setCred({
      name: localStorage.getItem("name"),
      password: localStorage.getItem("password"),
      email: localStorage.getItem("email"),
      number: localStorage.getItem("number"),
      profession: localStorage.getItem("profession"),
    });
    navigate("/home");
  }

  return (
    <div>
      <form onSubmit={(e) => signUp(e)} className="signup">
        <label htmlFor="name" value="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password" value="password">
          password
        </label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="email" value="email">
          email
        </label>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="number" value="number">
          number
        </label>
        <input
          id="number"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <label htmlFor="profession" value="profession">
          profession
        </label>
        <select
          name="profession"
          id="profession"
          onChange={(e) => setProfession(e.target.value)}
        >
          <option value=""></option>
          <option value="developer">developer</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

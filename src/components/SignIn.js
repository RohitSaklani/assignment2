import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export function SignIn({ cred }) {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  function logIn(e) {
    e.preventDefault();
    console.log(cred.password);
    console.log(password === cred.password);
    console.log(cred.name);
    console.log(name);
    console.log(name === cred.name);
    if (password === cred.password && name === cred.name) {
      navigate("/home");
    } else {
      setErr("wrong credential");
    }
  }

  return (
    <div>
      <form onSubmit={logIn} className="signin">
        <p>{err}</p>
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
        <button>login</button>
      </form>
    </div>
  );
}

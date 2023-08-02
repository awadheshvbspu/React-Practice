import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    const newEntry = {
      id: new Date().getTime().toString(),
      email: email,
      password: password,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <form action="" onSubmit={submitform}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {allEntry.map((curElem) => {
            const {id,email,password} = curElem;
          return (
            <div className="showData" key={id}>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

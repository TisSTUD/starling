import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import validation from "./validation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth, db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from "react-router-dom";


export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    loading: false,
    error: null,
  });

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handlechange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setValues({ ...values, error: null, loading: true });
    if (!values.email || !values.password ) {
      setValues({ ...values, error: "All fields are required" });
    }

    try {
      const result = await signInWithEmailAndPassword(auth, values.email, values.password);
      await updateDoc(doc(db, "Users", result.user.uid), {
        isOnline: true,
      });
      setValues({
        
        error: null,
        loading: false,
      });
      history.push("/home");
    } catch (err) {
      setValues({ ...values, error: err.message, loading: false });
    }
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });}
  return (
    <div>
      <form className="form">
        <div className="input">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={values.email}
            onChange={handlechange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={values.password}
            onChange={handlechange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="fotter">
          <p className="mdp">Mot de passe oublié?</p>
          <button
            disabled={values.loading}
            className="submit"
            onClick={handleFormSubmit}
          >
            {" "}
            {values.loading ? "logging in ..." : "connexion"}
          </button>
          <button className="fotter" onClick={signInWithGoogle}>connecter avec google</button>
        </div>
      </form>
    </div>
  );
}

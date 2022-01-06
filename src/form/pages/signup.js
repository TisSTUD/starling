import React from "react";
import { useState } from "react";
import validation from "./validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";

export default function Sign() {
  const [Radio, setRadio] = useState({ genre: "" });

  const [values, setValues] = useState({
    fullname: "",
    prénom: "",
    email: "",
    password: "",
    password2: "",
    error: null,
    loading: false,
  });
  const history = useHistory();
  const { fullname, prénom, email, password, password2, error, loading } =
    values;

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
    if (
      !fullname ||
      !prénom ||
      !email ||
      !password ||
      !password2 
    ) {
      setValues({ ...values, error: "All fields are required" });
    }

    try {
     try {
      if (values.password == values.password2){
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "Users", result.user.uid), {
          uid: result.user.uid,
          fullname,
          prénom,
          email,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
        });
        setValues({
          name: "",
          email: "",
          password: "",
          error: null,
          loading: false,
        });
        history.push("/home");
      }else{
        setValues({errors: 'machi kifkif'})
      }
     } catch (error) {
      setValues({ ...values, error: "Email déjà existant", loading: false });
     }
      
    } catch (err) {
      setValues({ ...values, error: err.message, loading: false });
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <form className="form-wrapper">
          <div className="fullname">
            <div className="name">
              <input
                className="input"
                type="text"
                name="fullname"
                placeholder="Nom"
                value={values.fullname}
                onChange={handlechange}
              />
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>

            <div className="prénom">
              <input
                className="input"
                type="text"
                name="prénom"
                placeholder="Prénom"
                value={values.prénom}
                onChange={handlechange}
              />
              {errors.prénom && <p className="error">{errors.prénom}</p>}
            </div>
          </div>

          <div className="email">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handlechange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="password">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={values.password}
              onChange={handlechange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="password2">
            <input
              className="input"
              type="password"
              name="password2"
              placeholder="Confirmation de mot de passe"
              value={values.password2}
              onChange={handlechange}
            />
            {errors.password2 && <p className="error">{errors.password2}</p>}
          </div>
          <div className="radioButton">
           
            <div className="radio">
              <div className="border">
                <label className="Femme">Femme</label>
                <input
                  type="radio"
                  name="genre"
                  className="femme"
                  value="Femme"
                />
              </div>

              <div className="border">
                <label className="Homme">Homme</label>
                <input
                  type="radio"
                  name="genre"
                  className="homme"
                  value="Homme"
                />
              </div>
            </div>
          </div>
          {error ? <p className="error">{error}</p> : null}
          <div>
            <button
              disabled={loading}
              className="submit"
              onClick={handleFormSubmit}
            >
              {" "}
              {loading ? "Creating ..." : "inscrire"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

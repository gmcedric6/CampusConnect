import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import useFadeInOnVisible from "../../hooks/useFadeInOnVisible";
import connexionImg from "../../assets/image/connexion.png";

function LoginPage() {
  const sectionRef = useRef(null);
  useFadeInOnVisible(sectionRef);

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "etudiant",
  });
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de succès
    setSuccess(true);
  };

  const togglePassword = () => setShowPassword((v) => !v);

  return (
    <section
      ref={sectionRef}
      className="login fade-in"
      aria-labelledby="logintitle"
    >
      <div className="loginsplitcontainer">
        <div className="loginimagecol">
          <img
            src={connexionImg}
            alt="Illustration Connexion CampusConnect"
            className="loginimage"
          />
        </div>
        <div className="loginformcol">
          <div className="logincontainer">
            <h2 id="logintitle" className="logintitle">
              Connexion
            </h2>
            <p className="loginsubtitle">
              Accédez à votre espace personnel et profitez de toutes les
              fonctionnalités de CampusConnect en toute sécurité.
            </p>
            {success ? (
              <>
                <div className="loginsuccess">
                  Connexion réussie ! Bienvenue sur la plateforme.
                </div>
                <div className="loginback">
                  <Link to="/" className="loginlink loginbacklink">
                    ← Retour à l'accueil
                  </Link>
                </div>
              </>
            ) : (
              <>
                <motion.form
                  className="loginform"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="loginfield">
                    <label htmlFor="role" className="loginlabel">
                      Je suis
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="logininput loginselect"
                      value={form.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="etudiant">Étudiant</option>
                      <option value="parent">Parent</option>
                      <option value="professeur">Professeur</option>
                      <option value="admin">Administrateur</option>
                    </select>
                  </div>
                  <div className="loginfield">
                    <label htmlFor="email" className="loginlabel">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="logininput"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="username"
                    />
                  </div>
                  <div className="loginfield">
                    <label htmlFor="password" className="loginlabel">
                      Mot de passe
                    </label>
                    <div className="loginpasswordwrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="logininput"
                        value={form.password}
                        onChange={handleChange}
                        required
                        autoComplete="currentpassword"
                        aria-label="Mot de passe"
                      />
                      <button
                        type="button"
                        className="loginpasswordtoggle"
                        onClick={togglePassword}
                        aria-label={
                          showPassword
                            ? "Masquer le mot de passe"
                            : "Afficher le mot de passe"
                        }
                        tabIndex={0}
                      >
                        {showPassword ? (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1976d2"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20C7 20 2.73 16.11 1 12c.73-1.81 2.06-3.81 4.06-5.94M9.88 9.88A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .39-.08.76-.22 1.09" />
                            <path d="M1 1l22 22" />
                          </svg>
                        ) : (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1976d2"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btnprimary logincta"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Se connecter
                  </motion.button>
                  <div className="loginlinks loginlinksrow">
                    <a href="#" className="loginlink">
                      Mot de passe oublié&nbsp;?
                    </a>
                  </div>
                </motion.form>
                <div className="loginback">
                  <Link to="/" className="loginlink loginbacklink">
                    ← Retour à l'accueil
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;

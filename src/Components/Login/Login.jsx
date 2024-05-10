import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

import google from "../../assets/UI/google.png";
import fb from "../../assets/UI/facebook.png";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <main className={styles.container}>
      <img src="logo.png" alt="logo" className={styles.logo} />
      <h1>Login To Your account</h1>
      <h2>Login to your FitnessMate account to keep your data synced</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <h3>
          <a href="#">Forgot Your Password?</a>
        </h3>
        <button type="submit">Login</button>
        <h4>Or login with</h4>
      </form>
      <div className={styles.buttons}>
        <button>
          <img src={google} alt="" />
        </button>
        <button>
          <img src={fb} alt="" />
        </button>
      </div>
      <p>
        Don’t have an account? <a href="#">Register</a> instead.
      </p>
    </main>
  );
};

export default Login;

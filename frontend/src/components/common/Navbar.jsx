import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import auth from "../../config/firebase";
import { use } from "react";
import { signOut } from "firebase/auth";
function Navbar() {
  const navigate = useNavigate();
  const [log, setlog] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in, you can access user details here
        setlog(true);
        console.log("User is signed in:", user);
      } else {
        // No user is signed in, redirect to login page
        setlog(false);
      }
    });
  }, []);

  function logout() {
    signOut(auth);
  }
  return (
    <div className="py-5 flex justify-between items-center">
      <h2 className="text-2xl font-bold">Personal</h2>
      <div className="flex items-center">
        <Link className="list-none px-5" to={"/home"}>
          Home
        </Link>
        <Link className="list-none px-5" to={"/blogs"}>
          Blogs
        </Link>
        <Link className="list-none px-5">About</Link>

        {log ? (
          <button className="button-style hidden md:block" onClick={logout}>
            Logout
          </button>
        ) : (
          <button
            className="button-style hidden md:block"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

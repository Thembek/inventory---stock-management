import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span style={{ color : '#3a3a3a' }}>{name}</span>
        </h3>
        <Link className="expenses" to="/expenses">Expenses</Link>
        <button onClick={logout} className="--btn --btn-danger">
          Logout
        </button>
        
      </div>
      <hr />
    </div>
  );
};

export default Header;

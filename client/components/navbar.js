import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import './styles/Navbar.css';

const Navbar = ({handleClick, isLoggedIn, firstName, role}) => (
  <div id="nav-container">
    <header id="logo-header">
      <div className="search-container">
        <form id="search-expand">
          <input type="search"></input>
        </form>
      </div>
      <div id="right">
        <div id="usergreet">
          Welcome, {isLoggedIn ? firstName : 'Guest'}
          {role === 'admin' ? <Link to="/admin">Admin Panel</Link> : null}
        </div>
        {isLoggedIn ? (
          <div id="rightlink">
            <React.Fragment>
              <a href="#" onClick={handleClick}>
                <div className="icon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <p>logout</p>
              </a>
            </React.Fragment>
          </div>
        ) : (
          <div id="rightlink">
            <React.Fragment>
              <Link to="/login">
                <div className="icon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
                <p>login</p>
                <p>/sign up</p>
              </Link>
            </React.Fragment>
          </div>
        )}
        <div id="rightlink">
          <Link to="/cart">
            <div className="icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <p>cart</p>
          </Link>
        </div>
      </div>
    </header>

    <h1 id="webtitle">Sugar Shack</h1>
    <div id="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/products">Browse</Link>
      <Link to="/home">Blog</Link>
      <Link to="/home">About</Link>
    </div>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    firstName: state.user.firstName,
    role: state.user.role,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  email: PropTypes.string,
};

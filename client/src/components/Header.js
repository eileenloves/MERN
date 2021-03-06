import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLogin() {
    switch(this.props.auth){
      case null:
        return
      case false:
        return <a href="/auth/google">Login with Google</a>
      default:
        return <a href="/api/users/logout">Logout</a>

    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="Header">
        <nav>
          <div className="nav-wrapper container">
            <Link
              to={this.props.auth? '/dashboard' : '/' } //login 유무에 따라 보여지는 페이지가 다름
              className="left brand-logo"
            >
              MERN
            </Link>
            <ul className="right">
              <li>
                {this.renderLogin()}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);

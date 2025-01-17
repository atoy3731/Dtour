import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { STATES } from 'mongoose';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Google Login</a></li>
      default:
        return [
          <li key="1"><Payments /></li>,
          //print out the credits user have
          <li key="3" style={{ margin: '0 10px'}}> 
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
          

        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Dtour
                </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };

}

export default connect(mapStateToProps)(Header); 
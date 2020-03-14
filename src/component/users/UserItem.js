import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { Container } from "reactstrap";
import './User.css'

const UserItem = ({ user: { login, avatar_url } }) => {
  
  return (
    <Container id="card">
      <div className="card text-center">
        
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "60px" }}
          />
      

        <div className="card-title">{login}</div>
        <div className="card-text text-secondary">
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            Read More...
          </Link>
        </div>
      </div>
    </Container>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
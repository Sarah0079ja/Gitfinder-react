import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';
import GithubContext from "../../context/github/githubContext";

const User = ({match}) => {
  const githubContext = useContext(GithubContext)
  
  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  
 

    const {name, avatar_url, location, bio, blog, html_url, public_repos, hireable, login} = user;

    if (loading) return <Spinner />

    return (
      <Fragment>
        <Link to="/" className="btn btn-dark">
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fa fa-check text-success" />
        ) : (
          <i className="fa fa-times circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />

            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {blog}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>website:</strong> {public_repos}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }

export default User
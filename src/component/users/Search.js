import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Search extends Component {
    state = {
        text: '' 
    };

    static propTypes = {
      searchUsers : PropTypes.func.isRequired,
      clearUsers : PropTypes.func.isRequired,
      showClear: PropTypes.bool.isRequired,
      setAlert: PropTypes.func.isRequired,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    } 

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
          this.props.setAlert('Dont be Lazy Enter a Text', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
        
    }
    render() {
      const {showClear, clearUsers} = this.props
        return (
          <div>
            <form onSubmit={this.onSubmit} className="form">
              <input
                type="text"
                name="text"
                value={this.state.text}
                placeholder="Search Users..."
                onChange={this.onChange}
              />

              <input type="submit" className="btn btn-dark btn-block" />
            </form>

            {showClear && (
              <button
                className="btn btn-dark btn-block"
                onClick={clearUsers}
              >
                Clear
              </button>
            )}
          </div>
        );
    }
}

export default Search

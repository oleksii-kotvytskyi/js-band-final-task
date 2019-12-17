import React from 'react';
import LogoImage from '../../assets/images/logo-image.png';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../../redux/sign-in/actions';

class SignIn extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    signInCT: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.userNameInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const inputElement = this.userNameInput.current;
    inputElement.addEventListener('invalid', () => {
      inputElement.setCustomValidity('Field is not valid');
    });
  }
  handleChange(e) {
    const checkInput = e.target.value.length > 3 ? true : false;
    this.setState({
      username: e.target.value,
    });

    if (!checkInput) {
      e.target.setCustomValidity('Field is not valid');
    } else {
      e.target.setCustomValidity('');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    const { signInCT } = this.props;
    signInCT({ username });
  }

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="container col-6 col-lg-4 text-center mt-5">
          <img className="card-img-top rounded col-8" src={LogoImage} alt="avatar" />
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={this.handleSubmit}
          >
            <label className="mt-3 col-11 font-weight-bold">
              Username
              <input
                type="text"
                placeholder="type Username"
                className="form-control  text-center"
                minLength={4}
                maxLength={16}
                ref={this.userNameInput}
                autoFocus
                required
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" className="btn btn-success mt-3 col-10 btn-submit">
              <span className="signIn-content">Sign-In</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signInCT: userName => dispatch(signIn(userName)),
});

export default connect(null, mapDispatchToProps)(withRouter(SignIn));

import React from 'react';
import AvatarImage from '../../assets/images/avatar-image.png';

class SignInMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.userNameInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  errorMessage(e) {
    e.target.setCustomValidity('Field is not valid');
  }
  componentDidMount() {
    this.userNameInput.current.addEventListener('invalid', this.errorMessage);
  }
  handleChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    // const { userName } = this.state;

    return (
      <div className="container d-flex justify-content-center">
        <div className="container col-6 col-lg-4 text-center mt-5">
          <img className="card-img-top rounded col-8" src={AvatarImage} alt="avatar" />
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

export default SignInMain;

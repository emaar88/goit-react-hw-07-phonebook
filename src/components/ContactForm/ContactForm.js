import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import { connect } from "react-redux";
// import contactsActions from "../../redux/actions/contactActions";
import contactAsync from "../../redux/selectors/contactAsync";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "react-bootstrap/Button";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.number === "") {
      toast.error(`Введено пустое значение!`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (this.state.name.length < 3) {
      toast.error(`Введено слишком короткое имя!`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (this.state.number.length < 6) {
      toast.error(`Введен слишком короткий номер телефона!`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      this.props.onAddContact(this.state.name, this.state.number);
    }

    this.resetForm();
  };
  render() {
    const { name, number } = this.state;
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              id={name}
              className={classes.inputText}
              placeholder="Input name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <br />
            <input
              type="text"
              name="number"
              id={number}
              className={classes.inputText}
              placeholder="Input phone number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <ToastContainer />
          <Button variant="primary" type="submit" size="lg" block>
            Add Contact
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactAsync.addContact,
};
export default connect(null, mapDispatchToProps)(ContactForm);

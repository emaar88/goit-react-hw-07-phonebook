import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactAsync from "../../redux/selectors/contactAsync";
import contactSelectors from "../../redux/selectors/contactSelectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "react-bootstrap/Button";

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };
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
  handleChangeForNumber = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (Number.isNaN(Number(value))) {
      return;
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isOldContact = this.props.contacts.some(
      (state) => state.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (isOldContact) {
      toast.error(`Данный контакт уже есть!`, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (this.state.name === "" && this.state.number === "") {
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
    } else if (this.state.name.length > 40) {
      toast.error(`Введено слишком длинное имя!`, {
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
    } else if (this.state.number.length > 12) {
      toast.error(`Введен слишком длинный номер телефона!`, {
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
              type="tel"
              name="number"
              id={number}
              className={classes.inputText}
              placeholder="Input phone number"
              value={this.state.number}
              onChange={this.handleChangeForNumber}
            />
          </label>
          <ToastContainer />
          <Button variant="primary" type="submit" size="lg" block>
            Add Contact
          </Button>
          <Button
            variant="success"
            type="button"
            onClick={this.resetForm}
            size="lg"
            block
          >
            Reset
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onAddContact: contactAsync.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

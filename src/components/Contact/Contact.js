import React from "react";
import PropTypes from "prop-types";
import classes from "./Contact.module.css";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import contactsAsync from "../../redux/selectors/contactAsync";
import contactSelectors from "../../redux/selectors/contactSelectors";

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>{name}</p> <p>{number}</p>
      <Button onClick={onDeleteContact} variant="danger">
        X
      </Button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

// const mapStateToProps = (state, ownProps) => {
//   console.log("ownProps:", ownProps);
//   console.log(state);
//   const item = state.contacts.items.find((item) => item.id === ownProps.id);
//   return {
//     ...item,
//   };
// };

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(contactsAsync.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

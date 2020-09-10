import React from "react";
import Contact from "../Contact/";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./ContactList.module.css";
import contactSelectors from "../../redux/selectors/contactSelectors";

const ContactList = ({ contacts }) => (
  <div className={classes.container}>
    <ul>
      {contacts.length > 0 ? (
        contacts.map(({ id }) => (
          <li className={classes.li} key={id}>
            <Contact id={id} />
          </li>
        ))
      ) : (
        <li className={classes.alert}>No have contacts!</li>
      )}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);

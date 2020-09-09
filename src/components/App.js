import classes from "./App.module.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import ContactForm from "./ContactForm/";
import ContactList from "./ContactList/";
import Filter from "./Filter/";
import Loader from "./Loader/";
import contactAsync from "../redux/selectors/contactAsync";
import contactSelectors from "../redux/selectors/contactSelectors";

class App extends Component {
  componentDidMount() {
    //fetch fetchTasks
    this.props.onFetchContacts();
  }
  render() {
    return (
      <>
        <h1 className={classes.titleName}>Phonebook</h1>
        {this.props.isLoadingTasks && <Loader />}
        <ContactForm />
        <h2 className={classes.minTitleName}>Contacts</h2>
        <Filter />
        <h2 className={classes.minTitleName}>Contacts List</h2>
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingTasks: contactSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactAsync.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

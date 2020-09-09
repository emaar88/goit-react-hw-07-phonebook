import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/actions/contactActions";
import contactSelectors from "../../redux/selectors/contactSelectors";
import classes from "./Filter.module.css";

const Filter = ({ value, onRename }) => {
  return (
    <>
      <div className={classes.container}>
        <form>
          <label>Find contacts by name</label>
          <input
            className={classes.formFilter}
            type="text"
            value={value}
            onChange={(e) => onRename(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onRename: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onRename: contactsActions.onRename,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

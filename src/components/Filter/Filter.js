import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contacts-action";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <label htmlFor="">
      <input type="text" value={value} onChange={onChange} />
    </label>
  </>
);

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

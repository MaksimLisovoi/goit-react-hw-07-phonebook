import React from "react";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contacts-action";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <label htmlFor="">
      <input type="text" value={value} onChange={onChange} />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.value,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

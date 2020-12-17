import React from "react";

const Select = props => {
  let items = props.listData.map(item => (
    <option key={item.id} value={item.name}>
      {`${item.name}`}
    </option>
  ));
  return (
    <form className="add_form" autoComplete="off">
      <select
        className="student-select"
        onChange={props.onChange}
        name="chooseStudent"
      >
        <option className="option">{props.innerHTML}</option>
        {items}
      </select>
    </form>
  );
};

export default Select;

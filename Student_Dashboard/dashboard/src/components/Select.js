import React from "react";

const Select = props => {
  // console.log(props)
  let students = props.studentInfo.map(student => (
    <option key={student.id} value={student.name}>
      {`${student.name}`}
    </option>
  ));
  return (
    <form className="add_form" autoComplete="off">
      <select onChange={props.pickStudent} name="chooseStudent">
        <option className="option">kies een student</option>
        {students}
      </select>
    </form>
  );
};

export default Select;

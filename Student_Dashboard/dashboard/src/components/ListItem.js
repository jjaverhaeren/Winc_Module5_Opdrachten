import React from "react";
import "./Students.css"


const ListItem = ({ student }) => {
  return (
      <div>
             <div className="studentsList">
      <li key={student.id} className="list-item" value={student.name}>
        <section className="name" key={student.id}>
          {student.name}
        </section>
        {/* <section className="phone" key={student.id + 1}>
          tel:{student.phone}
        </section>
        <section className="email" key={student.id + 2}>
          email:{student.email}
        </section>
        <section className="age" key={student.id + 3}>
          leeftijd:{student.age}
        </section> */}
      </li>
    </div>
      </div>
 
  );
};

export default ListItem;

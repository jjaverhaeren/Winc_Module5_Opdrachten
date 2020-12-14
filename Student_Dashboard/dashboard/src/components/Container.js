import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";
import Nav from "./Nav";
import {
  students,
  getDataSet,
  distinctOpdrachtNames,
  studentInfo,
  getAveragesPerStudent,
  // getAveragesPerStudentPerOpdracht,
  getAveragesPerStudentAllOpdrachten,
  sortByMoeilijk,
  sortByLeuk,
} from "../data/utils";

const [homeDataSet1, homeDataSet2] = getDataSet();

// const [, dataSet] = getAveragesPerStudent("Aranka");
// const dataSet = [1, 1];

class Container extends Component {
  constructor(props) {
    super();
    this.state = {
      homeBarTitle: "Gemiddelde per Opdracht van alle Studenten",
      xAxisLabels: distinctOpdrachtNames,
      homeDataSet1Data: homeDataSet1,
      homeDataSet2Data: homeDataSet2,
      studentBarTitle: "",
      studentSet: students,
      studentDataSet1Data: [],
      studentDataSet2Data: [],
      studentName: "",
      homeDataSet: [1, 1],
      studentDataSet: [1, 1],
      homeMoeilijkChecked: true,
      homeLeukChecked: true,
      studentMoeilijkChecked: true,
      studentLeukChecked: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickHomeMoeilijkCheckbox = this.handleClickHomeMoeilijkCheckbox.bind(
      this
    );
    this.handleClickHomeLeukCheckbox = this.handleClickHomeLeukCheckbox.bind(
      this
    );
    this.handleClickStudentLeukCheckbox = this.handleClickStudentLeukCheckbox.bind(
      this
    );
    this.handleClickStudentMoeilijkCheckbox = this.handleClickStudentMoeilijkCheckbox.bind(
      this
    );
    this.pickStudent = this.pickStudent.bind(this);
    this.handleSortByMoeilijk = this.handleSortByMoeilijk.bind(this);
    this.handleSortByLeuk = this.handleSortByLeuk.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleClickHomeMoeilijkCheckbox(event) {
    const [homeDataSet1] = getDataSet();
    const dataSetEmpty = new Array(homeDataSet1.length).fill(0);
    event.target.checked === true && event.target.name === "homeMoeilijkChecked"
      ? this.setState({ homeDataSet1Data: homeDataSet1 })
      : this.setState({ homeDataSet1Data: dataSetEmpty });
  }

  handleClickHomeLeukCheckbox(event) {
    const [, homeDataSet2] = getDataSet();
    const dataSetEmpty = new Array(homeDataSet2.length).fill(0);
    event.target.checked === true && event.target.name === "homeLeukChecked"
      ? this.setState({ homeDataSet2Data: homeDataSet2 })
      : this.setState({ homeDataSet2Data: dataSetEmpty });
  }

  // setStudentSet() {
  //   this.setState(prevState => {
  //     return{...prevState, studentSet: ietsmetstudents}
  //   })
  // }

  handleClickStudentMoeilijkCheckbox(event) {
    const [studentDataSet1] = getAveragesPerStudentAllOpdrachten(
      this.state.studentName
    );
    // const studentDataSet1 = new Array(56).fill(5);
    const dataSetEmpty = new Array(studentDataSet1.length).fill(0);
    event.target.checked === true &&
    event.target.name === "studentMoeilijkChecked"
      ? this.setState({ studentDataSet1Data: studentDataSet1 })
      : this.setState({ studentDataSet1Data: dataSetEmpty });
  }

  handleClickStudentLeukCheckbox(event) {
    const [, studentDataSet2] = getAveragesPerStudentAllOpdrachten(
      this.state.studentName
    );
    // const studentDataSet2 = new Array(56).fill(5);
    const dataSetEmpty = new Array(studentDataSet2.length).fill(0);
    event.target.checked === true && event.target.name === "studentLeukChecked"
      ? this.setState({ studentDataSet2Data: studentDataSet2 })
      : this.setState({ studentDataSet2Data: dataSetEmpty });
  }

  pickStudent(event) {
    this.setState(prevState => {
      let chosenStudent = event.target.value;
      let [newStudentName, newDataSet] = getAveragesPerStudent(chosenStudent);
      let [
        newStudentDataSet1,
        newStudentDataSet2,
      ] = getAveragesPerStudentAllOpdrachten(students, chosenStudent);

      const newState = {
        ...prevState,
        studentBarTitle: `Moeilijk vs Leuk voor ${newStudentName} per Opdracht`,
        studentName: newStudentName,
        studentDataSet: newDataSet,
        studentDataSet1Data: newStudentDataSet1,
        studentDataSet2Data: newStudentDataSet2,
      };
      return newState;
    });
  }

  //!! Labels moeten nog meeveranderen
  //checkboxes werken niet meer
  handleSortByMoeilijk(event) {
    this.setState(prevState => {
      let chosenStudent = this.state.studentName;
      let studentSet = sortByMoeilijk(chosenStudent);
      let [
        newStudentDataSet1,
        newStudentDataSet2,
      ] = getAveragesPerStudentAllOpdrachten(studentSet, chosenStudent);

      const newState = {
        ...prevState,
        studentBarTitle: `Opdrachten gesorteerd op 'Moeilijk voor ${chosenStudent}.`,
        studentDataSet1Data: newStudentDataSet1,
        studentDataSet2Data: newStudentDataSet2,
      };
      return newState;
    });
  }

  //!! Labels moeten nog meeveranderen
  //checkboxes werken niet meer
  handleSortByLeuk(event) {
    this.setState(prevState => {
      let chosenStudent = this.state.studentName;
      let studentSet = sortByLeuk(chosenStudent);
      let [
        newStudentDataSet1,
        newStudentDataSet2,
      ] = getAveragesPerStudentAllOpdrachten(studentSet, chosenStudent);

      const newState = {
        ...prevState,
        studentBarTitle: `Opdrachten gesorteerd op 'Leuk' voor ${chosenStudent}.`,
        studentDataSet1Data: newStudentDataSet1,
        studentDataSet2Data: newStudentDataSet2,
      };
      return newState;
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Home
                    homeBarTitle={this.state.homeBarTitle}
                    xAxisLabels={this.state.xAxisLabels}
                    homeDataSet1Data={this.state.homeDataSet1Data}
                    homeDataSet2Data={this.state.homeDataSet2Data}
                    studentName={this.state.studentName}
                    homeDataSet={this.state.homeDataSet}
                    homeMoeilijkChecked={this.state.homeMoeilijkChecked}
                    homeLeukChecked={this.state.homeLeukChecked}
                    handleChange={this.handleChange}
                    handleClickHomeMoeilijkCheckbox={
                      this.handleClickHomeMoeilijkCheckbox
                    }
                    handleClickHomeLeukCheckbox={
                      this.handleClickHomeLeukCheckbox
                    }
                    handleSortByMoeilijk={this.handleSortByMoeilijk}
                    handleSortByLeuk={this.handleSortByLeuk}
                  />
                )}
              />
              <Route
                path="/students"
                render={props => (
                  <Students
                    studentBarTitle={this.state.studentBarTitle}
                    studentInfo={studentInfo}
                    studentName={this.state.studentName}
                    studentDataSet={this.state.studentDataSet}
                    xAxisLabels={this.state.xAxisLabels}
                    studentDataSet1Data={this.state.studentDataSet1Data}
                    studentDataSet2Data={this.state.studentDataSet2Data}
                    studentMoeilijkChecked={this.state.studentMoeilijkChecked}
                    studentLeukChecked={this.state.studentLeukChecked}
                    handleChange={this.handleChange}
                    handleClickStudentMoeilijkCheckbox={
                      this.handleClickStudentMoeilijkCheckbox
                    }
                    handleClickStudentLeukCheckbox={
                      this.handleClickStudentLeukCheckbox
                    }
                    pickStudent={this.pickStudent}
                    handleSortByMoeilijk={this.handleSortByMoeilijk}
                    handleSortByLeuk={this.handleSortByLeuk}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Container;

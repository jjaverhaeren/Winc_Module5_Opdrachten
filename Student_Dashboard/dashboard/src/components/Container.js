import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Students from "./Students";
import Nav from "./Nav";
import {
  students,
  distinctOpdrachtNames,
  opdrachtInfo,
  studentInfo,
  getStudentSet,
  averageOfAbsolutelyEverythingMoeilijkEnLeuk,
  getAveragesPerStudent,
  getAveragesPerOpdracht,
  getAveragesAllOpdrachtenArray,
  sortByMoeilijk,
  sortByLeuk,
  getDataSets,
} from "../data/utils";

const averagesPerOpdrachtArray = getAveragesAllOpdrachtenArray();
const [xAxisLAbels, moeilijkData, leukData] = getDataSets(
  averagesPerOpdrachtArray
);
const [averageData] = averageOfAbsolutelyEverythingMoeilijkEnLeuk();

class Container extends Component {
  constructor(props) {
    super();
    this.state = {
      homeBarTitle: "Gemiddelden per Opdracht van alle Studenten",
      averagesPerOpdrachtArray: averagesPerOpdrachtArray,
      homeXAxisLabels: xAxisLAbels,
      homeDataSet1Data: moeilijkData,
      homeDataSet2Data: leukData,
      homeDataSet: averageData,
      homeMoeilijkChecked: true,
      homeLeukChecked: true,
      homeSortedByMoeilijk: false,
      homeSortedByLeuk: false,
      homeSingleMulti: "single",
      studentSortedByMoeilijk: false,
      studentSortedByLeuk: false,
      studentBarTitle: "",
      studentXAxisLabels: distinctOpdrachtNames,
      studentSet: students,
      studentDataSet1Data: [],
      studentDataSet2Data: [],
      studentName: "",
      studentDataSet: [1, 1],
      studentMoeilijkChecked: true,
      studentLeukChecked: true,
      studentSingleMulti: "single",
      chooseAStudent: "Kies een Student",
      chooseAOpdracht: "Kies een Opdracht",
      displayCheckBoxes: true,
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
    this.handleSortDefault = this.handleSortDefault.bind(this);
    this.handleSortByMoeilijkHome = this.handleSortByMoeilijkHome.bind(this);
    this.handleSortByLeukkHome = this.handleSortByLeukkHome.bind(this);
    this.handleSortDefaultHome = this.handleSortDefaultHome.bind(this);
    this.pickOpdrachtStudent = this.pickOpdrachtStudent.bind(this);
    this.pickOpdrachtHome = this.pickOpdrachtHome.bind(this);
    this.pickOpdrachtHome = this.pickOpdrachtHome.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  getHomeDataIfChecked = () => {
    const averagesPerOpdrachtArray = getAveragesAllOpdrachtenArray();
    if (
      this.state.homeSortedByMoeilijk === false &&
      this.state.homeSortedByLeuk === false
    ) {
      let [, newMoeilijkData, newLeukData] = getDataSets(
        averagesPerOpdrachtArray
      );
      return [newMoeilijkData, newLeukData];
    } else if (
      this.state.homeSortedByMoeilijk === true &&
      this.state.homeSortedByLeuk === false
    ) {
      let averagesPerOpdrachtArraySorted = sortByMoeilijk(
        averagesPerOpdrachtArray
      );
      let [, newMoeilijkData, newLeukData] = getDataSets(
        averagesPerOpdrachtArraySorted
      );
      return [newMoeilijkData, newLeukData];
    } else if (
      this.state.homeSortedByMoeilijk === false &&
      this.state.homeSortedByLeuk === true
    ) {
      let averagesPerOpdrachtArraySorted = sortByLeuk(averagesPerOpdrachtArray);
      let [, newMoeilijkData, newLeukData] = getDataSets(
        averagesPerOpdrachtArraySorted
      );
      return [newMoeilijkData, newLeukData];
    }
  };

  handleClickHomeMoeilijkCheckbox(event) {
    const [homeDataSet1] = this.getHomeDataIfChecked();
    const dataSetEmpty = new Array(homeDataSet1.length).fill(0);
    event.target.checked === true && event.target.name === "homeMoeilijkChecked"
      ? this.setState({ homeDataSet1Data: homeDataSet1 })
      : this.setState({ homeDataSet1Data: dataSetEmpty });
  }

  handleClickHomeLeukCheckbox(event) {
    const [, homeDataSet2] = this.getHomeDataIfChecked();
    const dataSetEmpty = new Array(homeDataSet2.length).fill(0);
    event.target.checked === true && event.target.name === "homeLeukChecked"
      ? this.setState({ homeDataSet2Data: homeDataSet2 })
      : this.setState({ homeDataSet2Data: dataSetEmpty });
  }

  getStudentDataIfChecked = () => {
    let studentSet = getStudentSet(this.state.studentName);
    if (
      this.state.studentSortedByMoeilijk === false &&
      this.state.studentSortedByLeuk === false
    ) {
      let [, newMoeilijkData, newLeukData] = getDataSets(studentSet);
      return [newMoeilijkData, newLeukData];
    } else if (
      this.state.studentSortedByMoeilijk === true &&
      this.state.studentSortedByLeuk === false
    ) {
      let studentSetSorted = sortByMoeilijk(studentSet);
      let [, newMoeilijkData, newLeukData] = getDataSets(studentSetSorted);
      return [newMoeilijkData, newLeukData];
    } else if (
      this.state.studentSortedByMoeilijk === false &&
      this.state.studentSortedByLeuk === true
    ) {
      let studentSetSorted = sortByLeuk(studentSet);
      let [, newMoeilijkData, newLeukData] = getDataSets(studentSetSorted);
      return [newMoeilijkData, newLeukData];
    }
  };

  handleClickStudentMoeilijkCheckbox(event) {
    const [newMoeilijkData] = this.getStudentDataIfChecked();
    const dataSetEmpty = new Array(56).fill(0);
    event.target.checked === true &&
    event.target.name === "studentMoeilijkChecked"
      ? this.setState({
          studentDataSet1Data: newMoeilijkData,
        })
      : this.setState({ studentDataSet1Data: dataSetEmpty });
  }

  handleClickStudentLeukCheckbox(event) {
    const [, newLeukData] = this.getStudentDataIfChecked();
    const dataSetEmpty = new Array(56).fill(0);
    event.target.checked === true && event.target.name === "studentLeukChecked"
      ? this.setState({ studentDataSet2Data: newLeukData })
      : this.setState({ studentDataSet2Data: dataSetEmpty });
  }

  pickStudent(event) {
    this.setState(prevState => {
      let chosenStudent = event.target.value;
      let [newStudentName, newDataSet] = getAveragesPerStudent(
        students,
        chosenStudent
      );
      let studentSet = getStudentSet(chosenStudent);
      const [newXAxisLAbels, newMoeilijkData, newLeukData] = getDataSets(
        studentSet
      );

      const newState = {
        ...prevState,
        studentSortedByMoeilijk: false,
        studentSortedByLeuk: false,
        studentXAxisLabels: newXAxisLAbels,
        studentBarTitle: `Moeilijk vs Leuk voor ${newStudentName} per Opdracht`,
        studentName: chosenStudent,
        studentDataSet: newDataSet,
        studentDataSet1Data: newMoeilijkData,
        studentDataSet2Data: newLeukData,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }

  pickOpdrachtStudent(event) {
    let chosenOpdracht = event.target.value;
    this.state.studentName === ""
      ? alert(`KIES EERST EEN STUDENT`)
      : this.state.studentSingleMulti === "single"
      ? this.pickOpdrachtStudentSingle(chosenOpdracht)
      : this.state.studentXAxisLabels.length > 5
      ? this.pickOpdrachtStudentSingle(chosenOpdracht)
      : this.pickOpdrachtStudentMulti(chosenOpdracht);
  }

  pickOpdrachtStudentSingle(chosenOpdracht) {
    if (chosenOpdracht === "Kies een Opdracht") {
      this.handleSortDefault();
    } else {
      this.setState(prevState => {
        let newLeukData = [],
          newMoeilijkData = [],
          newXAxisLabels = [];
        const studentSet = getStudentSet(this.state.studentName);
        studentSet.forEach(item => {
          if (item.Opdracht === chosenOpdracht) {
            newXAxisLabels.push(item.Opdracht);
            newMoeilijkData.push(item.Moeilijk);
            newLeukData.push(item.Leuk);
          }
        });
        const newState = {
          ...prevState,
          studentSortedByMoeilijk: false,
          studentSortedByLeuk: false,
          studentXAxisLabels: newXAxisLabels,
          studentBarTitle: `Moeilijk vs Leuk voor ${this.state.studentName} bij opdracht ${chosenOpdracht}`,
          studentDataSet1Data: newMoeilijkData,
          studentDataSet2Data: newLeukData,
          displayCheckBoxes: false,
        };
        return newState;
      });
    }
  }

  pickOpdrachtStudentMulti(chosenOpdracht) {
    if (chosenOpdracht === "Kies een Opdracht") {
      this.handleSortDefault();
    } else {
      this.setState(prevState => {
        let newLeukData = [...prevState.studentDataSet2Data],
          newMoeilijkData = [...prevState.studentDataSet1Data],
          newXAxisLabels = [...prevState.studentXAxisLabels];
        const studentSet = getStudentSet(this.state.studentName);
        studentSet.forEach(item => {
          if (item.Opdracht === chosenOpdracht) {
            newXAxisLabels.push(item.Opdracht);
            newMoeilijkData.push(item.Moeilijk);
            newLeukData.push(item.Leuk);
          }
        });
        const newState = {
          ...prevState,
          studentSortedByMoeilijk: false,
          studentSortedByLeuk: false,
          studentXAxisLabels: newXAxisLabels,
          studentBarTitle: `Moeilijk vs Leuk voor ${this.state.studentName} bij de gekozen Opdrachten`,
          studentDataSet1Data: newMoeilijkData,
          studentDataSet2Data: newLeukData,
          displayCheckBoxes: false,
        };
        return newState;
      });
    }
  }

  pickOpdrachtHome(event) {
    let chosenOpdracht = event.target.value;
    this.state.homeSingleMulti === "single"
      ? this.pickOpdrachtHomeSingle(chosenOpdracht)
      : this.state.homeXAxisLabels.length > 5
      ? this.pickOpdrachtHomeSingle(chosenOpdracht)
      : this.pickOpdrachtHomeMulti(chosenOpdracht);
  }

  pickOpdrachtHomeSingle(chosenOpdracht) {
    this.setState(prevState => {
      let newLeukData = [],
        newMoeilijkData = [],
        newXAxisLabels = [];
      const averagesPerOpdracht = getAveragesPerOpdracht(chosenOpdracht);
      newXAxisLabels.push(averagesPerOpdracht.Opdracht);
      newMoeilijkData.push(averagesPerOpdracht.Moeilijk);
      newLeukData.push(averagesPerOpdracht.Leuk);
      const newState = {
        ...prevState,
        homeBarTitle: `Gemiddelden van alle Studenten voor Opdracht ${chosenOpdracht}`,
        homeXAxisLabels: newXAxisLabels,
        homeDataSet1Data: newMoeilijkData,
        homeDataSet2Data: newLeukData,
        displayCheckBoxes: false,
      };
      return newState;
    });
  }

  pickOpdrachtHomeMulti(chosenOpdracht) {
    this.setState(prevState => {
      let newXAxisLabels = [...prevState.homeXAxisLabels],
        newMoeilijkData = [...prevState.homeDataSet1Data],
        newLeukData = [...prevState.homeDataSet2Data];
      const averagesPerOpdracht = getAveragesPerOpdracht(chosenOpdracht);
      newXAxisLabels.push(averagesPerOpdracht.Opdracht);
      newMoeilijkData.push(averagesPerOpdracht.Moeilijk);
      newLeukData.push(averagesPerOpdracht.Leuk);
      const newState = {
        ...prevState,
        homeBarTitle: `Gemiddelden van alle Studenten voor de gekozen Opdrachten`,
        homeXAxisLabels: newXAxisLabels,
        homeDataSet1Data: newMoeilijkData,
        homeDataSet2Data: newLeukData,
        displayCheckBoxes: false,
      };
      return newState;
    });
  }

  handleSortByMoeilijk(event) {
    this.setState(prevState => {
      let studentSet = getStudentSet(this.state.studentName);
      let studentSetSorted = sortByMoeilijk(studentSet);
      const [newXAxisLAbels, newMoeilijkData, newLeukData] = getDataSets(
        studentSetSorted
      );
      const newState = {
        ...prevState,
        studentSortedByMoeilijk: true,
        studentSortedByLeuk: false,
        studentXAxisLabels: newXAxisLAbels,
        studentBarTitle: `Opdrachten gesorteerd op 'Moeilijk' voor ${this.state.studentName}.`,
        studentDataSet1Data: newMoeilijkData,
        studentDataSet2Data: newLeukData,
        studentMoeilijkChecked: true,
        studentLeukChecked: true,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }

  handleSortByLeuk(event) {
    this.setState(prevState => {
      let studentSet = getStudentSet(this.state.studentName);
      let studentSetSorted = sortByLeuk(studentSet);
      const [newXAxisLAbels, newMoeilijkData, newLeukData] = getDataSets(
        studentSetSorted
      );
      const newState = {
        ...prevState,
        studentSortedByMoeilijk: false,
        studentSortedByLeuk: true,
        studentXAxisLabels: newXAxisLAbels,
        studentBarTitle: `Opdrachten gesorteerd op 'Leuk' voor ${this.state.studentName}.`,
        studentDataSet1Data: newMoeilijkData,
        studentDataSet2Data: newLeukData,
        studentMoeilijkChecked: true,
        studentLeukChecked: true,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }

  handleSortDefault(event) {
    this.setState(prevState => {
      let studentSet = getStudentSet(this.state.studentName);
      const [newXAxisLAbels, newMoeilijkData, newLeukData] = getDataSets(
        studentSet
      );

      const newState = {
        ...prevState,
        studentSortedByMoeilijk: false,
        studentSortedByLeuk: false,
        studentXAxisLabels: newXAxisLAbels,
        studentBarTitle: `Moeilijk vs Leuk voor ${this.state.studentName} per Opdracht`,
        studentDataSet1Data: newMoeilijkData,
        studentDataSet2Data: newLeukData,
        studentMoeilijkChecked: true,
        studentLeukChecked: true,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }

  handleSortByMoeilijkHome(event) {
    this.setState(prevState => {
      const averagesPerOpdrachtArray = this.state.averagesPerOpdrachtArray;
      const averagesPerOpdrachtArraySorted = sortByMoeilijk(
        averagesPerOpdrachtArray
      );
      const [xAxisLAbels, moeilijkData, leukData] = getDataSets(
        averagesPerOpdrachtArraySorted
      );
      const newState = {
        ...prevState,
        homeSortedByMoeilijk: true,
        homeSortedByLeuk: false,
        homeBarTitle: "Gesorteerd op 'Moeilijk' voor alle studenten",
        homeXAxisLabels: xAxisLAbels,
        homeDataSet1Data: moeilijkData,
        homeDataSet2Data: leukData,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }

  handleSortByLeukkHome(event) {
    this.setState(prevState => {
      const averagesPerOpdrachtArray = this.state.averagesPerOpdrachtArray;
      const averagesPerOpdrachtArraySorted = sortByLeuk(
        averagesPerOpdrachtArray
      );
      const [xAxisLAbels, moeilijkData, leukData] = getDataSets(
        averagesPerOpdrachtArraySorted
      );
      const newState = {
        ...prevState,
        homeSortedByMoeilijk: false,
        homeSortedByLeuk: true,
        homeBarTitle: "Gesorteerd op 'Leuk' voor alle studenten",
        homeXAxisLabels: xAxisLAbels,
        homeDataSet1Data: moeilijkData,
        homeDataSet2Data: leukData,
        displayCheckBoxes: true,
      };
      return newState;
    });
  }

  handleSortDefaultHome(event) {
    this.setState(prevState => {
      const averagesPerOpdrachtArray = getAveragesAllOpdrachtenArray();
      const [xAxisLAbels, moeilijkData, leukData] = getDataSets(
        averagesPerOpdrachtArray
      );
      const newState = {
        ...prevState,
        homeSortedByMoeilijk: false,
        homeSortedByLeuk: false,
        homeBarTitle: "Gemiddelde per Opdracht van alle Studenten",
        homeXAxisLabels: xAxisLAbels,
        homeDataSet1Data: moeilijkData,
        homeDataSet2Data: leukData,
        displayCheckBoxes: true,
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
                    opdrachtInfo={opdrachtInfo}
                    chooseAOpdracht={this.state.chooseAOpdracht}
                    homeBarTitle={this.state.homeBarTitle}
                    homeXAxisLabels={this.state.homeXAxisLabels}
                    homeDataSet1Data={this.state.homeDataSet1Data}
                    homeDataSet2Data={this.state.homeDataSet2Data}
                    studentName={this.state.studentName}
                    homeDataSet={this.state.homeDataSet}
                    homeMoeilijkChecked={this.state.homeMoeilijkChecked}
                    homeLeukChecked={this.state.homeLeukChecked}
                    displayCheckBoxes={this.state.displayCheckBoxes}
                    homeSingleMulti={this.state.homeSingleMulti}
                    handleChange={this.handleChange}
                    handleClickHomeMoeilijkCheckbox={
                      this.handleClickHomeMoeilijkCheckbox
                    }
                    handleClickHomeLeukCheckbox={
                      this.handleClickHomeLeukCheckbox
                    }
                    handleSortByMoeilijkHome={this.handleSortByMoeilijkHome}
                    handleSortByLeukkHome={this.handleSortByLeukkHome}
                    handleSortDefaultHome={this.handleSortDefaultHome}
                    pickOpdrachtHome={this.pickOpdrachtHome}
                  />
                )}
              />
              <Route
                path="/students"
                render={props => (
                  <Students
                    studentBarTitle={this.state.studentBarTitle}
                    studentInfo={studentInfo}
                    opdrachtInfo={opdrachtInfo}
                    chooseAStudent={this.state.chooseAStudent}
                    chooseAOpdracht={this.state.chooseAOpdracht}
                    studentName={this.state.studentName}
                    studentDataSet={this.state.studentDataSet}
                    studentXAxisLabels={this.state.studentXAxisLabels}
                    studentDataSet1Data={this.state.studentDataSet1Data}
                    studentDataSet2Data={this.state.studentDataSet2Data}
                    studentMoeilijkChecked={this.state.studentMoeilijkChecked}
                    studentLeukChecked={this.state.studentLeukChecked}
                    displayCheckBoxes={this.state.displayCheckBoxes}
                    studentSingleMulti={this.state.studentSingleMulti}
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
                    handleSortDefault={this.handleSortDefault}
                    pickOpdrachtStudent={this.pickOpdrachtStudent}
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

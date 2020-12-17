import { ratings } from "./data";

//
// GENERATE INFO FUNCTIONS
//
export const students = [...ratings];

export const distinctStudentNames = [
  ...new Set(students.map(student => student.Student)),
];

export const distinctOpdrachtNames = [
  ...new Set(students.map(student => student.Opdracht)),
];

const randomPhone = () => {
  const lasteight = Math.round(Math.random() * (99999999 - 10000000));
  return "06-" + lasteight;
};

const randomAge = () => {
  return Math.round(Math.random() * (55 - 18) + 18);
};

//
const generateOpdrachtInfo = () => {
  const OpdrachtInfo = distinctOpdrachtNames.map(name => ({ name }));
  let id = 1;
  OpdrachtInfo.forEach(opdracht => {
    opdracht.id = id++;
  });
  return OpdrachtInfo;
};

export const opdrachtInfo = generateOpdrachtInfo();

//
const info = distinctStudentNames.map(name => ({ name }));
let id = 1;
info.forEach(student => {
  student.id = id++;
  student.phone = randomPhone();
  student.email = `${student.name}@gmail.com`;
  student.age = randomAge();
});

info.forEach(student => {
  switch (student.name) {
    case "Evelyn":
      student.studentImgUrl = "/img/Evelyn.jpg";
      break;
    case "Aranka":
      student.studentImgUrl = "/img/Aranka.jpg";
      break;
    case "Floris":
      student.studentImgUrl = "/img/Floris.jpg";
      break;
    case "Hector":
      student.studentImgUrl = "/img/Hector.jpg";
      break;
    case "Martina":
      student.studentImgUrl = "/img/Martina.jpg";
      break;
    case "Maurits":
      student.studentImgUrl = "/img/Maurits.jpg";
      break;
    case "Rahima":
      student.studentImgUrl = "/img/Rahima.jpg";
      break;
    case "Sandra":
      student.studentImgUrl = "/img/Sandra.jpg";
      break;
    case "Storm":
      student.studentImgUrl = "/img/Storm.jpg";
      break;
    case "Wietske":
      student.studentImgUrl = "/img/Wietske.jpg";
      break;
    default:
      student.studentImgUrl = "/img/winclogo.jpg";
  }
});

export const studentInfo = info;
//
//GET AVERAGE FUNCTIONS:
//
export const averageOfAbsolutelyEverythingMoeilijkEnLeuk = () => {
  let sumMoeilijk = 0,
    sumLeuk = 0;
  students.forEach(student => {
    sumMoeilijk += student.Moeilijk;
    sumLeuk += student.Leuk;
  });
  let averageMoeilijk = Math.round((sumMoeilijk / students.length) * 10) / 10;
  let averageLeuk = Math.round((sumLeuk / students.length) * 10) / 10;
  return [[averageMoeilijk, averageLeuk]];
};

export const getAverage = array => {
  const reducer = (total, current) => total + current;
  const sum = array.reduce(reducer);
  return sum / array.length;
};

export const getAveragesPerStudent = (array, studentName) => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0;
  array.forEach(student => {
    if (student.Student === studentName) {
      sumMoeilijk += student.Moeilijk;
      sumLeuk += student.Leuk;
      numberOfTests++;
    }
  });
  const averageMoeilijk = Math.round((sumMoeilijk / numberOfTests) * 10) / 10;
  const averageLeuk = Math.round((sumLeuk / numberOfTests) * 10) / 10;
  let dataSet = [];
  dataSet.push(averageMoeilijk);
  dataSet.push(averageLeuk);
  return [studentName, dataSet];
};

export const getAveragesPerStudentPerOpdracht = (studentName, opdracht) => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0;
  students.forEach(student => {
    if (student.Student === studentName && student.Opdracht === opdracht) {
      sumMoeilijk += student.Moeilijk;
      sumLeuk += student.Leuk;
      numberOfTests++;
    }
  });

  const averageMoeilijk = Math.round((sumMoeilijk / numberOfTests) * 10) / 10;
  const averageLeuk = Math.round((sumLeuk / numberOfTests) * 10) / 10;
  console.log(`${studentName} gemiddelde Moeilijk: ${averageMoeilijk}`);
  console.log(`${studentName} gemiddelde Leuk: ${averageLeuk}`);
  let dataSet = [];
  dataSet.push(averageMoeilijk);
  dataSet.push(averageLeuk);
  return dataSet;
};

export const getAveragesPerStudentAllOpdrachten = (array, studentName) => {
  let moeilijkArray = [],
    leukArray = [];
  array.forEach(student => {
    if (student.Student === studentName) {
      moeilijkArray.push(student.Moeilijk);
      leukArray.push(student.Leuk);
    }
  });
  return [moeilijkArray, leukArray];
};

export const getAveragesPerOpdracht = opdracht => {
  let sumMoeilijk = 0,
    sumLeuk = 0,
    numberOfTests = 0,
    moeilijkArrayOfOpdracht = [],
    leukArrayOfOpdracht = [],
    averagesPerOpdracht = {};

  students.forEach(student => {
    if (student.Opdracht === opdracht) {
      sumMoeilijk += student.Moeilijk;
      sumLeuk += student.Leuk;
      numberOfTests++;
      const averageMoeilijkperOpdracht = Math.round(
        sumMoeilijk / numberOfTests
      );
      moeilijkArrayOfOpdracht.push(averageMoeilijkperOpdracht);
      const averageLeukperOpdracht = Math.round(sumLeuk / numberOfTests);
      leukArrayOfOpdracht.push(averageLeukperOpdracht);
    }
  });
  const averageMoeilijkOfStudents = getAverage(moeilijkArrayOfOpdracht);
  const averageLeukOfStudents = getAverage(leukArrayOfOpdracht);
  averagesPerOpdracht.Opdracht = opdracht;
  averagesPerOpdracht.Moeilijk = averageMoeilijkOfStudents;
  averagesPerOpdracht.Leuk = averageLeukOfStudents;
  return averagesPerOpdracht;
};

export const getAveragesAllOpdrachtenArray = () => {
  let averagesPerOpdrachtArray = [];
  distinctOpdrachtNames.forEach(opdracht => {
    const averagesPerOpdracht = getAveragesPerOpdracht(opdracht);
    averagesPerOpdrachtArray.push(averagesPerOpdracht);
  });
  return averagesPerOpdrachtArray;
};

//
//SORT FUNCTIONS
//
export const sortByMoeilijk = array => {
  const sortedArray = array.sort((a, b) =>
    a.Moeilijk < b.Moeilijk ? 1 : b.Moeilijk < a.Moeilijk ? -1 : 0
  );
  return sortedArray;
};

export const sortByLeuk = array => {
  const sortedArray = array.sort((a, b) =>
    a.Leuk < b.Leuk ? 1 : b.Leuk < a.Leuk ? -1 : 0
  );
  return sortedArray;
};

//
//GET DATASETS FUNCTIONS
//
export const getDataSets = array => {
  let moeilijkData = [],
    leukData = [],
    xAxisLAbels = [];
  array.forEach(opdracht => {
    xAxisLAbels.push(opdracht.Opdracht);
    moeilijkData.push(opdracht.Moeilijk);
    leukData.push(opdracht.Leuk);
  });
  return [xAxisLAbels, moeilijkData, leukData];
};

export const getStudentSet = studentName => {
  let studentSet = [];
  students.forEach(student => {
    if (student.Student === studentName) {
      studentSet.push(student);
    }
  });
  return studentSet;
};

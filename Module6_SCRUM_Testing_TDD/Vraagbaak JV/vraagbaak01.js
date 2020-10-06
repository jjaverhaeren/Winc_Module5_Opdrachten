const getBirthdayFinal = () => {
  let birthdayString = person.birthday.mdy.split("");
  let birthMonth = [];
  birthMonth.push(birthdayString[0]);
  birthMonth.push(birthdayString[1]);
  birthMonth.join("");
  let birthDay = [];
  birthDay.push(birthdayString[3]);
  birthDay.push(birthdayString[4]);
  birthDay.join("");
  let birthdayFinal = birthMonth.concat(birthDay).join("");
  // log(birthdayFinal)
  return birthdayFinal;
};

const addZodiacToPerson = () => {
  try {
    randomPersonData.filter((person) => {
      // let birthdayString = person.birthday.mdy.split("");
      // let birthMonth = [];
      // birthMonth.push(birthdayString[0]);
      // birthMonth.push(birthdayString[1]);
      // birthMonth.join("");
      // let birthDay = [];
      // birthDay.push(birthdayString[3]);
      // birthDay.push(birthdayString[4]);
      // birthDay.join("");
      // let birthdayFinal = birthMonth.concat(birthDay).join("");
      // // log(birthdayFinal)
      // // return birthdayFinal;
      let birthdayFinal = getBirthdayFinal();

      if (
        person.age >= 18 &&
        ((birthdayFinal > 321 && birthdayFinal < 331) ||
          (birthdayFinal > 401 && birthdayFinal < 420))
      ) {
        person.zodiac = "Aries";
        log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else {
        log(`${person.name}'s zodiac sign is certainly not Aries.`);
      }
    });
  } catch (error) {
    log(error);
  }
};

addZodiacToPerson();

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: 47000,
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: 63500,
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: 74750,
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: 66000,
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: 35000,
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//create a function that takes in employee as an argument
//for loop to bring in all the employee objects
//each iteration, return a new object for each employee
  //copy the same employee name
  //for the bonus percentage, begin a conditional that determines salary percentage increase based on reviewRating
      //if employeeNumber is four digits, extra 5% bonus
      //if income is more than $65,000, adjust bonus down 1%
      //no bonus above 13% or below 0%
      //this should save bonus as a new variable
  //totalCompensation = annualSalary + new bonus variable
  //totalBonus = display new bonus variable

console.log(employees);

  // Determine name value

  // Determine bonus percentage

  // Determine total bonus

  // Determine total compensation

  // package everything up into an object and return it


for (i=0; i<employees.length; i++) {
  console.log(determineBonus(employees[i]));
}

function determineBonus(emp) {
  let bonusPercentage = 0;
  if (emp.reviewRating === 3) {
      bonusPercentage += 4;
    } else if (emp.reviewRating === 4) {
      bonusPercentage += 6;
    } else if (emp.reviewRating === 5) {
      bonusPercentage += 10;
    }

    if (emp.employeeNumber.length === 4) {
      bonusPercentage += 5;
    }

    if (emp.annualSalary > 65000) {
      bonusPercentage -= 1;
    }

    if (bonusPercentage > 13) {
      bonusPercentage = 13;
    }

    if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }

    let displayPercentage = bonusPercentage + '%';

    bonusPercentage = bonusPercentage / 100;

    let newBonus = emp.annualSalary * bonusPercentage;

    let newCompensation = emp.annualSalary + newBonus;

    let newEmployeeInfo = {
      name: emp.name,
      bonusPercentage: displayPercentage,
      totalBonus: newBonus,
      totalCompensation: newCompensation
    }

    return newEmployeeInfo;

  } 


//  COMMENTING OUT ALL WORK BEYOND THIS POINT

// function NewBonus(name, bonusPercentage, totalCompensation, totalBonus) {
//   this.name = name;
//   this.bonusPercentage = bonusPercentage;
//   this.totalCompensation = totalCompensation;
//   this.totalBonus = totalBonus
// }


// function tenureBonus( emp ) {
//   let tenureBonusPercent = 0;
//   for (let i=0; i<emp.length; i++) {
//     if (emp[i].employeeNumber >= 1000 && emp[i].employeeNumber <= 9999) {
//       tenureBonusPercent += 5;
//       console.log(emp[i]);
//     } else {
//       let tenureBonusPercent = 0;
//     }
//   }
// }

// objects: name   employeeNumber    annualSalary      reviewRating
// objects: name   bonusPercentage   totalCompensation   totalBonus

// bonusPercentage = bonusCalc();
// totalCompensation = annualSalary + totalBonus;
// // totalBonus = (bonusCalc()/100) * annualSalary



// function bonusCalc( emp ) {
//   let bonusPercentage = 0;
//   for (let i=0; i<emp.length; i++) {
//     if (emp[i].reviewRating <= 2){
//        bonusPercentage += 0;
//        console.log('Receiving No Bonus: ', emp[i].name)
//     } 
//     else if (emp[i].reviewRating === 3) {
//       bonusPercentage += 4;
//       console.log('Receiving 4% Bonus: ', emp[i].name);
//       bonusPercentage += 4;
//     }
//     else if (emp[i].reviewRating === 4) {
//       bonusPercentage += 6;
//       console.log('Receiving 6% Bonus: ', emp[i].name)
//     }
//     else if (emp[i].reviewRating === 5) {
//       bonusPercentage += 10;
//       console.log('Receiving 10% Bonus: ', emp[i].name)
//     }

//     console.log('Current bonus by rating:' + bonusPercentage + 'for' + emp[i].name);
    
//   }

//   for (let i=0; i<emp.length; i++) {
//     if (emp[i].employeeNumber >= 1000 && emp[i].employeeNumber <= 9999) {
//       bonusPercentage += 5;
//       console.log(emp[i]);
//     }
//   }

//   console.log('Current bonus by tenure:' + bonusPercentage + 'for' + emp[i].name);

//   for (let i = 0; i < emp.length; i++) {
//     if (emp[i].annualSalary) {
//       bonusPercentage += 5;
//       console.log(emp[i]);
//     }
//   }
//     for (let i = 0; i < emp.length; i++) {
//       if (emp[i].employeeNumber >= 1000 && emp[i].employeeNumber <= 9999) {
//         bonusPercentage += 5;
//         console.log(emp[i]);
//       }
//     }

//     console.log('Current bonus by salary:' + bonusPercentage + 'for' + emp[i].name);

//   // new NewBonus(name, bonusPercentage, totalCompensation, totalBonus);
// }



// bonusCalc(employees);
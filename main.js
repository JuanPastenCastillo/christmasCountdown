const leapYear = []
for (let x = 2020;x < 2100;x++) {
 let isLeap = new Date(x, 1, 29).getMonth();
 if (isLeap == 1) {
  leapYear.push(x)
 }
}
// console.log('leapYear:', leapYear)

const theDays = {
 0: "Sunday",
 1: "Monday",
 2: "Tuesday",
 3: "Wednesday",
 4: "Thursday",
 5: "Friday",
 6: "Saturday"
}

const theMonths = {
 0: "January",
 1: "February",
 2: "March",
 3: "April",
 4: "May",
 5: "June",
 6: "July",
 7: "August",
 8: "September",
 9: "October",
 10: "November",
 11: "December"
}

const myMotherIsEternalOriginal = new Date(2020, 11, 25, 0, 0)
// console.log('myMotherIsEternalOriginal:', myMotherIsEternalOriginal)

const anniversaryDateDOOM = document.querySelector(".anniversaryDate")
const anniversariesUntilNowDOOM = document.querySelector(".anniversariesUntilNow")
const showTimeDOOM = document.querySelector(".showTheTimeNow")

const seconsDOOM = document.body.querySelector("#seconsLeft")
const minutesDOOM = document.body.querySelector("#minutesLeft")
const hoursDOOM = document.body.querySelector("#hoursLeft")
const daysDOOM = document.body.querySelector("#daysLeft")

const dayAnniversaryThisYearDOOM = document.body.querySelector("#dayAnniversaryThisYear")
const dayAnniversaryNextYearDOOM = document.body.querySelector("#dayAnniversaryNextYear")

const buttonToggleDOOM = document.body.querySelector(".buttonToggle")
const allTheAnniversariesDOOM = document.body.querySelector(".allTheAnniversaries")


let seconsLeft = 0;
let minutesLeft = 0;
let hoursLeft = 0;
let daysLeft = 0;

// let dateInsideFunction = new Date(2023, 9, 15, 4, 52)
// console.log('dateInsideFunction:', dateInsideFunction)

let checkToDelete = ""
let checkAnniversary = function () {
 // const startInside = Date.now()
 // console.log('startInside:', startInside)

 let dateInsideFunction = new Date()
 // let dateInsideFunction = new Date(2021, 11, 25, 59, 59, 59, 2000)
 // let dateInsideFunction = new Date(2023, 9, 16, 4, 52, 59, 1000)
 // let dateInsideFunction = new Date(2041, 9, 16, 4, 52, 59, 1001)
 // let dateInsideFunction = new Date(2020, 11, 31, 59, 59, 59, 999)
 // let dateInsideFunction = new Date(2022, 11, 1, 0, 0, 0, 0)
 // let dateInsideFunction = new Date(2025, 11, 31, 23, 59, 59, 1000)
 

 let seconsFormated = dateInsideFunction.getSeconds() > 9 ? dateInsideFunction.getSeconds() : `0${dateInsideFunction.getSeconds()}`

 let minutesFormated = dateInsideFunction.getMinutes() > 9 ? dateInsideFunction.getMinutes() : `0${dateInsideFunction.getMinutes()}`

 let hoursFormated = dateInsideFunction.getHours() > 9 ? dateInsideFunction.getHours() : `0${dateInsideFunction.getHours()}`

 let dayFormated = dateInsideFunction.getDate() > 9 ? dateInsideFunction.getDate() : `0${dateInsideFunction.getDate()}`

 let monthFormated = dateInsideFunction.getMonth() >= 9 ? `${dateInsideFunction.getMonth()+1}` : `0${dateInsideFunction.getMonth()+1}`

 showTimeDOOM.textContent = `Actual date: ${dateInsideFunction.getFullYear()}/${monthFormated}/${dayFormated} - ${theDays[dateInsideFunction.getDay()]} ${hoursFormated}:${minutesFormated}:${seconsFormated}`


 let myMotherIsEternalCopy = new Date(myMotherIsEternalOriginal.getTime())
 myMotherIsEternalCopy.setFullYear(dateInsideFunction.getFullYear())
 // console.log('myMotherIsEternalCopy:', myMotherIsEternalCopy)

 dayAnniversaryThisYearDOOM.textContent = `In this year, the christmas day is in: ${theDays[myMotherIsEternalCopy.getDay()]}`

 let myMotherIsEternalCopyNextYear = new Date(myMotherIsEternalOriginal.getTime())
 myMotherIsEternalCopyNextYear.setFullYear(dateInsideFunction.getFullYear() + 1)
 //('myMotherIsEternalCopyNextYear:', myMotherIsEternalCopyNextYear)

 dayAnniversaryNextYearDOOM.textContent = `In the next year, the christmas day is in: ${theDays[myMotherIsEternalCopyNextYear.getDay()]}`




 let milliseconsUntilNextAnniversary = myMotherIsEternalCopy - dateInsideFunction
 // console.log('milliseconsUntilNextAnniversary:', milliseconsUntilNextAnniversary)

 let anniversariesUntilNowGlobal = ""
 if (milliseconsUntilNextAnniversary <= 0) {
  anniversariesUntilNowGlobal = dateInsideFunction.getFullYear() - myMotherIsEternalOriginal.getFullYear()
 } else if (milliseconsUntilNextAnniversary > 0) {
  anniversariesUntilNowGlobal = (dateInsideFunction.getFullYear() - 1) - myMotherIsEternalOriginal.getFullYear()
 }
 // console.log('anniversariesUntilNowGlobal:', anniversariesUntilNowGlobal)

 anniversariesUntilNowDOOM.textContent = `Amount of christmas until now: ${anniversariesUntilNowGlobal}`
 // console.log('anniversariesUntilNowDOOM.textContent:', anniversariesUntilNowDOOM.textContent)


 // console.log('anniversariesUntilNowGlobal:', anniversariesUntilNowGlobal)





 // let timeUntilNowLessEternalMotherOriginal = dateInsideFunction - myMotherIsEternalOriginal
 // console.log('timeUntilNowLessEternalMotherOriginal:', timeUntilNowLessEternalMotherOriginal)

 let milliseconsToCheck = myMotherIsEternalCopyNextYear - dateInsideFunction
 //('milliseconsToCheck:', milliseconsToCheck)

 let isLeapYear;
 for (const x of leapYear) {
  if (x === dateInsideFunction.getFullYear()) {
   isLeapYear = true
   // console.log(('isLeapYear:', isLeapYear))

   // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31557600000)
   // console.log(('anniversariesUntilNow:', anniversariesUntilNow))
   // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`
   // console.log('timeUntilNowLessEternalMotherOriginal / 31557600000:', timeUntilNowLessEternalMotherOriginal / 31557600000) 
  }
 }

 if (isLeapYear && milliseconsUntilNextAnniversary >= 0) {
  //('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31622400000)
  // console.log(('anniversariesUntilNow:', anniversariesUntilNow))
  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`

  seconsLeft = 31622400 - Math.floor(31622400 - (milliseconsUntilNextAnniversary / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutes`
   //('minutesLeft:', minutesLeft)
  }

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} secons`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} days`
   //('daysLeft:', daysLeft)
  }

 } else if (isLeapYear && milliseconsUntilNextAnniversary < 0) {
  isLeapYear = true
  //('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31536000000)
  // console.log(('anniversariesUntilNow:', anniversariesUntilNow))
  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`


  seconsLeft = 31536000 - Math.floor(31536000 - (milliseconsToCheck / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutes`
   //('minutesLeft:', minutesLeft)
  }
  //('minutesLeft:', minutesLeft)

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} secons`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} days`
   //('daysLeft:', daysLeft)
  }
 }

 if (isLeapYear === undefined && milliseconsUntilNextAnniversary >= 0) {
  isLeapYear = false
  // console.log('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31536000000)

  // console.log('timeUntilNowLessEternalMotherOriginal:', timeUntilNowLessEternalMotherOriginal)

  // console.log('anniversariesUntilNow:', anniversariesUntilNow)

  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`

  // console.log('timeUntilNowLessEternalMotherOriginal / 31536000000:', timeUntilNowLessEternalMotherOriginal / 31536000000)

  // console.log('milliseconsUntilNextAnniversary:', milliseconsUntilNextAnniversary)

  seconsLeft = 31536000 - Math.floor(31536000 - (milliseconsUntilNextAnniversary / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutes`
   //('minutesLeft:', minutesLeft)
  }
  //('minutesLeft:', minutesLeft)

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} secons`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} days`
   //('daysLeft:', daysLeft)
  }

 } else if (isLeapYear === undefined && milliseconsUntilNextAnniversary < 0) {
  isLeapYear = false
  //('isLeapYear:', isLeapYear)

  // let anniversariesUntilNow = Math.floor(timeUntilNowLessEternalMotherOriginal / 31536000000)
  //('anniversariesUntilNow:', anniversariesUntilNow)
  // anniversariesUntilNowDOOM.textContent = `Amount of anniversaries until now is: ${anniversariesUntilNow}`

  seconsLeft = 31536000 - Math.floor(31536000 - (milliseconsToCheck / 1000))

  if (seconsLeft >= 60) {
   minutesLeft = Math.floor(seconsLeft / 60)
   minutesDOOM.textContent = `${minutesLeft} minutes`
   //('minutesLeft:', minutesLeft)
  }
  //('minutesLeft:', minutesLeft)

  if (minutesLeft >= 60) {
   hoursLeft = Math.floor(minutesLeft / 60)
   hoursDOOM.textContent = `${hoursLeft} secons`
   //('hoursLeft:', hoursLeft)
  }

  if (hoursLeft >= 24) {
   daysLeft = Math.floor(hoursLeft / 24)
   daysDOOM.textContent = `${daysLeft} days`
   //('daysLeft:', daysLeft)
  }
 }


 if (seconsLeft >= 10) {
  seconsDOOM.textContent = `${seconsLeft} secons`
  //('seconsLeft:', seconsLeft)
 } else {
  seconsDOOM.textContent = `0${seconsLeft} secons`
  //('seconsLeft:', seconsLeft)
 }

 if (minutesLeft >= 10) {
  minutesDOOM.textContent = `${minutesLeft} minutes`
  //('minutesLeft:', minutesLeft)
 } else {
  minutesDOOM.textContent = `0${minutesLeft} minutes`
  //('minutesLeft:', minutesLeft)
 }


 if (hoursLeft >= 10) {
  hoursDOOM.textContent = `${hoursLeft} secons`
  //('hoursLeft:', hoursLeft)
 } else {
  hoursDOOM.textContent = `0${hoursLeft} secons`
  //('hoursLeft:', hoursLeft)
 }

 if (daysLeft >= 10) {
  daysDOOM.textContent = `${daysLeft} days`
  //('daysLeft:', daysLeft)
 } else {
  daysDOOM.textContent = `0${daysLeft} days`
  //('daysLeft:', daysLeft)
 }




 // const millisInside = Date.now() - startInside;
 // console.log(`INSIDE millisecons taken ${millisInside}`)
 // console.log(`END ROUND ■■■■■■■■■■■■■■■■■■■■■■■■■`)

}

checkAnniversary()
const howManyAnniversariesSetInterval = setInterval(checkAnniversary, 1000)

let yearAndDayOfAnniversaries = []
let anniversariesDays = new Date(myMotherIsEternalOriginal.getTime())
// console.log('anniversariesDays:', anniversariesDays)

for (let x = anniversariesDays.getFullYear();x <= 2100;x++) {
 yearAndDayOfAnniversaries.push([anniversariesDays.getFullYear(), theDays[anniversariesDays.getDay()]])
 anniversariesDays.setFullYear(x + 1)
}
// console.log('yearAndDayOfAnniversaries:', yearAndDayOfAnniversaries)

let indexToStart = Number(anniversariesUntilNowDOOM.textContent.match("\\d+").join(""))
// console.log('indexToStart:', indexToStart)

if (indexToStart > 0) {
 for (let x = 0;x < indexToStart;x++) {
  yearAndDayOfAnniversaries.shift()
 }
}

// console.log('yearAndDayOfAnniversaries:', yearAndDayOfAnniversaries)
// console.log('allTheAnniversariesDOOM:', allTheAnniversariesDOOM)
allTheAnniversariesDOOM.children[0].textContent = `Here we have all the anniversaries from ${yearAndDayOfAnniversaries[0][0]} to 2100`





for (const x of yearAndDayOfAnniversaries) {
 let newParagraph = document.createElement("p")

 newParagraph.textContent = `For the year ${x[0]} the anniversary is in the day:${x[1]}`
 allTheAnniversariesDOOM.appendChild(newParagraph)
}

buttonToggleDOOM.addEventListener("click", function () {
 if (allTheAnniversariesDOOM.style.display === "block") {
  allTheAnniversariesDOOM.style.display = "none";
 } else {
  allTheAnniversariesDOOM.style.display = "block";
 }
})


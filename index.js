// import "./styles.css";
const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime()
};
const lastinactiveinminutes = Math.floor((user.lastActivity / 1000 / 60) << 0);
console.log(lastinactiveinminutes);
var latestTimeInactive = lastinactiveinminutes.valueOf();
const timeToHoldTheLastInActiveMinute = lastinactiveinminutes.valueOf();
const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};
// You must use setInterval to complete the task.
   const useractivityfunction = setInterval(
     function () {
        console.log("Function executed");
        latestTimeInactive++;
        if (latestTimeInactive === timeToHoldTheLastInActiveMinute + 2) {
          inactiveFirstStage();
          } else if (latestTimeInactive === timeToHoldTheLastInActiveMinute + 4) {
            inactiveSecondStage();
          } else if (latestTimeInactive === timeToHoldTheLastInActiveMinute + 6) {
            inactiveThirdStage();
        }
      },
      60000
    );
    setInterval(() => {
        setTimeout(useractivityfunction, 0);
    }, 300000);
    function ToActiveUser () {
        clearInterval(useractivityfunction)
    }
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

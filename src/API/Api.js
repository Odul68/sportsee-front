import {
  userData,
  activityData,
  averageSessionsData,
  performanceData,
} from "./ClassModelisation";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

/**
 * Imported data from the mocked file
 * @param {Array}
 * @returns array with all data
 */

const mockedData = {
  USER_MAIN_DATA: USER_MAIN_DATA,
  USER_ACTIVITY: USER_ACTIVITY,
  USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE: USER_PERFORMANCE,
};

/**
 * Allows to start the app with the preferred source, either the mocked data or the API
 * @returns array with all data
 */

const url =
  process.env.REACT_APP_ENV === "dev"
    ? mockedData
    : "http://localhost:3000/user";

/**
 * Functions to retrieve data from data.js and create a new class
 * @param {number} id
 * @returns data in a new class
 */

function getUserMainData(id) {
  const data = url.USER_MAIN_DATA.find((value) => value.id.toString() === id);
  const userMain = new userData(data);
  return userMain;
}

function getUserActivity(id) {
  const data = url.USER_ACTIVITY.find(
    (value) => value.userId.toString() === id
  );
  const userActivity = new activityData(data);
  return userActivity;
}

function getUserAverageSessions(id) {
  const data = url.USER_AVERAGE_SESSIONS.find(
    (value) => value.userId.toString() === id
  );
  const userSessions = new averageSessionsData(data);
  return userSessions;
}
function getUserPerformance(id) {
  const data = url.USER_PERFORMANCE.find(
    (value) => value.userId.toString() === id
  );
  const userPerformance = new performanceData(data);
  return userPerformance;
}

/**
 * Function getData to retrieve data depending on the needed category and the data source
 * @param {number} id
 * @param {string} categorie
 * @returns promise with data
 */

const getData = async (id, categorie) => {
  if (url === "http://localhost:3000/user") {
    let urlPromise = categorie ? url + `/${id}/${categorie}` : url + `/${id}/`;
    const data = await fetch(urlPromise);
    const dataFetch = await data.json();

    switch (categorie) {
      case "activity":
        return new activityData(dataFetch.data);
      case "average-sessions":
        return new averageSessionsData(dataFetch.data);
      case "performance":
        return new performanceData(dataFetch.data);

      default:
        return new userData(dataFetch.data);
    }
  } else {
    switch (categorie) {
      case "activity":
        return getUserActivity(id);
      case "average-sessions":
        return getUserAverageSessions(id);
      case "performance":
        return getUserPerformance(id);

      default:
        return getUserMainData(id);
    }
  }
};

export default getData;

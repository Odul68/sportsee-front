/**
 * Class taking the data from the data.js doc
 * To be used for fetching data in the Api.js and MockData.js
 */

class userData {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = data.todayScore || data.score;
    this.calorie = data.keyData.calorieCount;
    this.proteine = data.keyData.proteinCount;
    this.glucide = data.keyData.carbohydrateCount;
    this.lipide = data.keyData.lipidCount;
  }
}

class activityData {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
    this.day = data.sessions.day;
    this.kilo = data.sessions.kilogram;
    this.calorie = data.sessions.calories;
  }
}

class averageSessionsData {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
    this.day = data.sessions.day;
    this.session = data.sessions.sessionLength;
  }
}

class performanceData {
  constructor(data) {
    this.data = data.data;
    this.kind = data.kind;
  }
}

export { userData, activityData, averageSessionsData, performanceData };

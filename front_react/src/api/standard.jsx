export class Standard{
  constructor(data){
this.userData = data.userData;
this.activityData = data.activityData.sessions;
this.averageData = data.averageData.sessions;
this.performanceData = data.performanceData;
  }

standardfunction(){

  if (this.userData && "score" in this.userData) {
    this.userData.todayScore = this.userData.score;
  setTimeout(() => {
    delete this.userData.score;
  }, 1000);
}

  if (this.activityData) {
    this.activityData.forEach((session) => {
      const day = session.day.slice(-1);
      session.day = day;
    });
  }

  const joursSemaine = ["L", "M", "M", "J", "V", "S", "D"];
  if (this.averageData) {
    this.averageData.forEach((session) => {
      const dayString = joursSemaine[session.day - 1];
      if (dayString) {
        Object.assign(session, { day: dayString });
      }
    });
  }

  if (this.performanceData) {
    this.performanceData.data.forEach((item) => {
      const kindEntry = Object.entries(this.performanceData.kind).find(
        ([key]) => key === String(item.kind)
      );
      if (kindEntry) {
        const [, kindValue] = kindEntry;
        Object.assign(item, { kind: kindValue });
      }
    });
  }


return [this.userData, this.activityData, this.averageData, this.performanceData]

}

}
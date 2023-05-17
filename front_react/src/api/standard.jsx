export const userData = (data) =>{
    if (data && "score" in data) {
        data.todayScore = data.score;
      setTimeout(() => {
        delete data.score;
      }, 1000);
    }
    return data;
}
//
//
//
export const activityDataTerra = (data) => {
  if (data) {
    data.forEach((session) => {
      const day = session.day.slice(-1);
      session.day = day.toString();
    });
  }
  return data;
};
//
//
//

  export const averageDataTerra = (data) => {
    const joursSemaine = ["L", "M", "M", "J", "V", "S", "D"];
    if (data) {
        data.forEach((session) => {
        const dayString = joursSemaine[session.day - 1];
        if (dayString) {
          Object.assign(session, { day: dayString });
        }
      });
    }
    return data;
  };
//
//
//
  export const performanceDataTerra = (data) => {
    if (data) {
        data.data.forEach((item) => {
          const kindEntry = Object.entries(data.kind).find(
            ([key]) => key === String(item.kind)
          );
          if (kindEntry) {
            const [, kindValue] = kindEntry;
            Object.assign(item, { kind: kindValue });
          }
        });
      }
    return data;
  };
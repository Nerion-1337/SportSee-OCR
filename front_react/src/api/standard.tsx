interface UserdData {
        userInfos: { firstName: string };
        todayScore?: number;
        score?: number;
        keyData: {
          calorieCount: number;
          proteinCount: number;
          carbohydrateCount: number;
          lipidCount: number;
  }
}

export const userData = (data: UserdData) =>{
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
interface ActivityData {
  day: string;
  kilogram: number;
  calories: number;
  value: number;
}

export const activityDataTerra = (data: ActivityData[] | null) => {
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
interface AverageData {
    day: number;
    sessionLength: number;
    dayString: string;
    value: number;
  }
  
  export const averageDataTerra = (data: AverageData[] | null) => {
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
  interface PerformanceData {
    data:{
    value: number;
    kind: string;
    }[];
    kind:{
        key: string;
    }
  }
  
  export const performanceDataTerra = (data: PerformanceData | null) => {
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
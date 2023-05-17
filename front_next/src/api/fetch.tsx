import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "@/mock/data";
require("dotenv").config();

const server = process.env.SERVER_PORT;

interface Props {
  id: string;
}

export async function Data_id({ id }: Props) {
  const userId = parseInt(id, 10);

  try {
    const fetchData = async () => {
      const response = await fetch(`${server}/user/${userId}`);
      const jsonData = await response.json();
      return jsonData;
    };
    const data = await fetchData();
    return data;
  } catch {
    //
    //
    const userMainData = Array.isArray(USER_MAIN_DATA) ? USER_MAIN_DATA : [];
    const userData = userMainData.find((item) => item.id === userId);
    if (userData && 'score' in userData) {
      userData.todayScore = userData.score;
      setTimeout(() => {
        delete userData.score;
      }, 1000);
    }
    //
    //
    const activityMainData = Array.isArray(USER_ACTIVITY) ? USER_ACTIVITY : [];
    const activityData = activityMainData.find(
      (item) => item.userId === userId
    );
    if (activityData && Array.isArray(activityData.sessions)) {
      activityData.sessions.forEach((session) => {
        const day = session.day.slice(-1);
        session.day = day.toString();
      });
    }
    //
    //
    const averageMainData = Array.isArray(USER_AVERAGE_SESSIONS)
      ? USER_AVERAGE_SESSIONS
      : [];
    const averageData = averageMainData.find((item) => item.userId === userId);
    const joursSemaine = ["L", "M", "M", "J", "V", "S", "D"];
    if (averageData && Array.isArray(averageData.sessions)) {
      averageData.sessions.forEach((session) => {
        const dayString = joursSemaine[session.day - 1];
        if(dayString){
        Object.assign(session, { day: dayString });  
      }
      });
    }
    //
    //
    const performanceMainData = Array.isArray(USER_PERFORMANCE)
      ? USER_PERFORMANCE: [];
    const performanceData = performanceMainData.find(
      (item) => item.userId === userId
    );
    if (performanceData) {
      performanceData.data.forEach((item) => {
        const kindEntry = Object.entries(performanceData.kind).find(([key]) => Number(key) === item.kind);
        if (kindEntry) {
          const [, kindValue] = kindEntry;
          Object.assign(item, { kind: kindValue });
        }
      });
    }
    //
    //
    const allData = {
      userData,
      activityData,
      averageData,
      performanceData,
    };
    //
    //
  
    return allData;
  }
}

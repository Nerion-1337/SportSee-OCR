import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mock/data";



export async function Data_id( id ) {
  const userId = parseInt(id, 10);
  const server = `http://localhost:3000/user/${userId}`;
//
//  
  try {
//
//    
    const fetchUserData = async () => {
      const response = await fetch(`${server}`);
      const userData = await response.json();
      if (userData) {
        userData.userData = userData.data;
        delete userData.data;
      }
      return userData;
    };

    const fetchActivityData = async () => {
      const response = await fetch(`${server}/activity`);
      const activityData = await response.json();
      if (activityData) {
        activityData.activityData = activityData.data;
        delete activityData.data;
      }
      return activityData;
    };

    const fetchAverageData = async () => {
      const response = await fetch(`${server}/average-sessions`);
      const averageData = await response.json();
      if (averageData) {
        averageData.averageData = averageData.data;
        delete averageData.data;
      }
      return averageData;
    };

    const fetchPerformanceData = async () => {
      const response = await fetch(`${server}/performance`);
      const performanceData = await response.json();
      if (performanceData) {
        performanceData.performanceData = performanceData.data;
        delete performanceData.data;
      }
      return performanceData;
    };

    const allFetch = await Promise.all([
      fetchUserData(),
      fetchActivityData(),
      fetchAverageData(),
      fetchPerformanceData(),
    ]);

    const allData = Object.assign({}, ...allFetch);

    //console.log(allData)
    return allData;
//
//    
  } catch {
//
//
    const userMainData = Array.isArray(USER_MAIN_DATA) ? USER_MAIN_DATA : [];
    const userData = userMainData.find((item) => item.id === userId);
//
//
    const activityMainData = Array.isArray(USER_ACTIVITY) ? USER_ACTIVITY : [];
    const activityData = activityMainData.find(
      (item) => item.userId === userId);
//
//
    const averageMainData = Array.isArray(USER_AVERAGE_SESSIONS)
      ? USER_AVERAGE_SESSIONS
      : [];
    const averageData = averageMainData.find((item) => item.userId === userId);
//
//
    const performanceMainData = Array.isArray(USER_PERFORMANCE)
      ? USER_PERFORMANCE
      : [];
    const performanceData = performanceMainData.find(
      (item) => item.userId === userId
    );
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
    //console.log(allData);
    return allData;
  }
}

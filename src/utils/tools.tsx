export const getTimeDifference =(date:any)=>{
    const currentDate = new Date();
    const previousDate = new Date(date);
    const timeDifference = currentDate.getTime() - previousDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);
    const weeksDifference = Math.floor(daysDifference / 7);
  
    if (secondsDifference < 60) {
      return "Just now";
    } else if (minutesDifference < 60) {
      return `${minutesDifference} ${minutesDifference === 1 ? "minute" : "minutes"} ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} ${hoursDifference === 1 ? "hour" : "hours"} ago`;
    } else if (daysDifference < 7) {
      return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
    } else if (weeksDifference < 4) {
      return `${weeksDifference} ${weeksDifference === 1 ? "week" : "weeks"} ago`;
    } else {
      return `${monthsDifference} ${monthsDifference === 1 ? "month" : "months"} ago`;
    }
  }
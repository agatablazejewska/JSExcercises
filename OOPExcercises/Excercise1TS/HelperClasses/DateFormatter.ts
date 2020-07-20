class DateFormatter {
    formatDate(date : Date) : string {
  
    const fullDate : string = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
  
      const time : string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  
      return `${fullDate} ${time}`;
    }
  }
  
  export { DateFormatter };
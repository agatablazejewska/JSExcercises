class DateHandler {
  todaysDate() {
    return new Date();
  }

  formatDate(date) {
    if (!date instanceof Date) {
      throw Error("Provided value is not a date");
    }

    const fullDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return `${fullDate} ${time}`;
  }
}

export { DateHandler };

class DetailDate {
  constructor(d) {
    this.date = new Date(d);
  }

  getDay() {
    const options = { day: "numeric" };
    const day = new Intl.DateTimeFormat("fr-FR", options).format(this.date);
    return day.padStart(2, "0");
  }

  getMonth() {
    const options = { month: "short" };
    return new Intl.DateTimeFormat("fr-FR", options).format(this.date);
  }

  getYear() {
    const options = { year: "numeric" };
    return new Intl.DateTimeFormat("fr-FR", options).format(this.date);
  }

  getWeek() {
    let onejan = new Date(this.date.getFullYear(), 0, 1);
    let week = Math.ceil(
      ((this.date.getTime() - onejan.getTime()) / 86400000 +
        onejan.getDay() +
        1) /
        7
    );
    return week;
  }
}

export default DetailDate;

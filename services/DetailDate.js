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
}

export default DetailDate;

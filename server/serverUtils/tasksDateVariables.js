class DateVariables {
  today() {
    let dateExpired = new Date();
    dateExpired.setDate(dateExpired.getDate() + 1);
    return {
      $lt: dateExpired.setHours(3, 0, 0, 0),
    };
  }
  inbox() {
    let dateToday = new Date();
    let dateExpired = new Date();
    dateToday.setDate(dateToday.getDate());
    dateExpired.setDate(dateExpired.getDate() + 1);
    return {
      $gt: dateToday.setHours(3, 0, 0, 0),
      $lt: dateExpired.setHours(3, 0, 0, 0),
    };
  }
  upcoming() {
    let dateToday = new Date();
    dateToday.setDate(dateToday.getDate() + 1);
    return {
      $gt: dateToday.setHours(3, 0, 0, 0),
    };
  }
}
module.exports = DateVariables;

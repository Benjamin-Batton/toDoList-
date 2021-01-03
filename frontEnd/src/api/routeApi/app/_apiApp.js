//need add support export to server , format like this export * from """

const apiApp = {
	inboxTasks: require("./inboxTasks.js"),
	todayTasks: require("./todayTasks.js"),
	upcomingTasks: require("./upcomingTasks.js"),
};

module.exports = apiApp;

import { leftMenuIcons } from "../../../icons/icons.js";
const apiApp = {
	inboxTasks: require("./inboxTasks.js"),
	todayTasks: require("./todayTasks.js"),
	upcomingTasks: require("./upcomingTasks.js"),
};
export const apiAppWithIcons = Object.entries(leftMenuIcons).map(
	([key, value]) => {
		return Object.assign(apiApp[`${key}Tasks`], { icon: value });
	}
);

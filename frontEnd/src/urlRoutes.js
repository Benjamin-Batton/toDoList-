import { addNames } from "./utils/addNames.js";

const routesObjects = {
	inbox: {
		path: "/inbox",
	},
	today: {
		path: "/today",
	},
	upcoming: {
		path: "/upcoming",
	},
	error404: {
		path: "/error404",
	},
	error500: {
		path: "/error500",
	},
};
export const routes = addNames(routesObjects);

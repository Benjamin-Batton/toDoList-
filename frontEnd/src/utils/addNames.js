export const addNames = (obj) => {
	Object.entries(obj).forEach(([key, value]) => {
		obj[key].name = `/${key}`;
	});
	return obj;
};

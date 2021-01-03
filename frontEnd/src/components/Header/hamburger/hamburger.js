const menuBtn = document.querySelector(".menu-btn");
let menuIsOpen = false;
const hamburgerChangeStyle = (elem) => {
	const AllClassNames = elem.currentTarget.className.split(" ");
	if (AllClassNames[1]) {
		console.log(elem.currentStyle);
		// elem.currentTarget.className = AllClassNames[0];
		menuIsOpen = false;
	} else {
		// elem.currentTarget.className = `${AllClassNames[0]}${" open"}`;
		menuIsOpen = true;
	}
};
export { hamburgerChangeStyle, menuIsOpen };

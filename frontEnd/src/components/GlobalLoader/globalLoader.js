import { useEffect, useState, useRef } from "react";
import cn from "classnames";

import styles from "./GlobalLoader.scss";

const loaderElement = document.getElementById("topLoader");

export const GlobalLoader = ({ isLoading }) => {
	const ref = useRef();
	useEffect(() => {
		console.log(isLoading);
		if (isLoading) {
			loaderElement.className = styles.loader;

			ref.current = setTimeout(() => {
				loaderElement.className = cn(styles.loader, styles.firstHalf);
			}, 100);
		} else {
			clearTimeout(ref.current);

			loaderElement.className = cn(styles.loader, styles.lastHalf);
		}

		return () => {
			clearTimeout(ref.current);
		};
	});

	return null;
};

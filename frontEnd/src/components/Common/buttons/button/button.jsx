import React from "react";
import cn from "classnames";
import buttonStyle from "./button.module.scss";

export const Button = ({
	text,
	buttonVersion = null,
	onClicked,
	tag,
	disabled = false,
	children,
	type = "button",
	...attrs
}) => {
	const style = cn(
		buttonStyle[buttonVersion] && buttonStyle[buttonVersion],
		// Добавить возможность кастомизации, либо расширения данного компонента
		disabled ? buttonStyle["disabled"] : ""
	);
	//Если ошибка onClicked is not function, то я не передавал onClicked , т.е он undefiend
	const clickAction = (elem) => {
		if (!disabled && onClicked) onClicked(elem);
		elem.preventDefault();
	};

	const Tag = tag === "button" ? "button" : "a";
	return (
		<Tag
			onClick={clickAction}
			type={type}
			disabled={disabled}
			className={style}
			{...attrs}
		>
			{text || children}
		</Tag>
	);
};

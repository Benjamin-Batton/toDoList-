import React, { useState,useEffect } from "react";
import { Button } from "../../Common/buttons/button/button.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
  useRouteMatch,
} from "react-router-dom";
import MainContentStyle from "../body.module.scss";
import gql from "graphql-tag";

import { createRandomKey } from "../../../utils/createRandomKey.js";
import { grapql } from "react-apollo";
import { compose } from "redux";
import { useTasks } from "../../../hooks/useTasks.js";
import Today from "./contentSections/today.jsx";
import Inbox from "./contentSections/inbox.jsx";
import Upcoming from "./contentSections/upcoming.jsx";
import rightPartStyle from "./rightPart.module.scss";
import apiApp from "../../../api/routeApi/app/_apiApp.js";
import { connect } from "react-redux";
import cn from "classnames";
 
const objComponents = {
  today: (props) => <Today {...props} />,
  inbox: (props) => <Inbox {...props} />,
  upcoming: (props) => <Upcoming {...props} />,
};

const RightPart = (props) => {
  const browserUrl = useRouteMatch().url;
  useEffect(()=>{
    console.log("ТЕСТИРУЕМ ПОЛУЧЕНИЕ MENUSTATE RIGHTPART (КОМПОНЕНТ ВМОНТИРОВАН)")
    return ()=>{
      console.log("ТЕСТИРУЕМ ПОЛУЧЕНИЕ MENUSTATE RIGHTPART (КОМПОНЕНТ РАЗМОНТИРОВАН)")
    }
  },[])
  const style = cn(
    rightPartStyle.rightPart,
    props.menuState && rightPartStyle.open
  );
  return (
    <div className={style}>
      <Switch>
        {/* {Object.entries(apiApp).map(([key, value]) => {
				console.log(`${browserUrl}${value.url}`);
				return (
					<Route
						key={createRandomKey()}
						path={`${browserUrl}${value.url}`}
						render={(routeProps) => objComponents[value.name](routeProps)}
						
					/>
				);
			})} */}
        <Route
          key={createRandomKey()}
          path={`/app/inbox`}
          render={(routeProps) => <Inbox {...routeProps} />}
        />
        <Route
          key={createRandomKey()}
          exact
          path={`/app/today`}
          render={(routeProps) => <Today {...routeProps} />}
        />
        <Route
          key={createRandomKey()}
          path={`/app/upcoming`}
          render={(routeProps) => <Upcoming {...routeProps} />}
        />
        {/* make mapping 3 routes from apiApp */}
        {/* добавлять урл при маппинг эти трех роутов т.к
		это мене затратно, а обернуть только Body */}
      </Switch>
    </div>
  );
};

export default compose(withRouter)(RightPart);

// export const RightPart = (props) => {
// 	let [buttonClicked, setButtonClicked] = useState(false);
// 	// let ArrayWithInfo = например массив с записями на сегодня тру ? если тру , выкидываю текстовый стиль с трем 1fr,
// 	// если нет, с двумя;
// 	let arrayOfElem = true;
// 	let checkedStyle = arrayOfElem
// 		? "MainContentContainer"
// 		: // ПОЛУЧИТЬ URL И ИСХОДЯ ИЗ URL РИСОВАТЬ ТАК ИЛИ ЭДАК - вместо массива проверки
// 		  // И ЗАПИСАТЬ В ГЛОБАЛЬНЫЙ СТЕЙТ URL  , чтобы еще рендерить с разными стилями взависимости от url
// 		  "MainContentContainerWithoutToday";
// 	return (
// 		<div className={MainContentStyle[checkedStyle]}>
// 			<FilterTitle>
// 				SOME text эти данные надо брать из урла типа сегодня просрочена
// 				предстоящие и пихать сюда
// 			</FilterTitle>
// 			{/* ПОЛУЧИТЬ URL И ИСХОДЯ ИЗ URL РИСОВАТЬ ТАК ИЛИ ЭДАК*/}
// 			{/* Мапать ТаскЛистКонтейнер И передавать пропсы, типо дата, срок выполнения и пр. */}
// 			{/* <TaskListContainer time={new Date()} /> */}
// 			<TasksListDay createTime={`${new Date()} сегодня`} />
// 			{checkedStyle && (
// 				<TasksListDay createTime={`${new Date()} какое-то вермя назад`} />
// 			)}

// 			{/* если выясняется что в массиве объктов есть сегодняшняя дата, то вернуть  TaskListContainer   и передать проп
//       дату типо сегодня, если нету сегодняшней даты в массиве объектов , то вернуть просто кнопку с + Добавить задачу, которая
//       при клике на неё трансформируется в инпут , для ввода текста и две кнопки добавить и отменить
//          ПОЧИТАЙ ВСЁ ПРИДУМАНО
//          один стор отвечает за массив объектов из  - б.д
//          второй стор - отвечает за отсортированный массив по дням, плюс массив за сегодня добавленных тасков,
//          запрос к базе делаем в mainContentContainer и дальше уже в стор, и те кому нужно подтягивают инфу со стора
//          будем запрос делать здесь т.к он является как таковой оберткой и нигде не переиспользуется и
//          для теста нужны только TaskListContainerы
//          */}
// 			{buttonClicked ? (
// 				<div>
// 					<input type={"text"} />
// 					Инпут и две кнопки добавить и отменить{" "}
// 				</div>
// 			) : (
// 				<Button buttonVersion={"orangeButtonWithIcon"} tag={"button"}>
// 					<div>IconPlus</div>
// 					<div>Добавить задачу</div>
// 				</Button>
// 			)}
// 		</div>
// 	);
// };

// export default compose(withRouter,)(RightPart);

// // let listOfTasks = gql `

// // `

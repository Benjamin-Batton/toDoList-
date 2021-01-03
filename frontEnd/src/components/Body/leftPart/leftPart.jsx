import React, { useState, useEffect } from "react";
import cn from "classnames";
import {
  Route,
  withRouter,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import menuStyle from "./leftMenu.module.scss";
import { routes } from "../../../urlRoutes.js";
import { ButtonWithOrangeCircle } from "../../Buttons/buttonWithOrangeCircle.jsx";
import PlusIcon from "../../../images/plus.svg";
import ApplouseIcon from "../../../images/clapping.svg";
import SixDotsIcon from "../../../images/six-dots.svg";
import { LinkItem } from "../../Link/LinkItem.jsx";
import { createRandomKey } from "../../../utils/createRandomKey.js";
import { compose } from "redux";
import { apiAppWithIcons } from "../../../api/routeApi/app/_apiAppWithIcons.js";

const taskExtentionsList = [
  { key: 10, dpname: "Projects" },
  { key: 11, dpname: "Filters" },
  { key: 12, dpname: "Incoming" },
];

const dropDownMenuVariants = {
  Projects: (props) => <ProjectsList {...props} />,
  Filters: (props) => <FiltersList {...props} />,
  Incoming: (props) => <IncomingList {...props} />,
};

const ProjectsList = ({}) => {
  const projectsArr = ["ProjectWithBigData", "ProjectIncorparated"];

  //This list need to get from redux store or react context or mobx;
  return (
    <>
      <DropDownMenuItem text={"Добро пожаловать"}>
        <ApplouseIcon width={"25px"} height={"25px"} />
      </DropDownMenuItem>

      {projectsArr.map((value, key) => {
        return (
          <DropDownMenuItem key={parseInt(createRandomKey())} text={value} />
        );
      })}
      <ButtonWithOrangeCircle text={"Add project"} />
    </>
  );
};
const FiltersList = ({}) => {
  return (
    <>
      {taskExtentionsList.map((value, key) => {
        return (
          <DropDownMenuItem
            key={parseInt(createRandomKey())}
            text={value.dpname}
          />
        );
      })}
    </>
  );
};
const IncomingList = ({}) => {
  return (
    <>
      {taskExtentionsList.map((value, key) => {
        return (
          <DropDownMenuItem
            key={parseInt(createRandomKey())}
            text={value.dpname}
          />
        );
      })}
    </>
  );
};

const LeftPart = (props) => {
  const style = cn(menuStyle.menu, props.menuState && menuStyle.open);
  useEffect(()=>{
    console.log("ТЕСТИРУЕМ ПОЛУЧЕНИЕ MENUSTATE В LEFTPART (КОМПОНЕНТ ВМОНТИРОВАН)")
    return ()=>{
      console.log("ТЕСТИРУЕМ ПОЛУЧЕНИЕ MENUSTATE LEFTPART (КОМПОНЕНТ РАЗМОНТИРОВАН)")
    }
  },[])
  return (
    <div className={style}>
      <TopFilter />
      <TaskExtentionPanel />
    </div>
  );
};

const TopFilter = (props) => {
  const location = useLocation().pathname.split("/")[2];
  return (
    <div className={menuStyle.topMenu}>
      {apiAppWithIcons.map((filterDatas) => {
        const cname = cn(
          menuStyle.topMenuItem,
          location === filterDatas.name ? menuStyle.active : null
        );
        return (
          <LinkItem
            key={parseInt(createRandomKey())}
            cname={cname}
            url={`/app/${filterDatas.name}`}
          >
            <div>{filterDatas.icon}</div>
            <div>{filterDatas.name}</div>

            <div>{"Кол-во"}</div>
          </LinkItem>
        );
      })}
    </div>
  );
};

const TaskExtentionPanel = (props) => {
  return (
    <div className={menuStyle.taskExtentionPanel}>
      {taskExtentionsList.map((filterData) => {
        return (
          <ExtentionPanelItem
            key={parseInt(createRandomKey())}
            extentionName={filterData.dpname}
          />
        );
      })}
    </div>
  );
};

const ExtentionPanelItem = ({ extentionName, children }) => {
  const [open, setOpen] = useState(false);
  const style = cn(menuStyle.extentionPanelItemWrapper, open && menuStyle.open);
  const DropDownMenuItems = dropDownMenuVariants[extentionName];
  return (
    <div className={style}>
      <div className={menuStyle.extentionPanelItem}>
        <div
          onClick={(elem) => {
            setOpen(!open);
          }}
        >
          <div className={menuStyle.arrowIconContainer}>
            <i className={menuStyle.arrowIcon}></i>
          </div>
          <div>{extentionName}</div>
        </div>
        <div
          onClick={(elem) => {
            elem.preventDefault();
          }}
          className={menuStyle.quickAddItem}
        >
          <PlusIcon height={"15px"} width={"15px"} />
        </div>
      </div>

      <div className={menuStyle.dropDownMenu}>
        <DropDownMenuItems />
      </div>
    </div>
  );
};

const DropDownMenuItem = ({ children, text }) => {
  return (
    <div
      key={parseInt(createRandomKey())}
      className={menuStyle.dropDownMenuItem}
    >
      <div className={menuStyle.dragItem}>
        <SixDotsIcon width={"10px"} height={"10px"} />
      </div>
      <div className={menuStyle.circleItem}></div>
      <div className={menuStyle.dropDownMenuItemText}>{text}</div>
      {children}
    </div>
  );
};

export default compose(withRouter)(LeftPart);

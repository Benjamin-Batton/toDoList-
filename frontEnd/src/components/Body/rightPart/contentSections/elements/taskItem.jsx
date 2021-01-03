import React, { useEffect, useState } from "react";
import { withRouter, useRouteMatch } from "react-router-dom";
import { withTasks } from "../../../../../hoc/withTasksHoc.jsx";
import {TaskEditor} from "./taskEditor.jsx"
import { ButtonWithOrangeBackground } from "../../../../Buttons/buttonWithOrangeBackground.jsx";
import { getAllTasks } from "../../reducer/tasksReducer.js";
import ExpandIcon from "../../../../../images/expand.svg";
import MoreIcon from "../../../../../images/more.svg";
import BrowserIcon from "../../../../../images/web-browser.svg";
import CheckIcon from "../../../../../images/check (2).svg";
import PenIcon from "../../../../../images/pen.svg";
import MessageIcon from "../../../../../images/message.svg";
import { connect } from "react-redux";
import { compose } from "redux";
import taskStyle from "../contentSections.module.scss";
import taskFormStyle from "./elements.module.scss";


export const Task = ({ text, textId, deleteTask, updateTask }) => {
  const [taskFormState, setTaskFormState] = useState(false);
 
  const changeTaskFormState = () => {
    setTaskFormState(!taskFormState);
  };
  const onDeleteTask = (elem) => {
    elem.preventDefault();
    deleteTask({ id: textId });
  };
  if (taskFormState) {
    return (
      <TaskEditorContainer
        textId={textId}
        updateTask={updateTask}
        changeTaskFormState={changeTaskFormState}
        value={text}
      />
    );
  }
  return (
    <div className={taskStyle.taskItem}>
      <div className={taskStyle.taskItemOverlfowAction}>
        <ExpandIcon width={"16px"} height={"16px"} />
      </div>
      <div onClick={onDeleteTask} className={taskStyle.taskItemcircleCheckBox}>
        <CheckIcon width={"10px"} height={"10px"} />
      </div>
      <div className={taskStyle.taskItemContent}>
        <p>{text}</p>
        <div className={taskStyle.taskItemInfoTags}>
          <div className={taskStyle.taskItemDate}>Dates</div>
          <span className={taskStyle.taskItemTypeProject}>inbox</span>
        </div>
      </div>
      <div className={taskStyle.taskItemEditActions}>
        <div className={taskStyle.taskItemIcon}>
          <PenIcon
            onClick={changeTaskFormState}
            width={"20px"}
            height={"20px"}
          />
        </div>
        <div className={taskStyle.taskItemIcon}>
          <BrowserIcon width={"20px"} height={"20px"} />
        </div>
        <div className={taskStyle.taskItemIcon}>
          <MessageIcon width={"20px"} height={"20px"} />
        </div>
        <div className={taskStyle.taskItemIcon}>
          <MoreIcon width={"20px"} height={"20px"} />
        </div>
      </div>
    </div>
  );
};

const TaskEditorContainer = ({textId,updateTask,changeTaskFormState,value}) => {
  return (
    <div className={taskFormStyle.taskEditorContainer}>
      <TaskEditor textId={textId} updateTask={updateTask} changeTaskFormState={changeTaskFormState} value={value}/>
      <ButtonWithOrangeBackground>Сохранить</ButtonWithOrangeBackground>
    </div>
  );
};

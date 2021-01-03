import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../reducer/tasksReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import style from "../contentSections.module.scss";

const AddTask = (props) => {
  const [formState, setFormState] = useState(false);

  const changeForm = (elem) => {
    setFormState(!formState);
  };
  return (
    <div className={style.addTask}>
      {formState ? (
        <AddTaskForm onChangeForm={changeForm} createTask={props.createTask} />
      ) : (
        <div onClick={changeForm}>Добавить задачу</div>
      )}
    </div>
  );
};

const AddTaskForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const AddTaskHandler = (elem) => {
    props.createTask({ body: { task: inputValue } });
    props.onChangeForm(elem);
  };
  const inputHandler = (elem) => {
    elem.preventDefault();
    setInputValue(elem.target.value);
  };

  return (
    <div className={style.createTask}>
      <input onChange={inputHandler} value={inputValue} />
      <div onClick={AddTaskHandler}>Добавить</div>
      <div onClick={(elem) => props.onChangeForm(elem)}>Отмена</div>
    </div>
  );
};

export default connect(null, { getAllTasks })(AddTask);

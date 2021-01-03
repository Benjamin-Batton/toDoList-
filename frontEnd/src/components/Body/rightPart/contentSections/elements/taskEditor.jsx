import React from "react";
import taskEditorStyle from "../contentSections.module.scss";
import Button from "@material-ui/core/Button";
import { ButtonSvg } from "./buttonSvg.jsx";
import AlarmClock from "../../../../../images/alarm-clock.svg";
import Flag from "../../../../../images/flag.svg";
import Label from "../../../../../images/price-tag.svg";
//заменить кнопки material ui на кнопки такие же, но моего производства

export const TaskEditor = ({
  value,
  textId,
  dateOfTaskCreated = "date of created",
  updateTask,
  changeTaskFormState,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [focusState, setFocusState] = useState(true);
  const onSaveTask = (elem) => {
    elem.preventDefault();
    changeTaskFormState();
    updateTask({ body: { task: inputValue }, id: textId });
  };
  const onCancel = (elem) => {
    elem.preventDefault();
    changeTaskFormState();
  };
  const onFocus = (elem) => {
    elem.preventDefault();
    setFocusState(!focusState);
  };
  return (
    <div onFocus={onFocus} className={taskEditorStyle.taskEditor}>
      <input
        className={taskEditorStyle.taskEditorInput}
        type={"text"}
        value={inputValue}
        onChange={(elem) => {
          setInputValue(elem.target.value);
        }}
      />
      <div className={taskEditorStyle.taskEditorExtraFields}>
        <div className={taskEditorStyle.leftPartExtraFields}>
          <Button variant="outlined" color="primary">
            {dateOfTaskCreated}
          </Button>
          <Button variant="outlined" color="secondary">
            #Входящие
          </Button>
        </div>
        <div className={taskEditorStyle.rightPartExtraFields}>
          <ButtonSvg>
            <AlarmClock width={"20px"} height={"20px"} />
          </ButtonSvg>
          <ButtonSvg>
            <Flag width={"20px"} height={"20px"} />
          </ButtonSvg>
          <ButtonSvg>
            <Label width={"20px"} height={"20px"} />
          </ButtonSvg>
        </div>
      </div>
    </div>
  );
};

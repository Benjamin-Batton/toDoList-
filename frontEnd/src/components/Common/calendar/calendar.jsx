import React,{useState} from 'react';
import calendarStyle from './calendar.module.scss';
import {compose} from 'redux';
import {dateFormatter} from '../../../utils/dateFormatter.js';

 export const Calendar = (props) => {
    return (
          <div className={calendarStyle.calendar}>
            <div>
            {dateFormatter(new Date().getDate(),new Date().getMonth())}
            </div>
            <div onClick={props.onClose}>
            Иконка  - Закрыть
            </div>
            <div>
            Иконка  - Сегодня
            </div>
            <div>
            Иконка  - Завтра
            </div>
            <div>
            Иконка - Следующая неделя
            </div>
            <div>
            Иконка - Рекомендовано   
            </div>
            <div>
            Иконка - Без срока   
            </div>
            <div>
           САМ КАЛЕНДАРЬ  
            </div>
            <div>
          Добавить время
            </div>
          </div>
    )
};


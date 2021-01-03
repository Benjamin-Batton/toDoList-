import React from 'react';
import {Button} from '../button/button.jsx';
import buttonDateStyle from './buttonDate.module.scss';
import {compose} from 'redux';

 export const ButtonDate = (props) => {
    return (
          <div className={buttonDateStyle.buttonDate}>
            <Button onClicked={props.onClicked}  buttonText={props.buttonText}/>
          </div>
    )
};


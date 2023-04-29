import React from 'react';
import {SwitchControllerProps, SwitchType} from './Switch.models';
import SwitchViewer from "./Switch.viewer";
import {useTypedSelector} from "../../../hooks";
import {RootState} from "../../../redux";
import {useDispatch} from "react-redux";
import {changeLanguage, changeMode} from "../../../config/config.slice";

const SwitchController:React.FC<SwitchControllerProps> = ({type}) => {
    const { mode, language } = useTypedSelector((state: RootState) => state.config);
    const dispatch = useDispatch()
    const valueByType = (type:SwitchType) => {
        switch (type) {
            case "language":
                return language==='es';
            case "mode":
                return mode==='dark';
            default:
                return false;
        }
    }

    const onchangeByType = (type:SwitchType) => {
        switch (type) {
            case "language":
                dispatch(changeLanguage());
                break;
            case "mode":
                dispatch(changeMode());
                break;
        }
    }

   return (
        <SwitchViewer type={type} value={valueByType(type)} onChange={()=>onchangeByType(type)}/>
    );
};

export default SwitchController;
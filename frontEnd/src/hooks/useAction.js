import { bindActionCreators } from "redux";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";


export const useAction = (action, data, deps = null) => {
  const dispatch = useDispatch();
  const actionCreator = useCallback(()=>{
    dispatch(action({...data}))
  },deps? [deps] : [dispatch])
  return actionCreator;
 
};





import React , {useReducer,useEffect ,useContext,useCallback } from 'react';

import TasksManger from "./taskmanagerWrapper.jsx";
import { CurrentDaysContexte } from "./currentDays.jsx";
const reducerFun = (eventState, event) => {
  return {  ...eventState  ,[event.name] : event.value };
}


 function Events({ setCurrTaskManager}) {
   const {arrayofTask,setArrayofTask}=useContext(CurrentDaysContexte)

  const [eventState,dispatcher] = useReducer(reducerFun,{})
  const formInfo = (e)=>{
    e.preventDefault() ;
    
    if (eventState.eventTitle && eventState.eventHour) {
     
      setArrayofTask({
        ...arrayofTask,
        ["eventState"]: {
          ...arrayofTask["eventState"],
          [eventState.eventHour]: eventState,
        },
      });
     }
  };
  const updatzmar = useCallback ((theobj)=>{
    console.log('theobj');
    console.log(theobj);
    
    setCurrTaskManager(<TasksManger arrayofTask={  theobj }  setArrayofTask={setArrayofTask}  setCurrTaskManager={setCurrTaskManager}   updatzmar={updatzmar} />)
   },[]);

  useEffect(()=>{
    // console.log(tasks);
    // console.log(arrayofTask); 
    setCurrTaskManager(<TasksManger arrayofTask={arrayofTask}  setArrayofTask={setArrayofTask}  setCurrTaskManager={setCurrTaskManager}   updatzmar={updatzmar} />)},[arrayofTask,updatzmar])

  return (
    <form
      onSubmit={(e) => {
        formInfo(e);
      }}
      className="w-full h-60 flex flex-col box-border mt-3 text-start bg-white justify-between"
      key={'events'}
    >
      <label class="assignements ">
        <input
          className={"assignements__input"}
          name={"eventTitle"}
          placeholder={"Events"}
          onChange={(event) => {
            dispatcher({ name: event.target.name, value: event.target.value });
          }}
        />
        <span className={"assignements__label"}>Title</span>
      </label>

      <label class="assignements ">
        <select
          className={"assignements__input"}
          type={"text"}
          name={"eventHour"}
          placeholder={"Events"}
          onChange={(event) => {
            dispatcher({ name: event.target.name, value: event.target.value });
          }}
        >
          <optgroup>
          {[...Array(24)].map((i, key) => (
              <option value={key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`}>
    
                {key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`} 
              </option> 
            ))}
          </optgroup>
        </select>
        <span className={"assignements__label"}>Time</span>
      </label>
      <label class="assignements">
        <textarea name="" className="assignements__input"></textarea>
        <span className={"assignements__label"}>Description</span>
      </label>
    </form>
  );
}

export default Events ;
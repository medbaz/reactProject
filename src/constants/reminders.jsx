import React , {useReducer,useEffect ,useCallback,useContext} from 'react';
// import { useEffect } from 'react';
import TasksManger from "./taskmanagerWrapper.jsx";
import { CurrentDaysContexte } from "./currentDays.jsx";

const reducerFun = (reminderState, event) => {
  return {  ...reminderState  ,[event.name] : event.value };
}

 function Reminders({ setCurrTaskManager}) {
  const {arrayofTask,setArrayofTask}=useContext(CurrentDaysContexte)

  const [reminderState,dispatcher] = useReducer(reducerFun,{})

  const formInfo = (e)=>{
    e.preventDefault() ;
    if (reminderState.reminderTitle && reminderState.reminderHour ) {
      setArrayofTask(   {...arrayofTask,['reminderState']:{...arrayofTask['reminderState'],  [reminderState.reminderHour]:reminderState }} )
    
  }
  };

  const updatzmar = useCallback ((theobj)=>{
    console.log('theobj');
    console.log(theobj);
    
    setCurrTaskManager(<TasksManger arrayofTask={  theobj }  setArrayofTask={setArrayofTask}  setCurrTaskManager={setCurrTaskManager} updatzmar={updatzmar} />)
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
      className="w-full h-60    flex flex-col box-border mt-3 text-start bg-white justify-between"
      key={'reminders'}
    >
      <label class="assignements ">
        <input
          className={"assignements__input"}
          type={"text"}
          name={"reminderTitle"}
          placeholder={"Reminder"}
          onChange={(event) => {
            dispatcher(
              {name : event.target.name ,
              value : event.target.value }
              )
          }}
        />
        <span className={"assignements__label"}>Title</span>
      </label>

      <label class="assignements ">
        <select
          className={"assignements__input"}
          type={"text"}
          name={"reminderHour"}
          onChange={(event) => {
            dispatcher(
              {name : event.target.name ,
              value : event.target.value }
              )
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
        <textarea 
        name={"reminderDescription"}
          onChange={(event) => {
            dispatcher(
              {name : event.target.name ,
              value : event.target.value }
              )
          }} className="assignements__input"></textarea>
        <span className={"assignements__label"}>Description</span>
      </label>
    </form>
  );
}

export default Reminders ;
 
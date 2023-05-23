import React , {useReducer,useEffect,useState ,useCallback ,useContext} from 'react';
import { CurrentDaysContexte } from './currentDays.jsx';
import TasksManger from "./taskmanagerWrapper.jsx";

const reducerFun = (tasksState, event) => { 
  return { ...tasksState,  [event.name] : event.value
  };
}

 function Tasks({setCurrTaskManager ,themonth,theyear ,matchmonth}) {
 
const {arrayofTask,setArrayofTask}=useContext(CurrentDaysContexte)

 
  const [tasksState,dispatcher] = useReducer(reducerFun,{})

  const formInfo = (e )=>{
    e.preventDefault() ;
     if (tasksState.tasksTitle && tasksState.tasksHour  ) {
      
      setArrayofTask(   {...arrayofTask,['tasksState']:{...arrayofTask['tasksState'], [tasksState.tasksHour]:tasksState }})
console.log(arrayofTask);
     }

      //  setCurrTaskManager(<TasksManger taskManagerState={arrayofTask} />)
    }
 
   const updatzmar = useCallback ((theobj)=>{
    console.log('theobj');
    console.log(theobj);
    
    setCurrTaskManager(<TasksManger arrayofTask={  theobj }  setArrayofTask={setArrayofTask}  setCurrTaskManager={setCurrTaskManager} updatzmar={updatzmar} />)
   },[]);
      
 
  // 

  useEffect(()=>{
    console.log('it is updated');
    // console.log(arrayofTask); 
    setCurrTaskManager(<TasksManger arrayofTask={arrayofTask}  setArrayofTask={setArrayofTask}  setCurrTaskManager={setCurrTaskManager}   updatzmar={updatzmar} />)},[arrayofTask,updatzmar])


  return (
    <form
      onSubmit={(e) => {
        formInfo(e);
      }}
      className="w-full h-60 flex flex-col box-border mt-3 text-start  justify-between"
      key={'tasks'}
    >
      <label class="assignements ">
        <input
          className={"assignements__input"}
          type={"text"}
          name={"tasksTitle"}
          placeholder={" Tasks"}
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
          name={"tasksHour"}
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
        name={"tasksDescription"}
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

export default Tasks ;
 
import React, { useRef, useState ,useEffect,useContext,createContext} from "react";
import Tasks from "./tasks.jsx";
import Events from "./events.jsx";
import Reminders from "./reminders.jsx";
import {CalendarContexte} from "../components/Calendar.jsx";
import TasksManger from "./taskmanagerWrapper.jsx";
 


export const CurrentDaysContexte = createContext();

export default function CurrentDays({index}) {
 
  const { 
    clickedElement,
    setCurrTaskManager,
    matchid,
    matchmonth,
    themonth ,theyear , matchyear 
  } = useContext(CalendarContexte);
 

  const [arrayofTask,setArrayofTask]=useState({});
  const [transiEffect,setTransiEffect] = useState(false);   
  const [activEle, setActivEle] = useState("tasks");
 
  const activeboxRef = useRef(null);


  const grapId = (e) => {
    switch (e.target.id) {
      case "tasks":
         setActivEle("tasks");
        break;
      case "reminders":
         setActivEle("reminders");
        break;
      case "events":
        setActivEle("events");
        break;
      default:
         break;
    }
  };


  useEffect(()=>{
   
 
    setTransiEffect(false)
    if (matchid) {
      const myEffect = setTimeout(() => {
      setTransiEffect(true)
    }, 100);
    
        // document.getElementsByClassName('dayAssignements').style.transition = 'opacity 2s '
     return () => { clearTimeout(myEffect)
        
    }
     
    }

    
  } ,[matchid])
   
 
  return (
   <div
   
      className={` " daycount   flex -pt-20 justify-center  cursor-pointer justify-self-center  "  ${
        activeboxRef.current &&
        activeboxRef.current.id == matchid &&
        matchmonth == themonth && matchyear == theyear  && 
        " bg-slate-800 w-6    rounded-sm"
      }  `}
      ref={activeboxRef} 
      

      id={index}
    >
      
    {index + 1}

      {((activeboxRef.current &&
          activeboxRef.current.contains(clickedElement))  ) &&  (
        <div className={`"dayAssignementS opacity-25 absolute z-50 top-20 left-60 shadow-[rgba(0,_0,_0,_0.54)_0px_3px_8px] cursor-default bg-white rounded-md p-4 w-60 h-80 " ${ transiEffect && "transition-opacity duration-100 opacity-100 ease-out" } `}>
          <div className="dayAssignementsHeader z-[500] flex gap-2 w-full h-8   items-center cursor-pointer">

            <div
            className={` ${ activEle == "tasks" && " bg-[#3381f5] p-2  rounded-sm "}`}
              id="tasks"
              onClick={(e) => {
                grapId(e);
               }}
            > Tasks
            </div>

            <div
             className={` ${activEle == "events" &&  " bg-[#f5ce31] p-2  rounded-sm "}`}
              id="events"
              onClick={(e) => {
                grapId(e);
               }}
            >
              Events
            </div>

            <div
             className={` ${activEle == "reminders" && " bg-[#2ff495] p-2  rounded-sm "} `}
              id="reminders"
              onClick={(e) => {
                grapId(e);
               }}
            >
              Reminders
            </div>
          </div>
          
          <CurrentDaysContexte.Provider value={{setArrayofTask,arrayofTask}}>
          {activEle == "tasks" ? (
            <Tasks 
              setCurrTaskManager={setCurrTaskManager} 
              themonth={themonth} 
              theyear={theyear} 
              matchmonth={matchmonth}
            />
          ) : activEle == "reminders" ? (
            <Reminders 
              setCurrTaskManager={setCurrTaskManager}
            />
          ) : activEle == "events" ? (
            <Events 
              setCurrTaskManager={setCurrTaskManager}
            />
          ) : (
            <div>skdjfn</div>
          )}
          </CurrentDaysContexte.Provider>
        </div>
      )}
    </div>
  );
}

import React ,{useState,useRef} from "react";
import { createRef } from "react";
import { useEffect , useCallback ,forceU} from "react";
import {MdDelete}  from "react-icons/md";


function TasksManger( {arrayofTask,setArrayofTask  ,updatzmar
}) {
   
  const [pressed, setPressed] = useState(false);
  const [currId,setCurrId]= useState(null);
  const [arrayValue,setnewArrayValue] = useState({})

  const position = useRef({ x: 0, y: 0 });

const [theNewArray,updateNewArray] =useState(false);
  let taskRef = useRef([]);
  taskRef.current = useCallback ([...Array(69)].map((i, key) => (
    taskRef.current[key] =  createRef()
  )), [])

 
  const tableTop = useRef(null);


  const deleter = useRef(false);
  const deleterPosition = useRef(null);
  const deletLeft = useCallback(() => {
  return  deleterPosition.current.getBoundingClientRect().left;
  }, []);

 
  const deletTop = useCallback(() => {
  return  deleterPosition.current.getBoundingClientRect().top;
  }, []);
  const deletHeight = useCallback(() => {
  return  deleterPosition.current.clientHeight ;
  }, []);
  const deletWidth = useCallback(() => {
  return  deleterPosition.current.clientWidth ;
  }, []);
  

  
    
 
  const handleMouseDawn = (e) => {
    e.preventDefault();
    setCurrId(e.target.id)
    setPressed(true);
    e.target.style.userSelect = "none"; 
    
      e.stopPropagation();
      
 return ;
       
  };

  const handleMouseDawnreminder = (e) => {
    e.preventDefault();

    setPressed(true);
    setCurrId(e.target.id)
    e.target.style.userSelect = "none"; 

    
      e.stopPropagation();
      
 return ;
       
  };


  const handleMouseDawnevent  = (e) => {
    e.preventDefault();

    setPressed(true);
    setCurrId(e.target.id)
    e.target.style.userSelect = "none"; 
    
      e.stopPropagation();
      
 return ;
       
  };





  const handleMouseMove = (e) => {
   
    e.preventDefault();
  

if (!pressed) {
 return ; 
}
//  console.log(taskRef.current[currId]);
       
   e.stopPropagation();
           if (taskRef?.current[currId]?.current) {
         
            // console.log('khasha tharek');
    
        // let distanceTop 
          
       taskRef.current[currId].current.style.transform = `translate(${position.current.x}px,${position.current.y}px)`;
      // taskRef.current[currId].current.style.position = "absolute";
      // taskRef.current[currId].current.style.top = `${ taskRef.current[currId].current.clientHeight }px`;
     
  //  console.log(taskRef.current[currId].current.getBoundingClientRect().top);
     console.log(tableTop.current.scrollHeight);
      
       position.current.x +=  e.movementX;
       position.current.y += e.movementY;
    
           }
    
    const myInterval = setTimeout(() => {
      const taskLeft  = taskRef?.current[currId]?.current?.getBoundingClientRect().left; 
      const  taskTop = taskRef?.current[currId]?.current?.getBoundingClientRect().top;
     
      // console.log( Math.abs(deletLeft() - taskLeft));
      // console.log(deletWidth() ); 
      if (
        Math.abs(deletTop() - taskTop) < deletHeight() &&
        Math.abs(deletLeft() - taskLeft) < deletWidth()  
      ) {

       deleter.current = true ;
        //  console.log("delet it ");
        
        
      }else {
        deleter.current = false ;
        
      //  return console.log("keep it ");
       
              }
    }, 700);

    return ()=> {clearTimeout(myInterval)};
  };




  const handleMouseUp = (e) => {
    e.preventDefault();
  //   const lazyPress = setTimeout(() => {
  //     setPressed(false);
  //  }, 100);
  setPressed(false);
   
    if (taskRef.current[currId]) {
      taskRef.current[currId].current.style.position = "relative";
      taskRef.current[currId].current.style.transform = `translate(0px,0px)`;
      position.current.x = 0;
      position.current.y = 0;
    }

    if (deleter.current == true) {
      const tasksToBeRemoved = Object.assign({}, arrayofTask);

      if (
        tasksToBeRemoved.tasksState ||
        tasksToBeRemoved.eventState ||
        tasksToBeRemoved.reminderState
      ) {
         let therrr ;
 
        if (tasksToBeRemoved.tasksState) {
         const newFormedTasks = Object.keys(tasksToBeRemoved.tasksState)
            .filter((task) => {
              return (
                tasksToBeRemoved.tasksState[task].tasksTitle !=
                taskRef?.current[currId].current.firstElementChild.innerText
              );
            })
            .reduce((arrayObj, key, i) => {
              return Object.assign(arrayObj, {
                [key]: arrayofTask?.tasksState[key],
              });
            }, {});
             therrr = Object.assign(tasksToBeRemoved, {
              ["tasksState"]: newFormedTasks})
        }

        if (tasksToBeRemoved.reminderState) {
          const newFormedReminders = Object.keys(tasksToBeRemoved.reminderState)
            .filter((task) => {
              return (
                tasksToBeRemoved?.reminderState[task].reminderTitle !=
                taskRef?.current[currId].current.firstElementChild.innerText
              );
            })
            .reduce((arrayObj, key, i) => {
              return Object.assign(arrayObj, {
                [key]: arrayofTask?.reminderState[key],
              });
            }, {});
             therrr = Object.assign(tasksToBeRemoved, {["reminderState"]: newFormedReminders})
        }

        if (tasksToBeRemoved.eventState) {
          const newFormedEvents = Object.keys(tasksToBeRemoved.eventState)
            .filter((task) => {
              return (
                tasksToBeRemoved?.eventState[task].eventTitle !=
                taskRef?.current[currId].current.firstElementChild.innerText
              );
            })
            .reduce((arrayObj, key, i) => {
              return Object.assign(arrayObj, {
                [key]: arrayofTask?.eventState[key],
              });
            }, {});
            therrr = Object.assign(tasksToBeRemoved,{ ["eventState"]: newFormedEvents }  );
        }

        // const therrr = Object.assign(tasksToBeRemoved, {
        //   ["tasksState"]: newFormedTasks,
        //   ["reminderState"]: newFormedReminders,
        //   ["eventState"]: newFormedEvents,
        // });

        console.log("therrr");
        console.log(therrr);
        setnewArrayValue({ ...therrr });
        updateNewArray(!theNewArray);
        updatzmar({ ...therrr });
        setArrayofTask(therrr);
      }
    } 
    // clearTimeout(lazyPress());
   
   
    return  e.stopPropagation();

   
  };



  useEffect(()=>{
 if (pressed) { 
  document.onmousemove =  handleMouseMove ;
  document.onmouseup =  handleMouseUp ;
 }else{
  document.onmousemove = null;
  document.onmouseup = null;
 }
//  console.log('after useEffect');
//  console.log( arrayofTask );
 
  } ,[pressed])













  return (
    <div className="theparentoftasks relative  w-full  h-90 overflow-hiddenml-4">
      
      <div
       
        className="tasksMangerWrapper w-full h-full  "
      > 
      
<div className="tasksWrapper  h-80 rounded-lg  overflow-scroll  " >
{ pressed && 
        <div
        ref={deleterPosition}
        className={`"m-auto absolute left-1/4 -translate-y-5 w-40 h-12 flex justify-center place-items-center rounded-xl text-white bg-[#f3401c] "`}
        
       
      >
      < MdDelete className=" text-2xl" />  <span> delete </span>
      </div>
 }
        <table  ref={tableTop} className="tasksManger   w-full h-max ">
          <tbody className="rounded-lg bg-slate-100 ">
            {[...Array(24)].map((i, key) => (
              <tr className=" border-b-2 h-20" id="kjhv">
                <th
                  className={`    " border-r-2  align-text-top p-2 w-20 h-20 " }  `}
                >
                  {key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`}
                </th>
                <td className="flex   " id="kjhv">




{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}


                  {arrayofTask?.tasksState ? (
                    <div className="theTask   ">
                      {" "}
                      {arrayofTask?.tasksState[key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`] ? (
                        <div
                        key={ key }
                          onMouseDown={(e) => {
                            handleMouseDawn(e);
                          }}
                          ref={ taskRef?.current[key]  }
                          className="managerText  w-28 text-white h-[70px] font-normal ml-2 p-2 rounded-md flex-col    bg-[#478ef8]"
                        >
                         
                          <div id={ key } key={ key } className="tasksText text-ellipsis overflow-hidden h-9  ">
                            {
                              arrayofTask?.tasksState[key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`]?.tasksTitle
                            }
                          </div>{" "}
                          <div className=" text-center text-[#f6f6f6] ">
                            task
                          </div>{" "}
                        </div>
                      ) : (
                        <div></div>
                      )}{" "}
                    </div>
                  ) : (
                    <div></div>
                  )}




{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}


                  {arrayofTask?.reminderState ? (
                    <div>
                      {" "}
                      {arrayofTask?.reminderState[key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`] ? (
                        <div
                        key={ key +24 }
                          onMouseDown={(e) => {
                            handleMouseDawnreminder(e);
                          }}
                          ref={ taskRef?.current[key + 24]  }
                           className="managerText w-28 text-white h-[70px] font-normal ml-2 p-2 rounded-md flex-col    bg-[#3cf59b]">
                          {" "}
                          <div id={key +24} className="tasksText text-ellipsis overflow-hidden h-9  ">
                            {
                              arrayofTask?.reminderState[key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`]?.reminderTitle
                            }
                          </div>{" "}
                          <div className=" text-center text-[#f6f6f6] ">
                            reminder
                          </div>{" "}
                        </div>
                      ) : (
                        <div></div>
                      )}{" "}
                    </div>
                  ) : (
                    <div></div>
                  )}

                  


{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}
{/* taskstate taskstate taskstate taskstate taskstate*/}


                  {arrayofTask?.eventState ? (
                    <div>
                      {" "}
                      {arrayofTask?.eventState[key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`] ? (
                        <div
                        key={ key + 46 }
                        onMouseDown={(e) => {
                          handleMouseDawnevent(e);
                        }} 
                        ref={ taskRef?.current[key + 46]  }
                        className="managerText w-28 text-white h-[70px] font-normal ml-2 p-2 rounded-md flex-col    bg-[#f8d547]">
                          {" "}
                          <div
                          id={key + 46} 
                          className="tasksText text-ellipsis overflow-hidden h-9  ">
                            {
                              arrayofTask?.eventState[key + 1 <= 12 ? `${key + 1} AM` : `${key - 11} PM`]?.eventTitle
                            }
                          </div>{" "}
                          <div className=" text-center text-[#f6f6f6] ">
                            event
                          </div>{" "}
                        </div>
                      ) : (
                        <div></div>
                      )}{" "}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default TasksManger;







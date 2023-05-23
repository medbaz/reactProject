import React from "react";
console.log('sdsd');


function TasksData({arrayofTask , handleMouseDawn,key,taskRef}) {
    return ( arrayofTask?.tasksState ? (
        <div className="theTask z-[9000] ">
          {" "}
          {arrayofTask?.tasksState[
            key + 1 <= 12 ? key + 1 + " AM" : key - 11 + " PM"
          ] ? (
            <div
              onMouseDown={(e) => {
                handleMouseDawn(e);
              }}
              ref={(node)=> {taskRef = node}}
              className="managerText  w-28 z-[9000] text-white h-[70px] font-normal ml-2 p-2 rounded-md flex-col    bg-[#478ef8]"
            >
              {" "}
              <div id={ key + 1 <= 12
                      ? key + 1 + " AM"
                      : key - 11 + " PM"} className="tasksText text-ellipsis overflow-hidden h-9  ">
                {
                  arrayofTask?.tasksState[
                    key + 1 <= 12
                      ? key + 1 + " AM"
                      : key - 11 + " PM"
                  ]?.tasksTitle
                }
              </div>{" "}
              <div className=" text-center text-[#f6f6f6] ">
                task
              </div>{" "}
            </div>
          ) : (
            <div></div>
          )} 
        </div>
      ) : (
        <div></div>
      ) );
}

export default TasksData ;
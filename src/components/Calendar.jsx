import React, { useState, useEffect , useReducer} from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import TasksManger from "../constants/taskmanagerWrapper.jsx";
import  CurrentDays   from "../constants/currentDays.jsx";
import { createContext } from "react";

 export  const CalendarContexte = createContext();



function Calendar( ) {

  const [theday, setDay] = useState(1);
  const [themonth, setMonth] = useState(10);
  const [theyear, setYear] = useState(2022);
  const [currTaskManager,setCurrTaskManager]=useState(<TasksManger />);
  const [clickedElement, setClickedElement] = useState( );


const [matchid,setMatchid]=useState();
const [matchmonth,setMatchmonth]=useState();
const [matchyear , setMatchyear ] = useState();
 
  const months = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "May" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" } 
  ];
  
    const date = new Date(theyear, themonth, 0);
    const numberOfDays = date.getDate();
    const [theCurrentDays,setTheCurrentDays] = useState(()=>[...Array(numberOfDays)].map((i, index) => (
        <CurrentDays key={theyear * themonth + index}   index={index} />
      ))) ;

    const predate = new Date(theyear, themonth - 1, 0);
    const numberOfpreDays = predate.getDate();

    const nexdate = new Date(theyear, themonth + 1, 0);
    const numberOfnexDays = nexdate.getDate();

 
  const stingdat =
    themonth - 1 <= 12 && themonth - 1 >= 1
      ? `'${theyear} / ${themonth - 1}  / 1 '`
      : `' ${theyear - 1} / ${12}  / 1 '`;


  const emtyDates = new Date(stingdat);
  const numberOfemtyDates = emtyDates.getDay();


  const onclickoutside = (e) => { return setClickedElement(e.target) };
   
 

  // const [reducerState , setReducerState] = useState([[themonth] , [[...Array(numberOfDays)].map((i, index) => (
  //   <CurrentDays   index={index} />
  // ))]]}) 






  useEffect(() => {
    document.body.addEventListener("click", onclickoutside);
    return document.body.addEventListener("click", onclickoutside);
  }, []);



  return (
    <section className="bg-white w-11/12  h-3/4 m-auto mt-9  box-border  rounded-xl p-4">
      <article className="  w-full flex flex-col  box-border h-full">
        <h1 className={"title"}> Calendar </h1>
        <div className="wrapper w-full h-full flex gap-10 ">
          <div className="calendar w-[260px] h-[310px]	  rounded-md mt-8  ">
          <div className="calendarHeader  text-base flex justify-between items-center pl-3 pr-4 p-2  ">
              {months
                .filter((month) => {
                  return month.id == themonth;
                })
                .map((monthObject) => (
                  <h1 className="fullYear" id={`${monthObject.month}`}>
                    {`${monthObject.month} ${theyear}`}
                  </h1>
                ))}
              <div className="flex z-5 justify-between cursor-pointer	 w-10">
                <BsArrowLeftCircle
                  onClick={(e) => {
                    const currentMonth = themonth - 1;
                    if (currentMonth >= 1) {
                      setMonth(currentMonth);
                      setTheCurrentDays([...Array(numberOfDays)].map((i, index) => (
                        <CurrentDays key={theyear  * currentMonth  + index}  index={index} />
                      )))
 
                      console.log(theyear   * currentMonth )
                    } else {
                      setMonth(12);
                      setYear(theyear - 1);
                      setTheCurrentDays([...Array(numberOfDays)].map((i, index) => (
                        <CurrentDays key={(theyear - 1) * 12  + index}  index={index} />
                      )))
                      console.log((theyear - 1)  * 12 )
                    }
                  }}
                />
                <BsArrowRightCircle
                  onClick={(e) => {
                    const currentMonth = themonth + 1;
                    if (currentMonth <= 12) {
                      setMonth(currentMonth);
                      setTheCurrentDays([...Array(numberOfDays)].map((i, index) => (
                        <CurrentDays key={theyear  * currentMonth + index}  index={index} />
                      )))
                      console.log(theyear  * currentMonth )
                    } else {
                      setMonth(1);
                      setYear(theyear + 1);
                      setTheCurrentDays([...Array(numberOfDays)].map((i, index) => (
                        <CurrentDays key={theyear + 1  + index}  index={index} />
                      )))
                      console.log(theyear + 1  )
                    }
                  }}
                />
              </div>
            </div>

            <div className=" relative   text-sm  w-[255px] ">
              <div className="absolute flex top-3 font-bold  bg-white w-full justify-around  ">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div
                
               
                onClick={(e) => {
                  const Arrayofcurrentdays = [...Array(31)].map((i, key) => {
                    return key.toString();
                  });
                  const num = e.target.id;
                  if (Arrayofcurrentdays.includes(num)) {
                    setMatchid(e.target.id);
                    setMatchmonth(themonth);
                    setMatchyear(theyear);
                  }
                }}
              >
                <CalendarContexte.Provider
                  value={{
                    clickedElement,
                    setCurrTaskManager,
                    matchid,
                    matchmonth,
                    themonth,
                    theyear ,
                    matchyear 
                  }}
                >
                  { themonth &&  <div className="daysTable   grid grid-cols-7   grid-rows-7 gap-[15px] w-full h-60 p-2 pt-11">
                    {[...Array(numberOfemtyDates)].map(() => (
                      <div className="daycount  "> </div>
                    ))}

                    {[...Array(numberOfpreDays)].map((i, index) => (
                      <div className=" daycount self-center  text-slate-300   justify-self-center ">
                        {index + 1}
                      </div>
                    ))}


                    {/* CurrentDays CurrentDays CurrentDays */}
                    {/* CurrentDays CurrentDays CurrentDays */}


                    {theCurrentDays}
                    {/* {reducerState[themonth].array} */}

                    {/* CurrentDays CurrentDays CurrentDays */}
                    {/* CurrentDays CurrentDays CurrentDays */}


                    {[...Array(numberOfnexDays)].map((i, ke) => (
                      <div className="daycount   self-center  text-slate-300 justify-self-center ">
                        {ke + 1}
                      </div>
                    ))}
                  </div>}
                </CalendarContexte.Provider>
              </div>
            </div>
          </div>
          {currTaskManager}
        </div>
      </article>
    </section>
  );
}

export default Calendar;

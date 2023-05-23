import React from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";

export default function SubFaq({ data }) {
    const  {  title , question}   = data
    const [fuck, setIsFuck] = useState(true);
     const fuckit = (event) => {
       setIsFuck(!fuck);
    }; 

    return (
      <div className="  bg-slate-900 text-slate-200 rounded-xl mt-2 p-4">
        <div
          id="4"
          className={`  " max-[768px]:pb-2 md:pb-4   flex justify-between items-center   text-slate-300   left " `}
          onClick={(event) => {
            fuckit(event);
          }}
        >
                <span>{ title}</span>
          {fuck ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
        </div>

        <div className={`${fuck && "hidden"} " text-sm "`}>
                <p> {question}</p>
        </div>
      </div>
    );
}
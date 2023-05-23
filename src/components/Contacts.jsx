import React from "react";
import { useState, useEffect } from "react";
import consta from "../constants/constants.jsx";

function Contacts() {
  const { id, title } = Object.keys(consta)
    .filter((info) => info == "contact")
    .reduce((obj, index) => {
      obj = consta[index];
      return obj;
    }, {});

  if (document.activeElement !== document.body) document.activeElement.blur();

  const users = [
    {
      index: 1,
      handle: "hamid",
      phone: 76576576,
      email: "medb@gmail.com",
      access: "zdfg",
    },
    {
      index: 2,
      handle: "hamid",
      phone: 76576576,
      email: "medb@gmail.com",
      access: "admin",
    },
    {
      index: 3,
      handle: "hamid",
      phone: 76576576,
      email: "medb@gmail.com",
      access: "admin",
    },
    {
      index: 4,
      handle: "sodo",
      phone: 87674846,
      email: "medbrrh@gmail.com",
      access: "tester",
    },
    {
      index: 5,
      handle: "sodo",
      phone: 87674846,
      email: "medbrrh@gmail.com",
      access: "admin",
    },
    {
      index: 6,
      handle: "hamid",
      phone: 76576576,
      email: "medb@gmail.com",
      access: "admin",
    },
    {
      index: 7,
      handle: "hamid",
      phone: 76576576,
      email: "medb@gmail.com",
      access: "admin",
    },
    {
      index: 8,
      handle: "sodo",
      phone: 87674846,
      email: "medbrrh@gmail.com",
      access: "tester",
    },
    {
      index: 9,
      handle: "sodo",
      phone: 87674846,
      email: "medbrrh@gmail.com",
      access: "admin",
    },
    {
      index: 10,
      handle: "sodo",
      phone: 87674846,
      email: "medbrrh@gmail.com",
      access: "admin",
    } 
  ];
    // const [isNewObj, setIsNewObj] = useState(false);

const asdfgasdfg = ( ) => {
  let spreadNewobj = [];

  const spreaditterated = JSON.parse(JSON.stringify(users));
  // console.log(JSON.stringify(spreadNewobj));

  var newi = Math.ceil(users.length / 5);

  for (let i = 0; i < newi; i++) {
    if (spreaditterated.length >= 5) {
      spreadNewobj.push(
        spreaditterated.splice(0, 5).reduce((obj, key, i) => {
          obj[i] = key;
          return obj;
        }, {})
      );
    } else {
      spreadNewobj.push(
        spreaditterated.splice(0).reduce((obj, key, i) => {
          obj[i] = key;
          return obj;
        }, {})
      );
    }
  }
  
  // setUsers(spreadNewobj);
  return spreadNewobj;
 
};
 

console.log(asdfgasdfg());


   const [Newobj, setNewobj] = useState([]);

  const [initUsers, setUsers] = useState( asdfgasdfg());
  const [pageKey, setpageKey] = useState(1);
  
  const SelectPage = (event) => {
    setpageKey(event.target.value);
  };

  const felterData = (event) => {
    var filtredAtt = event.target.getAttribute("name");
    const spreadtUsers = JSON.parse(JSON.stringify(initUsers));

    // console.log(JSON.stringify(spreadtUsers[0][0]));
    // console.log(JSON.stringify(spreadtUsers));
    
    var newUsers =
      spreadtUsers[0][0] == undefined
        ? spreadtUsers.filter(
            (filterdUsers) => filterdUsers[filtredAtt] == event.target.value
          )
        : spreadtUsers
            .map((sefilterdUsers) => {
              var arrayofnum = Object.keys(sefilterdUsers).filter((key) => {
                return sefilterdUsers[key][filtredAtt] == event.target.value;
              });

              return arrayofnum.reduce((obj, key, i) => {
                return Object.assign(obj, {
                  [i]: sefilterdUsers[key[0]],
                });
              }, {});
            })
            .filter((arr) => {
              console.log(arr);
              return arr[0] != undefined;
            });

    // console.log(JSON.stringify(newUsers));

    // spreadtUsers[0][0] == undefined || newUsers.length == 0 || newUsers[0] == 0
    //   ? setIsNewObj(false)
    //   : setIsNewObj(true);

    if (newUsers.length != 0 && newUsers[0] != 0) {
      setpageKey(newUsers.length);
      setUsers(newUsers);
    } else {
      document.querySelectorAll("#reset").forEach((elem) => {
        elem.selectedIndex = 0;
      });

      setUsers(asdfgasdfg());
    }
  };
 
  const entriesNum = (event=5) => {
    var spreadNewobj = [...Newobj];

    const spreaditterated = JSON.parse(JSON.stringify(users));
    // console.log(JSON.stringify(spreadNewobj));

    var newi = Math.ceil(users.length / event.target.value);

    for (let i = 0; i < newi; i++) {
      if (spreaditterated.length >= event.target.value) {
        spreadNewobj.push(
          spreaditterated
            .splice(0, event.target.value)
            .reduce((obj, key, i) => {
              obj[i] = key;
              return obj;
            }, {})
        );
      } else {
        spreadNewobj.push(
          spreaditterated.splice(0).reduce((obj, key, i) => {
            obj[i] = key;
            return obj;
          }, {})
        );
      }
    }

    // const sldkfj = spreadNewobj
    //   .map((sjUser) => {
    //     return Object.keys(sjUser).map((pp) => {
    //       return pp;
    //     });
    //   })
    //   .flatMap((num) => num);

    // if (event.target.value >= sldkfj.length) {
    //   setpageKey(-1);
    // }

    setNewobj([]);
    // setIsNewObj(true);
    setUsers(spreadNewobj);
    
    // setItteratedUsers(users);
  };

 

  const shortcut = "table-cell overflow-hidden text-ellipsis whitespace-nowrap";
  const border = "border-solid border-2 border-black";
  return (
    <section className=" relative  bg-white w-11/12 h-4/5   m-auto mt-7 box-border  rounded-xl p-4">
      <article className=" contacts-parent w-full  overflow-y-scroll flex flex-col box-border h-full">
        <h1 className={"title absolute bg-white"}> {title}</h1>
        <div
          className={`  " contacts-container mt-12 w-full h-full flex flex-col  rounded-lg  "`}
        >
          <div
            className={` " contacts-filter  text-gray-300 bg-gray-800  py-1  w-full h-11 "`}
          >
            <select
              className={`  " contacts-filter p-1   bg-gray-800    "`}
              name="handle"
              id="reset"
              onChange={(event) => {
                felterData(event);
              }}
            >
              <optgroup  className=" border-0 " >
              <option value="" disabled selected hidden>
                Name
              </option>
              <option value="hamid">hamid</option>
              <option value="sodo">sodo</option>
              </optgroup>
            </select>
            <select
              className={`  " contacts-filter    bg-gray-800    "`}
              name="index"
              id="reset"
              onChange={(event) => {
                felterData(event);
              }}
            >
              <optgroup>
                <option value="" disabled selected hidden>
                  Id
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </optgroup>
            </select>

            <select
              className={`  " contacts-filter    bg-gray-800    "`}
              name="access"
              id="reset"
              onChange={(event) => {
                felterData(event);
              }}
            >
              <optgroup>
              <option value="" disabled selected hidden>
                Access level
              </option>
              <option value="admin">admin</option>
              <option value="zdfg">zdfg</option>
              </optgroup>
            </select>
          </div>

          <table className="contacts-wrapper  text-sm text-left   w-full h-full  ">
            <thead className=" text-xs   text-gray-700 uppercase bg-gray-50   w-full h-11">
              <tr class=" contacts-header  ">
                <th className="table-cell p-2 w-9 ">92 </th>
                <th className="table-cell   w-9 ">Id</th>
                <th className="table-cell  max-[620px]:w-14 ">Name</th>
                <th className="table-cell  max-[620px]:w-[105px] ">
                  Phone number
                </th>
                <th className="table-cell  max-[620px]:w-16">Email</th>
                <th className="table-cell max-[620px]:w-[90px] ">
                  Access level
                </th>
              </tr>
            </thead>
            <tbody class="  text-gray-700   ">
              {initUsers?.map(
                (objUser, o) =>
                  o == pageKey - 1 &&
                  Object.keys(objUser).map((numo, i) => (
                    <tr
                      key={id}
                      className={` "contacts-info h-12   bg-white border-b w-full " `}
                    >
                      <td className={`  p-2 ${shortcut}`}>
                        <input
                          border-2
                          border-black
                          type={"checkbox"}
                          className={` border-y border-y-2 border-black  ${shortcut}`}
                        />
                      </td>
                      <td className={`  ${shortcut}`}>{objUser[numo].index}</td>
                      <td className={`${shortcut}`}>{objUser[numo].handle}</td>
                      <td className={`${shortcut}`}>{objUser[numo].phone}</td>
                      <td className={`${shortcut}`}>{objUser[numo].email}</td>
                      <td className={`${shortcut}`}>{objUser[numo].access}</td>
                    </tr>
                  ))
              )}
              <tr className="" ></tr>
            </tbody>
          </table>
          <div
            className={` "  contact-footer text-sm justify-between bg-gray-200 flex items-center p-1 page-entries box-border w-full h-14 "`}
          >
            <div
              className={` " justify-between flex items-center  w-[220px]   "`}
            >
              <span>view</span>

              <select
                className=" text-zinc-50 bg-gray-800 rounded-sm w-10 p-[2px] ml-2 mr-2 "
                onChange={(event) => {
                  entriesNum(event);
                }}
              >
                <optgroup>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </optgroup>
              </select>
              <span>entries per page</span>
            </div>
            <div className=" flex flex-row  max-w-[380px]  align-middle items-center ">
              <span className=" ml-3 mr-3"> showing 1 to 10 of 360 entries </span>
<div className=" flex flex-row " >
              {initUsers?.map((obj, i) => (
                <button
                  className={` " flex  bg-gray-800  text-zinc-50 justify-center  rounded-sm mr-1 items-center w-8 h-6 "`}
                  onClick={(event) => {
                    SelectPage(event);
                  }}
                  value={i + 1}
                >
                  {i + 1}
                </button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Contacts;

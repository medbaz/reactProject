const consta = {
  profile: {
    title: "Profile",
    id: 1,
  },
  contact: {
    title: "Contact",
    id: 1,
  },
};



// const [deleter, setDeleter] = useState(false);
// const [pressed, setPressed] = useState(false);
// const position = useRef({ x: 0, y: 0 });

// let taskRef = useRef([]);
// taskRef.current = useCallback ([...Array(23)].map((i, key) => (
//   taskRef.current[key]=  createRef()
// )), [])



// const deleterPosition = useRef(null);


// const deletLeft = useCallback(() => {
// return  deleterPosition.current.getBoundingClientRect().left;
// }, []);


// const deletTop = useCallback(() => {
// return  deleterPosition.current.getBoundingClientRect().top;
// }, []);
// const deletHeight = useCallback(() => {
// return  deleterPosition.current.offsetHeight;
// }, []);
// const deletWidth = useCallback(() => {
// return  deleterPosition.current.offsetWidth;
// }, []);

// let taskLeft ;
// let taskTop ;
// let identifier = 1 ;
// // useEffect(()=>{
// //   if(!taskRef?.current[0].current?.current){
// //     return ;
// //   }

// // })


// const handleMouseDawn = (e) => {
//   e.preventDefault();
//   setPressed(true);
//   e.target.style.userSelect = "none"; 
//     taskLeft = taskRef?.current[e.target.id]?.current?.getBoundingClientRect().left;

//     taskTop =  taskRef?.current[e.target.id]?.current?.getBoundingClientRect().top;
//     identifier = e.target.id ;
//     handleMouseMove();
// return ;
     
// };



// const handleMouseMove = (e) => {
//   e.preventDefault();
//   if (!pressed) {
//     return;
//   }


//      taskRef.current[e.target.id].current.style.position = "absolute";


  

//   const myInterval = setTimeout(() => {
//     if (
//       Math.abs(deletTop() - taskTop()) < deletHeight() &&
//       Math.abs(deletLeft() - taskLeft()) < deletWidth()
//     ) {
//       console.log("delet it ");
//       setDeleter(true)
//     }else {
//       console.log("keep it ");
//       setDeleter(false)      }
//   }, 1000);

         


//   position.current.x += e.movementX;
//   position.current.y += e.movementY;
  
//     taskRef.current[e.target.id].current.style.transform = `translate(${position.current.x}px,${position.current.y}px)`;

//   return ()=> {clearTimeout(myInterval)};
// };



// const handleMouseUp = (e) => {
//   e.preventDefault();
//   setPressed(false);
  
//   taskRef.current[e.target.id].current.style.position = 'relative';
//   taskRef.current[e.target.id].current.style.transform = `translate(0px,0px)`;
//   position.current.x = 0;
//   position.current.y = 0;
  
// };



// useEffect(()=>{

     
//   if (deleter) {

//     const tasksToBeRemoved =  Object.assign({},arrayofTask) ;
// //       // tasksToBeRemoved


// const newFormedTasks =  Object.keys( tasksToBeRemoved.tasksState ).filter((task)=>{
// return tasksToBeRemoved.tasksState[task].tasksTitle != taskRef.current[1].current.firstElementChild.innerText ;

// }).reduce((arrayObj ,key,i)=>{
//       return Object.assign(arrayObj ,  {[key]:arrayofTask?.tasksState[key]}  ) 

//  },{}) ; 
// //  console.log(newFormedTasks);
// // 

// const therrr =  Object.assign( tasksToBeRemoved,{['tasksState']:newFormedTasks} )

// setArrayofTask(therrr) ;
 
//    }

// },[])





 
 
 
export default consta;
// import React, { useRef } from "react";
// import { useCommentContext } from '../utils/GlobalState';
// import '../styles/main.css';

// function CommentForm() {
//     const inputRef = useRef();
//   const [_, dispatch] = useCommentContext();

//   function handleSubmit(e) {
//     e.preventDefault();

//     dispatch({
//       type: "add",
//       name: inputRef.current.value
//     });
//     inputRef.current.value = "";
//   }

//     return (
//         <div className="comment">
//         <input 
//         type="text" 
//         className="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3" 
//         placeholder="Comment on the story above!"/>
//         <button className="text-center w-full bg-green-800 hover:bg-yellow-800 rounded-md text-white py-3 ">
//             Comment
//             </button>
//         </div>
//     )
// }

// export default CommentForm;
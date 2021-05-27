// import React, { useRef } from "react";
// import { useCatchContext } from '../utils/GloabalState';
// import '../styles/main.css';

// function CatchForm() {
//     const inputRef = useRef();
//     const [_, dispatch] = useCatchContext();

//     function handleSubmit(e) {
//         e.preventDefault();

//         dispatch({
//             type: "add",
//             name: inputRef.current.vaule
//         });
//         inputRef.current.value = "";
//     }


//     return(
//         <div className="bg-yellow-800 bg-opacity-50 w-96 shadow-xl rounded p-5 pb-5">
//                 <h1 className="text-3xl font-medium underline text-white text-center">Your newest catch</h1>
//             <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
//                 <input 
//                 type="text" 
//                 className="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3" 
//                 placeholder="Catch location"/>
//                 <input 
//                 type="text" 
//                 className="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3 py-4" 
//                 placeholder="The story of your catch"/>
//                 <input 
//                 type="text" 
//                 className="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3" 
//                 placeholder="Species (if known)"/>
//                 <input 
//                 type="text" c
//                 lassName="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3" 
//                 placeholder="Length (if recorded)"/>
//                 <input 
//                 type="text" 
//                 className="placeholder-white w-full h-12 bg-blue-300 bg-opacity-75 border border-gray-800 rounded px-3"
//                  placeholder="Weight (if recorded)"/>
//                 <button className="text-center w-full bg-green-800 hover:bg-yellow-800 rounded-md text-white py-3 font-medium" type="submit">
//                     Record catch
//                     </button>
//             </form>
//         </div>
//     );
// }

// export default CatchForm;
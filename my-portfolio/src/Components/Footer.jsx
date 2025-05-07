// import React from "react";

// const Footer = () => {
//     return (
//         <footer>
//             <div className="">
//                 <div className="flex">
//                     <div className="flex-1">

//                         <h3>G.Maheswari</h3>
//                         <p>Full stack Developer based in the USA,Specilizing in web and Software Development</p>
//                     </div>
//                 </div>
//                 <div className="flex-1">
//                     <form>
//                         <input type="email" placeholder="Enter Email" />
//                         <button>Subscribe</button>
//                     </form>
//                 </div>
//             </div>
//         </footer>

//     )
// }
// export default Footer;

import React from "react";

const Footer = () => {
     return (

<footer>
  <div className="flex justify-between items-start p-6 bg-gray-200">
    <div className="flex-1">
      <h3 className="text-lg font-bold">G.Maheswari</h3>
      <p className="text-sm text-gray-600">
        Full stack Developer based in the USA, specializing in web and software development.
      </p>
    </div>
    <div className="flex-1">
      <form className="mt-4">
        <input
          type="email"
          placeholder="Enter Email"
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button className="p-2 bg-blue-500 text-white rounded">Subscribe</button>
      </form>
    </div>
  </div>
</footer>
)
}
export default Footer;
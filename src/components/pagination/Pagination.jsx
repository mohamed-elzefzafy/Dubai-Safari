import { useState } from "react";
import "./pagination.css";

const Pagination = ({pages , currentPge , setcurrentPge}) => {

  const generatePage = [];
  for (let i = 1 ; i <= pages ; i++)
  {
    generatePage.push(i);
  }
  // const [activeClass , setactiveClass] = useState("active");
  return (
    <div className="pagination">
      <button disabled={currentPge === 1} onClick={()=> setcurrentPge(prev => prev -1 )} className="page previous">
    
      <i className="bi bi-caret-left"></i>
      </button>
      {generatePage.map((page)=> {
        return (
          <div key={page} className={currentPge === page ? "page active" : "page"}  onClick={()=> setcurrentPge(page)}>
            {page}
            </div>
        )
      })}
  <button disabled={currentPge === pages} onClick={()=> setcurrentPge(prev => prev + 1)} className="page next">
  <i className="bi bi-caret-right"></i>
      </button>
    </div>
  )
}

export default Pagination
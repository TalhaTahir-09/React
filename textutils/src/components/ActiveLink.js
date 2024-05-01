import React from 'react'
import { useLocation } from "react-router-dom";

const useActiveLink = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)
    
}
function ActiveLink() {
  return (
    <div>
    </div>
  )
}

export default ActiveLink

import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const ShowSearchBar = ({children}) =>{

    const location = useLocation();

    const [truesearchbar,settruesearchbar] = useState(false)

    useEffect(() => {
        console.log('location:',location)
        if (location.pathname === '/login' || location.pathname === '/contactus' || location.pathname === '/Homepage') {
            settruesearchbar(false);
          } else {
            settruesearchbar(true);
          }
        }, [location]);

    return (
        <div>{truesearchbar && children}</div>
    )
}

export default ShowSearchBar
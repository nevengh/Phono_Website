import React,{useState,useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Home from '../Home/Home';
import './PreLoader.css'
const PreLoader = () => {
    const  [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000);
    },[])
  return (
    <div className='Preloading'>
        {
            loading ?

                <ClipLoader
                    color={"#d63636"}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            :
            (
                <Home/>
            )

        }
    </div>
  )
}

export default PreLoader
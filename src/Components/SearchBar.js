import React,{useState,useEffect} from "react";
import axios from "axios";


const SerachBar=({setImages})=>{

   
    let[searchTerm,setSerachTerm]=useState("nature")
    let[previousSerachTerm,setPreiousSerachTerm]=useState("")

    // console.log(images);


    useEffect(()=>{
        fetchImage()
    },[])

   const fetchImage=()=>{
        if(searchTerm===previousSerachTerm) return
         (
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                // "client_id":"TSw9BIOC4P8ad4Scnc0u1KA4p88grav5ElRHO_KmfLI ",
                query:searchTerm||"nature"
            },
            headers:{
                Authorization :"Client-ID TSw9BIOC4P8ad4Scnc0u1KA4p88grav5ElRHO_KmfLI "

            }
        })
        )
        .then((response)=>{
            setImages(response.data.results)
            setPreiousSerachTerm(searchTerm)
        })
        .catch((error)=>console.log(error));
        
    }






    return(

        <div>
                <input type="text" placeholder="Enter your search Image ..." value={searchTerm} 
                onChange={(e)=>setSerachTerm(e.target.value)}/>

                <button onClick={fetchImage}>Search</button>

        </div>
    )
}

export default SerachBar;
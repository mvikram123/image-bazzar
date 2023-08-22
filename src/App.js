import React,{useState} from "react";
import SearchBar from "./Components/SearchBar";
import ImageGallery from "./Components/ImageGallery";



const App=()=>{

  let[images,setImages]=useState([])


return(
  <div>
    <SearchBar  setImages={setImages} />
    <ImageGallery images={images}/>
  
  </div>
)
 
}

export default App;
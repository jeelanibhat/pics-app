import React, {useState} from "react";
import ImageList from "./components/ImageList";
import Searchbar from "./components/Searchbar";
import index from './index.css';
import SearchImages from './picsApi';

const App = () =>{

  const [imageData, setImageData] = useState([]);
  const handleSubmit = async (term) =>{
    const result = await SearchImages(term);
    setImageData(result)
  }

  SearchImages();

  return(
    <div className="app__container">
      <Searchbar onSubmit={handleSubmit} />
      <ImageList imageData={imageData} />
    </div>
  )
}

export default App;
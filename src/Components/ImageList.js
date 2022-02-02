const ImageList = ({imgArray}) => {
    const newImg = imgArray.map((img) => 
      <li key={img.key}>
        <div className="img-div">
          <img src={img.src} alt={img.alt} key={img.key}/>
          <p>{img.caption}</p>
        </div>
      </li>)
  
      return(
        <div className="img-container">
          <ul>
          {newImg}
        </ul>
        </div>  
      )
  };

  export default ImageList;
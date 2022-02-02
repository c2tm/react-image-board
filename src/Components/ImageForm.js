import {useState} from 'react';

const ImageForm = ({imgArray, setImgArray}) => {

    const [urlText, setUrlText] = useState(``);
    const [captionText, setCaptionText] = useState(``);

    const handleUrlChange = (e) => {
      setUrlText(e.target.value);
    }

    const handleCaptionChange = (e) => {
      setCaptionText(e.target.value);
    }

    const handleSubmit = () => {
      setImgArray([...imgArray, {src: urlText, alt: `New Image ${imgArray.length-2}`, caption: captionText, key: imgArray.length + 1}]);
    }

    return(
      <div className='form-div'>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput" className="label">Image URL</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Image URL" value={urlText} onChange={handleUrlChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2" className="label">Image Caption</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Image Caption" value={captionText} onChange={handleCaptionChange}/>
          </div>
        </form>
        <div className="form-button-container">
          <button type="submit" className="form-button" onClick={handleSubmit}>Upload</button>
          <button type="button" className="form-button">Cancel</button>
        </div>  
      </div>
    )
};

export default ImageForm;
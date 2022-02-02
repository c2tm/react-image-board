import {useState} from 'react';
import ImageList from './ImageList';
import ImageForm from './ImageForm';

const ImageBoard = ({}) => {
    const [showForm, setShowForm] = useState(false);
    const [imgArray, setImgArray] = useState([{
        src: `https://picsum.photos/500/500`,
        alt: `random img`,
        caption: `Default Caption`,
        key: `1`,
    },
    {
        src: `https://picsum.photos/500/500`,
        alt: `random img`,
        caption: `Default Caption`,
        key: `2`,
    },
    {
        src: `https://picsum.photos/500/500`,
        alt: `random img`,
        caption: `Default Caption`,
        key: `3`,
    }]);
    return(
      <div className="main-container">
        <nav>
          <button className="upload-button" onClick={() => setShowForm(!showForm)}>Upload</button>
        </nav>
       
        {showForm && <ImageForm imgArray={imgArray} setImgArray={setImgArray}/>}
        <ImageList imgArray={imgArray} />
      </div>
    )
}

export default ImageBoard;
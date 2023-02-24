import React,{useRef, ReactNode,} from 'react'
import {Close} from "@material-ui/icons"
import { ImageStyled, Dragbox, Preview } from '../styles/Image.styled'

interface PropsType {
    setForm: React.Dispatch<React.SetStateAction<listType>>
}

export default function Image( props : PropsType) {
    const setForm = props.setForm
    const uploadFIle = useRef<HTMLInputElement>(null)
    const previewID = useRef<HTMLInputElement>(null)
    const imageID = useRef<HTMLInputElement>(null)
    function dragNdrop(event: any) {
        var fileName = URL.createObjectURL(event.target.files[0]);
        setForm((prev : any) => ({ ...prev, image: event.target.files[0] }));
        var preview = previewID.current
        var previewImg = document.createElement("img");
        previewImg.setAttribute("src", fileName);
        preview.appendChild(previewImg);
        if(event.target.files[0]){
          imageID.current.style.display ="none"
          previewID.current.style.cssText ="display:flex; flex-direction: ; "

        }
    }
    function drag() {
        uploadFIle.current.parentNode.className = 'draging dragBox';
       
    }
    function drop() {
        uploadFIle.current.parentNode.className = 'dragBox';
    }

    function handlePreview(){
      imageID.current.style.display ="flex"
      previewID.current.style.cssText ="display:none; "
    }
  return (

    <div>
      <ImageStyled ref={imageID} className="uploadOuter">
  <label htmlFor="uploadFile" className="btn btn-primary">Upload Cover Image</label>
  
<Dragbox   className="dragBox">
  <p>Click <strong>OR</strong> Drag and Drop image here</p>
<input ref={uploadFIle} type="file" accept='image*' onChange={dragNdrop}  onDragOver={drag} onDrop={drop} id="uploadFile"  />
</Dragbox>
</ImageStyled>

<Preview ref={previewID} id="preview">
  <div onClick={handlePreview}>
    <Close /> 
    <span>
      Delete & re-upload
    </span>
  </div>
</Preview>
    </div>
  )
}

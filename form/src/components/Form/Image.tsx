import { useRef, useState } from "react";
import { Close } from "@material-ui/icons";
import { ImageStyled, Dragbox, Preview } from "../styles/Image.styled";
import { useDispatch } from "react-redux";
import { updateImage } from "./redux/action";

export default function Image() {
  const dispatch = useDispatch();
  const [_class, _setClass] = useState<string>("uploadFile");
  const uploadFIle = useRef<HTMLInputElement>(null);
  const previewID = useRef<HTMLInputElement>(null);
  const imageID = useRef<HTMLInputElement>(null);
  function dragNdrop(event: any) {
    var fileName = URL.createObjectURL(event.target.files[0]);

    dispatch(updateImage(event.target.files[0]));
    var preview = previewID.current;
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview?.appendChild(previewImg);
    if (event.target.files[0]) {
      imageID.current.style.display = "none";
      previewID.current.style.cssText = "display:flex;";
    }
  }
  function drag() {
    _setClass("draging dragBox");
  }
  function drop() {
    _setClass("dragBox");
  }

  function handlePreview() {
    imageID.current.style.display = "flex";
    previewID.current.style.cssText = "display:none; ";
    previewID.current.children[2].remove();
  }
  return (
    <div>
      <ImageStyled ref={imageID} className="uploadOuter">
        <label htmlFor="uploadFile" className="btn btn-primary">
          Upload Cover Image
        </label>

        <Dragbox className="dragBox">
          <p>
            Click <strong>OR</strong> Drag and Drop image here
          </p>
          <input
            ref={uploadFIle}
            type="file"
            accept="image*"
            onChange={dragNdrop}
            onDragOver={drag}
            onDrop={drop}
            id={_class}
          />
        </Dragbox>
      </ImageStyled>

      <Preview ref={previewID} id="preview">
        <div onClick={handlePreview}>
          <Close />
          <span>Delete & re-upload</span>
        </div>
      </Preview>
    </div>
  );
}

import { SubmitStyled } from "../styles/input.styled";
import axios from "axios";
import { useSelector } from "react-redux";
export default function Submit() {
  const collector = useSelector((state: any) => state.lists);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!collector.loading) {
      console.log("done");
      const data = new FormData();
      data.append("file", collector.lists.image);
      data.append("upload_preset", "blog_post");

      axios
        .post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          data
        )
        .then((res) => {
          //upload res.data.secure_url, res.data.public_id
          axios.post(
            `${
              process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_DEV_MODE
                : process.env.REACT_APP_PRO_MODE
            }/api/${1.0}/programs/${2342234123}/application-form`,
            {
              //payload from collector.list
            },
            {
              headers: {
                "Content-Type": "application/json",
                // authentication to api
                Authorization: `Bearer ${"programProviderid"}`,
              },
            }
          );
        });
    }
  }
  return (
    <SubmitStyled>
      <input onClick={handleSubmit} type="submit" value="Save & Continue   >" />
    </SubmitStyled>
  );
}

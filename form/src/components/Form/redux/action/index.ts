interface Image{
  type: String,
  payload:File,
}

export const updateImage = (image:File):Image => {
  return {
    type: "UPDATE_IMAGE",
    payload: image,
  };
};

export const updateCustomQuestion = (data:any) => {
  return {
    type: "UPDATE_CUSTOM_QUESTION",
    payload: data,
  };
};
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store'

interface MyData {
loading: boolean,
lists:any,
error:string
}

interface obj{
  version: number,
  programID: number
}

const initialState:MyData = {
  loading: false,
  lists: [],
  error: "",
};

interface listType{
  image: Array<File>
}

  const initailList:listType ={
    image:[]
  }

export const fetchLists = createAsyncThunk("lists/fetchById",

// Declare the type your function argument here:
async (data : obj) => {
  const {version, programID} = data
  const response = await fetch(
    `${ process.env.NODE_ENV === "development"
  ? process.env.REACT_APP_DEV_MODE
  : process.env.REACT_APP_PRO_MODE}/api/${version}/programs/${programID}/application-form`,
  {
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${"programProviderId"}`,
    },
  })
  // Inferred return type: Promise<MyData>
  return (await response.json()) as MyData
}
);

const Lists = createSlice({
  name: "lists",
  initialState,
  reducers:{
    UPDATE: (state, action: PayloadAction<any>) => state.lists.image = action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLists.fulfilled, (state, action) => {
      // since we are fetching from local, which would never be fulfilled
      state.loading = true;
      state.lists = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLists.rejected, (state, action) => {
      state.loading = false;
      state.lists = initailList;
      state.error = action.error.message;
    });
    builder.addCase("UPDATE", (state, action) => {
      state.loading = false;
      state.lists.image = action.payload
    });
  },
});

// const PostTest = (state = Posts.reducer, action)=>{
//   switch
// }
export default Lists.reducer;


// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.lists.value

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
interface MyData {
  loading: boolean;
  start: boolean;
  lists: any;
  error: string;
}

interface obj {
  version: number;
  programID: number;
}

interface listType {
  image: Array<File>;
  customQuestion: Array<any>;
}

const initialState: MyData = {
  loading: false,
  lists: {},
  error: "",
  start: false,
};

const initailList: listType = {
  image: [],
  customQuestion: [],
};

export const fetchLists = createAsyncThunk(
  "lists/fetchById",

  // Declare the type your function argument here:
  async (data: obj) => {
    const { version, programID } = data;
    const response = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.REACT_APP_DEV_MODE
          : process.env.REACT_APP_PRO_MODE
      }/api/${version}/programs/${programID}/application-form`,
      {
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${"programProviderId"}`,
        },
      }
    );
    // Inferred return type: Promise<MyData>
    return (await response.json()) as MyData;
  }
);

const Lists = createSlice({
  name: "lists",
  initialState,
  reducers: {},
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
    builder.addCase("UPDATE_IMAGE", (state, action: AnyAction) => {
      state.loading = false;
      state.start = true;

      state.lists.image = action.payload;
    });
    builder.addCase("UPDATE_CUSTOM_QUESTION", (state, action: AnyAction) => {
      state.loading = false;

      if (action.payload !== "") {
        state.lists.customQuestion = [
          ...state.lists.customQuestion,
          action.payload,
        ];
        state.start = true;
      }
    });
  },
});

export default Lists.reducer;

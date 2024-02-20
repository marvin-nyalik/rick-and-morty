import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LocationsData } from "@/app/lib/types";
import type { RootState } from "./store";

export const fetchLocations = createAsyncThunk('fetch-locations', async () => {
  const response = await axios.post("https://rickandmortyapi.com/graphql",
  { query: `
          {
            locations {
            results {
                name
                type
                residents {
                  status
                  image
                  name
                  episode {
                    name
                }
              }
            }
          }
        }
  `});
  const { data } = response.data;
  const { locations } = data;
 
  return locations;
});

export type AppState = {
  locations: LocationsData;
  error: string | undefined;
  loading: boolean;
}

const initialState : AppState = {
  locations: {
    results: []
  } as LocationsData,
  error: "",
  loading: false,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true
      })

      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false
        state.locations = action.payload
      })

      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const locationSelector = (state: RootState) => state.locations;

export default locationsSlice.reducer;

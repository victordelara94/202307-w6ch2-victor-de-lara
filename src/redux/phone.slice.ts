import { createSlice } from '@reduxjs/toolkit';

export type PhoneMode = 'Calling...' | 'Hang';

export type PhoneState = {
  phoneNumbers: string;
  mode: 'Calling...' | 'Hang';
};

const initialState: PhoneState = {
  phoneNumbers: '',
  mode: 'Hang',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    addNumbers: (state, { payload }: { payload: string }) => {
      state.phoneNumbers += payload;
    },
    clear: (state) => {
      state.phoneNumbers = state.phoneNumbers.slice(
        0,
        state.phoneNumbers.length - 1
      );
    },
    call: (state) => {
      state.mode = 'Calling...';
    },
    hang: (state) => {
      state.phoneNumbers = initialState.phoneNumbers;
      state.mode = 'Hang';
    },
  },
});

export const actions = phoneSlice.actions;
export default phoneSlice.reducer;

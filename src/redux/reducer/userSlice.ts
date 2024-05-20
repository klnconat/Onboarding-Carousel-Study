// userSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  flowCompleted: boolean;
  loading: boolean;
}

const initialState: UserState = {
  flowCompleted: false,
  loading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.flowCompleted = action.payload.flowCompleted;
      state.loading = false;
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
    loadUser: (state, action: PayloadAction<UserState>) => {
      state.flowCompleted = action.payload.flowCompleted;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setUser, loadUser, setLoading} = userSlice.actions;
export default userSlice.reducer;

export const loadUserFromStorage = () => async (dispatch: any) => {
  const userData = await AsyncStorage.getItem('user');
  if (userData) {
    dispatch(loadUser(JSON.parse(userData)));
  } else {
    dispatch(setLoading(false));
  }
};

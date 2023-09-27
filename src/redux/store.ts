import {AnyAction, configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {ThunkMiddlewareFor} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import cartSlice from './cartSlice';

export let store: EnhancedStore<any, AnyAction, [ThunkMiddlewareFor<any>]>;
store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { inqueryApi } from "../api/inqueryApi";
import { pageApi } from "../api/pageApi";
import { categoryApi } from "../api/categoryApi";
import { featureProductApi } from "../api/featureProductApi";
import { bannerApi } from "../api/bannerApi";
import { productApi } from "../api/productApi";
import { footerApi } from "../api/footerApi";
import { ratingApi } from "../api/ratingApi";
import { bookingApi } from "../api/bookingApi";
import profileReducer from "../feature/profileSlice";
import languageReducer from "../feature/languageSlice";
import bookingReducer from "../feature/bookingSlice";
import { listingApi } from "../api/real_estate_listApi";
import inqueryReducer from "../feature/inquerySlice";
import tokenReducer from "../feature/tokenSlice";
import authReducer from "../feature/authSlice";
import askReducer from "../feature/askSlice";
import reviewReducer from '../feature/reviewSlice';
import commentReducer from "../feature/commentSlice";
import { commentApi } from "../api/commentApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [inqueryApi.reducerPath]: inqueryApi.reducer,
    [pageApi.reducerPath] : pageApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [featureProductApi.reducerPath] : featureProductApi.reducer,
    [bannerApi.reducerPath] : bannerApi.reducer,
    [productApi.reducerPath] : productApi.reducer,
    [footerApi.reducerPath] : footerApi.reducer,
    [ratingApi.reducerPath] : ratingApi.reducer,
    [listingApi.reducerPath] : listingApi.reducer,
    [bookingApi.reducerPath] : bookingApi.reducer,
    [commentApi.reducerPath] : commentApi.reducer,
    profile : profileReducer,
    language  : languageReducer,
    booking : bookingReducer,
    inquery : inqueryReducer,
    token : tokenReducer,
    auth : authReducer,
    ask : askReducer,
    review : reviewReducer,
    comment : commentReducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      inqueryApi.middleware,
      pageApi.middleware,
      categoryApi.middleware,
      featureProductApi.middleware,
      bannerApi.middleware,
      productApi.middleware,
      footerApi.middleware,
      ratingApi.middleware,
      listingApi.middleware,
      bookingApi.middleware,
      commentApi.middleware
      ),
});

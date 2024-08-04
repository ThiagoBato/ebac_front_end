import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import order from '../store/reducers/order';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => '/restaurantes',
    }),
    getRestaurant: builder.query({
      query: (id) => `/restaurantes/${id}`,
    }),
    checkoutOrder: builder.mutation({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(order.actions.add(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery, useCheckoutOrderMutation } = api;

export default api;

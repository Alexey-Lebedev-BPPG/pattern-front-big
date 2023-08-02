import {gql} from '@apollo/client';
import {client} from 'src/app/providers/ApolloProvider';

export interface IDashboardActon {
  days?: number;
  items?: number;
}

export const getAllProductsRequest = (payload: IDashboardActon) =>
  client.query({
    query: gql`
      query Query($productsInput: ProductsInput) {
        getFilterData(productsInput: $productsInput)
      }
    `,
    variables: {productsInput: {...payload}},
  });

export const getAllCategoriesRequest = (payload: IDashboardActon) =>
  client.query({
    query: gql`
      query Query($items: Int) {
        getCategoriesData(items: $items) {
          _id
          total
        }
      }
    `,
    variables: {items: payload.items},
  });
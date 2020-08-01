import gql from 'graphql-tag';

export const GET_PRODUCT_WITH_RELATED_PRODUCTS = gql`
  query getProductWithRelatedProducts($slug: String!, $type: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      Type{
        id
        title
        slug
      }
      images{
        image
      }
      categories {
        id
        slug
        title
      }
    }
    relatedProducts(slug: $slug, type: $type) {
      id
      title
      slug
      weight
      price
      Type{
        id
        title
        slug
      }
      categories{
        id
        title
        slug
      }
      images{
        image
      }
    }
  }
`;

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($type: String!, $slug: String!) {
    relatedProducts(type: $type, slug: $slug) {
      id
      title
      slug
      weight
      price
      Type{
        id
        title
        slug
      }
      categories{
        id
        title
        slug
      }
      images{
        image
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      discountInPercent
      Type{
        id
        title
        slug
      }
      images{
        image
      }
      categories {
        id
        slug
        title
      }
    }
  }
`;
export const GET_PRODUCT_DETAILS = gql`
  query getProduct($slug: String!){
    product(slug:$slug){
      id
      title
      slug
      description
      Type{
        id
        title
        slug
      }
      category{
        id
        title
        slug
        parent{
          id
          title
          slug
        }
      }
      unit
      price
      salePrice
      discountPercent
      createdAt
      images{
        image
      }
    }
  }
`;
export const GET_PRODUCTS = gql`
  query(
    $offset: Int
    $limit: Int
    $type: String
    $text: String
    $category: String
  ){
    products(
      offset:$offset
      limit:$limit
      Type:$type
      text:$text
      category:$category
    ){
      hasMore
      total
      items{
        id
        slug
        title
        description
        Type{
          id
          title
          slug
        }
        category{
          id
          title
          slug
          parent{
            id
            title
            slug
          }
        }
        unit
        price
        salePrice
        discountPercent
        createdAt
        images{
          image
        }
      }
    }
  }
`;
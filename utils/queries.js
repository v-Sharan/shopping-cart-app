export const getAllProducts = () => {
  const query = `*[_type == 'products']{
  price,
  product_name,
  imgUrl[],
  discription,
  slug{
    current
  },
  _id,
  categories->{
    ...
  }
}`;
  return query;
};

export const getProductById = (id) => {
  const query = `*[_type == 'products' && _id == ${id}]{
  price,
  product_name,
  imgUrl[],
  discription,
  slug{
    current
  },
  _id,
  categories->{
    ...
  }
}`;

  return query;
};

export const getProductsByCatagory = (category_name) => {
  const query = `*[_type == 'products' && references(*[_type=='category' && category_name == ${category_name}]._id)]{
  price,
  product_name,
  imgUrl[],
  discription,
  slug{
    current
  },
  _id,
  categories->{
    ...
  }
}`;
  return query;
};

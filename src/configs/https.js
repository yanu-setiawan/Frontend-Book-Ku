import axios from "axios";

const API_URL = "http://localhost:8080";
// const local_URL = `${process.env.REACT_APP_LOCAL_HOST}`;

export const userLogin = (email, password) => {
  const url = `${API_URL}/users/login`;
  console.log(url);
  return axios({
    method: "post",
    url,
    data: { email, password },
  });
};

export const userRegister = (email, password) => {
  const url = `${API_URL}/users/register`;
  console.log(url);
  return axios({
    method: "post",
    url,
    data: { email, password },
  });
};

export const getAllBook = (query) => {
  const url = `${API_URL}/book?search=${query.search}&order=${query.order}&minPage=${query.minPage}&maxPage=${query.maxPage}&minYear=${query.minYear}&maxYear=${query.maxYear}`;
  console.log(url);
  return axios({
    method: "get",
    url,
  });
};

export const getCategories = () => {
  const url = `${API_URL}/categories`;
  console.log(url, "url");
  return axios({
    method: "get",
    url,
  });
};

export const getBookByCtg = (params) => {
  const url = `${API_URL}/categories/${params}/books`;
  return axios({
    method: "get",
    url,
  });
};

export const createBook = (fileImage, body) => {
  const url = `${API_URL}/book/create-book`;

  const formData = new FormData();

  if (fileImage) {
    formData.append("image_url", fileImage);
  }

  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  console.log("formm", formData, fileImage, body);

  return axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const updateBook = (fileImage, body) => {
  const url = `${API_URL}/book/${body.id}`;

  const formData = new FormData();

  if (fileImage) {
    formData.append("image_url", fileImage);
  }

  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  console.log("formm", formData, fileImage, body);

  return axios.patch(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteBook = (id) => {
  const url = `${API_URL}/book/${id}`;
  return axios.delete(url);
};
export const deleteCategory = (id) => {
  const url = `${API_URL}/categories/${id}`;
  return axios.delete(url);
};

export const getDetailBook = (id) => {
  const url = `${API_URL}/book/${id}`;
  return axios.get(url);
};
export const getDetailCtg = (id) => {
  const url = `${API_URL}/categories/${id}`;
  return axios.get(url);
};
export const editCategories = (body) => {
  const url = `${API_URL}/categories/${body.id}`;
  return axios.patch(url);
};

export const createCtg = (body) => {
  const url = `${API_URL}/categories/create-ctg`;
  console.log(url);
  return axios({
    method: "post",
    url,
    data: body,
  });
};

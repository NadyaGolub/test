import axios from 'axios';
const limitPerPage = 9;
export const getUsers = async page => {
  try {
    const { data } = await axios.get(
      `https://64445e6ab80f57f581a45552.mockapi.io/users?page=${page}&limit=${limitPerPage}`
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

   
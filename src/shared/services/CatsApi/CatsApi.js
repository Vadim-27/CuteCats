import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  params: {
    api_key:
      'live_qcZwbyumyjcNzxW4eJpmUg41BplP4kl7rP27MZZ1jnikAk6BmisaAEORMRzLaLZs',
  },
});
export const getCats = async (limit=10)=> {
  const { data } = await instance.get(`images/search?limit=${limit}`, {
    // params: {
    //   query,
    // },
      
  });

  return data;
};

// export const searchCats = async query => {
//   const { data } = await instance.get('images/search', {
//     params: {
//       query,
//     },
//   });

//   return data;
// };
import axios from 'axios';

// const instence = axios.create({ baseURL: 'http://localhost:3000' });
const instence = axios.create();

instence.interceptors.response.use((res) => res.data);

export default {
  getSkill(limit) {
    return instence.get('/getSkill', { params: { limit } });
  },
  getView(limit) {
    return instence.get('/getView', { params: { limit } });
  },
  getNew() {
    return instence.get('/getNew');
  },
  getRanking() {
    return instence.get('/getRanking');
  },
  getArticle(id) {
    return instence.get('/getArticle', { params: { id } });
  },
  search(value) {
    return instence.get('/search', { params: { value } });
  },
  addLikes(id) {
    return instence.get('/addLikes', { params: { id } });
  },
  reduceLikes(id) {
    return instence.get('/reduceLikes', { params: { id } });
  },
};

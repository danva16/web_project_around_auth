import Api from '../components/Api';

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_09",
    headers: {
      authorization: "e0d01e4f-01c5-4081-b9ff-c482a3e73038",
      "Content-Type": "application/json"
    }
});

export default api;
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com'

export default {
  getProducts({ commit }: { commit: any}) {
    axios.get(`${url}/photos`).then(response => {
      commit('setProductsList', response.data)
    })
  },
  getCurrentProduct({ commit }: { commit: any}, id: string) {
    axios.get(`${url}/photos/${id}`).then(response => {
      commit('setCurrentProduct', response.data)
    })
  },
}

import api from "../index"

export default class ItemService {
    static async getItems() {
        var res = await api.get("/items")
        return res.data.Message
    }

    static async getItemById(id) {
        var res = await api.get(`/items/${id}`)
        return res.data.Message
    }
}
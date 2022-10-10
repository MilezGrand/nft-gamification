import api from "../index"

export default class TaskService {
    static async getTasks() {
        var res = await api.get("/task")
        return res.data.Message
    }

    static async addTask(title, description, deadline, item) {
        item = Number(item)
        var res = await api.post("/task/create", {title, description, deadline, reward: 0, item, limit: 0})
        return res
    }

}
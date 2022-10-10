import api from "../index"

export default class AuthService {
    static async login(login, password) {
        return api.post("/login", {login, password})
    }

    static async register(email, username, password) {
        return api.post("/register", {email, username, password})
    }

    static async logout() {
        return api.get("/logout")
    }

    static async getTasks() {
        return api.get("/task")
    }
}
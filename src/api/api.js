import Axios from 'axios';

const instance = Axios.create(
    {
        withCredentials: true, 
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "7919d3b9-03b5-4034-a63c-6e6e17512541"
        }
    }
);

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance
        .get(`users?page=${page}&count=${pageSize}`)
        .then(response => response.data) //цепочка промисов, возвращает новый промис
    },

    setUnFollow(id) {
        return instance
        .delete(`follow/${id}`)
        .then(response => response.data)
    },

    setFollow(id) {
        return instance
        .post(`follow/${id}`)
        .then(response => response.data)
    },

    getAuth() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },

    getMyProfile(userId) {
        return instance
        .get(`profile/${userId}`)
        .then(response => response.data)
    }
}

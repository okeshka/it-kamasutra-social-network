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
        console.warn('This method doesn`t work');
        return authAPI.getAuth();
    },

    getMyProfile(userId) {
        console.warn('This method doesn`t work');
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance
        .get(`profile/${userId}`)
        .then(response => response.data)
    },

    getStatus(userId) {
        return instance
        .get(`/profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance
        .put(`profile/status/`, {status: status});
    }
}

export const authAPI =  {
    getAuth() {
        return instance
            .get(`auth/me`)
            .then(response => response.data)
    },

    login(email, password, rememberMe = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    logout() {
        return instance
            .delete(`auth/login`)
            .then(response => response.data)
    },

}
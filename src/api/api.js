import axios from "axios";

// create default instance for axios
const axiosCustomInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '173e7929-a115-44d1-a2e5-6ee5da017136',
  },
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosCustomInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
  },

  followUser(userId ) {
    return axiosCustomInstance.post(`follow/${userId}`,{},{
      withCredentials: true,
      headers: {
        'API-KEY': '173e7929-a115-44d1-a2e5-6ee5da017136',
      },
    }).then(res => res.data.resultCode); // return only result code
  },

  unfollow(userId) {
    return axiosCustomInstance.delete(`follow/${userId}`,{
      withCredentials: true,
      headers: {
        'API-KEY': '173e7929-a115-44d1-a2e5-6ee5da017136',
      },
    }).then(res => res.data.resultCode); // return only result code
  }
}

export const profileApi = {
  getProfile(userId) {
    return axiosCustomInstance.get(`profile/${userId}`).then(res => res.data); // return only user data
  }
}

export const authApi = {
  getLoggedInfoUser () {
    return axiosCustomInstance.get('auth/me').then(res => res.data); // return id, login, email, resultCode
  },

  getLoggedImageUser (id) {
    return axiosCustomInstance.get(`profile/${id}`).then(res => res.data.photos.small) // return only thumbnail url
  }
}

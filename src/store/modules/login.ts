import userService from '../../api/login-service';

const user = {
  state: {
    auth: {
      token: sessionStorage.getItem('Admin-Token')
    },
    userInfo: {
      username: '',
      password: '',
      roles: []
    }
  },

  mutations: {
    SET_TOKEN: (state: any, token: any) => {
      state.auth.token = token;
    },
    SET_USER_INFO: (state: any, userInfo: any) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    // 登录
    async Login({ commit }: any, userInfo: any) {
      const username = userInfo.username.trim();
      const response: any = await userService.postLogin(username, userInfo.password);
      const data = response.data;
      sessionStorage.setItem('Admin-Token', data.token);
      commit('SET_TOKEN', data.token);
    },

    // 获取用户信息
    async GetInfo({ commit }: any) {
      const response: any = await userService.getUserInfo();
      const data = response.data;
      commit('SET_USER_INFO', data);
      return response;
    },

    // 登出
    async LogOut({ commit, state }: any) {
      await userService.postLogout();
      commit('SET_TOKEN', '');
      commit('SET_USER_INFO', {});
      sessionStorage.removeItem('Admin-Token');
    }
  }
};

export default user;

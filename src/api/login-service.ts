const loginInfo = {
  username: 'numsg@gsafety.com',
  password: '123456'
};

export default {
  reData(ret: any): Promise<{}> {
    return new Promise((resolve, reject) => {
      if (ret) {
        resolve(ret);
      } else {
        reject({ error: 'has error' });
      }
    });
  },

  postLogin(username: any, password: any) {
    let ret = {};
    if (username === loginInfo.username && password === loginInfo.password) {
      ret = {
        data: {
          id: 1,
          success: true,
          message: '登录成功',
          token: '123123123123'
        }
      };
    } else {
      ret = {
        data: {
          success: false,
          message: '请输入正确的用户名和密码'
        }
      };
    }
    return this.reData(ret).catch((ex) => {
      throw ex;
    });
  },

  postLogout() {
    return this.reData({
      data: {
        success: false,
        message: '登出成功'
      }
    }).catch(
      (ex) => {
        throw ex;
      });
  },
  getUserInfo() {
    return this.reData({
      data: {
        name: 'Seed Pro',
        // avatar: './images/logo.png',
        roles: ['admin']
      }
    }).catch((ex) => {
      throw ex;
    });
  }
};

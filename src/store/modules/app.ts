const app = {
  state: {
    sidebar: {
      opened: !Number(sessionStorage.getItem('sidebarStatus'))
    },
    language: sessionStorage.getItem('language') || 'en',
    configs: {}
  },
  mutations: {
    TOGGLE_SIDEBAR: (state: any) => {
      if (state.sidebar.opened) {
        sessionStorage.setItem('sidebarStatus', String(1));
      } else {
        sessionStorage.setItem('sidebarStatus', String(0));
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    SET_LANGUAGE: (state: any, language: any) => {
      state.language = language;
      sessionStorage.setItem('language', language);
    },
    SET_CONFIGS: (state: any, configs: any) => {
      state.configs = configs;
    },
  },
  actions: {
    ToggleSideBar: ({ commit }: any) => {
      commit('TOGGLE_SIDEBAR');
    },
    setLanguage({ commit }: any, language: any) {
      commit('SET_LANGUAGE', language);
    },
    setConfigs({ commit }: any, configs: any) {
      commit('SET_CONFIGS', configs);
    }
  }
};

export default app;

import axios from "axios";

const news = {
    namespaced: true,
    state: {
        newsData : [],
    },
    getters: {
        getnews: (state) => state.newsData,
    },
    actions: {
        async fetchnews({ commit }) {
            try {
                const data = await axios.get(
                    "https://cinnabar.icaksh.my.id/public/daily/tawiki"
                );
                commit("SET_NEWS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_NEWS(state, news) {
            state.newsData = news;
        },
    },
};

export default news;
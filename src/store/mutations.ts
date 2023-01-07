// Create by LiuSiXiang on 2023/1/7
// mutations @describe:国际化切换语言
import { MutationTree } from "vuex";
import { State } from "./state";

export const mutations: MutationTree<State> = {
    // 修改语言
    CHANGE_LANGUAGE(state, value: string) {
        state.language = value;
        sessionStorage.setItem("localeLang", value);
    },
};
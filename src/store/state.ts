/**
 *  Create by LiuSiXiang on 2023/1/7
 *  state @describe: 国际化状态存储
 */
export type State = {
    language: string;
};

export const state: State = {
    language: sessionStorage.getItem("localeLang") || "zhCn",
};

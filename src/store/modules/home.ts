import { getSliders } from '@/api/home'
import { CATOGORY_TYPES, IHomeState, ISlider } from '@/typings/home'
import { Module } from 'vuex'
import { IGlobalState } from '..'
import * as Types from '../actionTypes'


const state: IHomeState = {
    // category: CATOGORY_TYPES,
    currentCategory: CATOGORY_TYPES.ALL,
    slides: [],
    lessons: {
        hasMore: true, 
        loading: false, // 默认没有正在加载
        offset: 0,
        limit: 5,
        list: [], // 当前已经现实到页面的课程有那些
    }
}

const mutations = {

}

// Module俩面的参数
const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state,
    mutations: {
        [Types.SET_CATEGORY](state, payload: CATOGORY_TYPES) {
            state.currentCategory = payload
        },
        [Types.SET_SLIDER_LIST](state, payload: ISlider[]) {
            state.slides = payload
        }
    },
    actions: {
        async [Types.SET_SLIDER_LIST]({commit}) {
            let slider = await getSliders<ISlider>();
            console.log('slider', slider)
            commit(Types.SET_SLIDER_LIST, slider)
        }
    }
}

export default home
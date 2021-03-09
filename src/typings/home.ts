export enum CATOGORY_TYPES {
    ALL,
    REACT,
    VUE,
    NODE
}


export  interface ISlider {
    url: string
}

export interface ILesson {
    title: string,
    video: string,
    poster: string,
    price: number,
    limit: number,
    list: ILesson[]
}

export interface ILessons {
    hasMore: boolean, 
    loading: boolean, // 默认没有正在加载
    offset: number,
    limit: number,
    list: [], // 当前已经现实到页面的课程有那些
}

export interface IHomeState {
    currentCategory: CATOGORY_TYPES,
    slides: ISlider[],
    lessons: ILessons
}

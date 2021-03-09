<template>
    <div class="home">
        <!-- 首页头部 -->
        <home-header :category="category" @setCurrentCategory="setCurrentCategory" />

        <div class="container" style="margin-top: 65px" ref="refreshEle">
            <Suspense>
                <template #default>
                    <home-swiper />
                </template>
                 <template #fallback>
                    <div> loading...</div>
                </template>
            </Suspense>
        </div>
        <!-- 轮播图 -->

        <!-- 课程列表 -->
        <home-list :lessonList="lessonList" />

    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, ref } from 'vue'
    import { IGlobalState } from '../../store'
    import { CATOGORY_TYPES } from '../../typings/home'
    import { Store, useStore } from 'vuex'
    import HomeHeader from './header.vue'
    import HomeList from './list.vue'
    import HomeSwiper from './swiper.vue'
    import * as Types from '../../store/actionTypes'

    function useCategory(store: Store<IGlobalState>) {
        let category = computed(() => {
            return store.state.home.currentCategory // vuex中的状态
        })


        function setCurrentCategory(category: CATOGORY_TYPES) {
            store.commit(`home/${Types.SET_CATEGORY}`, category)
        }

        return {
            category,
            setCurrentCategory
        }
    }

    function useLessonList(store: Store<IGlobalState>) {
        const lessonList = computed(() => [])
        onMounted(() => {

        })

        return {
            lessonList
        }
    }

    export default defineComponent({
        components: {
            HomeHeader,
            HomeList,
            HomeSwiper 
        },

        setup(props, context) {
            // 需要获取vuex中的分类状态， 有个更改状态的功能   
            let store = useStore<IGlobalState>();

            let { category, setCurrentCategory } = useCategory(store)
            
            let { lessonList } = useLessonList(store)

            // 获取真实Dom
            const refreshEle = ref<null | HTMLElement>(null)

            return {
                category,
                setCurrentCategory,
                refreshEle
            }
        }
    })
</script>
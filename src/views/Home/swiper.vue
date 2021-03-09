<template>
    <div class="home-swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { IGlobalState } from "../../store";
import * as TYPES from '../../store/actionTypes'

    export default defineComponent({
        async setup() {
            let store = useStore<IGlobalState>()

            let slierList = computed(() => store.state.home.slides)

            if(slierList.value.length === 0) {
               await store.dispatch(`home/${TYPES.SET_SLIDER_LIST}`)
            }
        }
    })
</script>
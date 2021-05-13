<template>
    <div class="home-header">
        <img src="http://pal6images.roogames.com/xianjian6x/images/logo.png" alt="">

        <!-- 以前的v-model = input事件+value -->
        <van-dropdown-menu>
            <van-dropdown-item :modelValue="category" :options="options" @change="change" />
        </van-dropdown-menu>
    </div>
</template>

<script lang="ts">
    import { defineComponent, EmitsOptions, PropType, reactive, SetupContext, toRefs } from "vue";
    import { CATOGORY_TYPES } from "../../typings/home";

    export default defineComponent({
        props: {
            category: {
                type: Number as PropType<CATOGORY_TYPES>
            }
        },
        emits: ["setCurrentCategory"], // 为了做提示的
        setup(props, context: SetupContext<EmitsOptions>) {
            let state = reactive({
                options: [
                    { text: '全部课程', value: CATOGORY_TYPES.ALL },
                    { text: 'React', value: CATOGORY_TYPES.REACT },
                    { text: 'Vue', value: CATOGORY_TYPES.VUE },
                    { text: 'Node', value: CATOGORY_TYPES.NODE },
                    
                ]
            })

            function change(value: CATOGORY_TYPES) {
                context.emit('setCurrentCategory', value)
            }
            // context.emit('setCurrentCategory')

            return {
                ...toRefs(state),
                change
            }
        }
    })
</script>

<style lang="scss" scoped>
    .home-header {
        height: 65px;
        background: #2a3a3a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 -40px 0 40px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        img {
            height: 80px;
        }

    }
</style>
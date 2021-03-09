import { onMounted, Ref } from "vue";

import _ from 'loadsh'
import store, { IGlobalState } from "@/store";
import { Store } from "vuex";
export function useLoadMore(refreshEle: Ref<null | HTMLElement>, store: Store<IGlobalState>, type: string) {

    let element: HTMLElement

    function _loadMore() {
        let conterHeight = element.clientHeight;
        let scrollTop = element.scrollTop;
        let scrollHeight = element.scrollHeight

        if( conterHeight + scrollTop < scrollHeight) {
            store.dispatch(type)
        }
    }

    onMounted(() => {
        element = refreshEle.value as HTMLElement;

        element.addEventListener('scroll', _.debounce(_loadMore, 200))
    })

    return {
        isLoading: false,
        hasMore: false
    }
}
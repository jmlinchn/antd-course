import request from "../util/request";

const delay = (millisecond) => {
    return new Promise((resolve => {
        setTimeout(resolve, millisecond);
    }))
};

export default {
    namespace: 'cards',
    state: {
        cardsList: [],
    },
    effects: {
        * queryList(_, sagaEffects) {
            const {call, put} = sagaEffects;
            let endPointURI = "/dev/list_data";

            const listData = yield call(request, endPointURI);
            yield put({type: 'initList', payload: listData});
        }
    },
    reducers: {
        initList(state, {payload}) {
            const cardsList = [...payload];
            return {
                cardsList
            };
        }
    }
}
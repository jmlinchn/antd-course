import request from '../util/request';
import {message} from "antd";

const delay = (millisecond) => {
    return new Promise((resolve => {
        setTimeout(resolve, millisecond);
    }))
};

export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        * queryInitCards(_, sagaEffects) {
            const {call, put} = sagaEffects;
            const endPointURI = "/dev/random_joke";

            try{
                // 获取服务端数据
                const puzzle = yield call(request, endPointURI);
                // 触发reducer，添加一个卡片数据
                yield put({type: 'addNewCard', payload: puzzle});

                yield call(delay, 3000);

                // 第二次获取服务端数据
                const puzzle2 = yield call(request, endPointURI);
                // 第二次触发reducer，添加一个卡片数据
                yield put({type: 'addNewCard', payload: puzzle2});
            }catch (e) {
                // 打印错误信息
                message.error("获取数据失败");
            }
        }
    },

    reducers: {
        addNewCard(state, {payload: newCard}) {
            const nextCounter = state.counter + 1;
            const newCardWithId = {...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            }
        }
    }


}
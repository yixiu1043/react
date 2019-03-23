import { getFindList } from '@/services'
export default {
  namespace: "find",
  state: {
    notes: []
  },
  reducers: {
    getList(state, { payload }) {
      return {
        ...state,
        notes: payload
      }
    }
  },
  effects: {
    *fetchList(payload, { call, put }) {
      const { data } = yield call(getFindList)
      console.log(data);
      yield put({
        type: "getList",
        payload: data.memes
      })
    }
  }
}
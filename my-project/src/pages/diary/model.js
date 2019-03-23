
import { getNotesList } from '@/services';

export default {
  namespace: 'diary',
  state: {
    notes: []
  },
  reducers: {
    getList(state, { payload }) {
      return {
        ...state,
        notes: payload
      }
    },
    deleteItem(state, { id }) {
      // console.log(id)
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== id)
      }
    }
  },
  effects: {
    *fetchList(payload, { call, put }) {
      const res = yield call(getNotesList);
      yield put({
        type: 'getList',
        payload: res
      })
    },
    *delete(payload, { call, put }) {
      yield put({
        type: 'deleteItem',
        id: payload.id
      })
    }
  }
}
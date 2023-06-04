export default {
    namespace: 'bmap',
    state: {
      description: 'This demo serves as a reference and only showcases a portion of the Baidu Map. There are still many areas that need improvement and modification, and will be gradually updated when time permits!',
    },
    subscriptions: {
  
    },
    effects: {
  
    },
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  };
  
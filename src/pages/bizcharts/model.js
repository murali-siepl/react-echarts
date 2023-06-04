export default {
    namespace: 'bizcharts',
    state: {
      description: 'Bizcharts is a React charting library built on top of G2. It combines the advantages of G2 and React, allowing users to create numerous types of charts using components.',
    },
    subscriptions: {},
    effects: {},
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  };
  
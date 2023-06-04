
import data1 from './services/data01.json';
import data2 from './services/data02.json';
import data3 from './services/data03.json';
import mapData from './services/mapData.json';
import k from './services/k.json';
export default {
    namespace: 'echarts',
    state: {
        bar_data: data1,
        line_data: data1,
        area_data: data1,
        yBar_data: data1,
        candlestick_data: k,
        funnel_data: data2,
        pie_data: data2,
        pieDoughnut_data: data2,
        sankey_data: data3,
        chinaMap_data: mapData,
        
        "description": "This demo is for reference purposes only and showcases only a few Echarts charts and properties. There are still many areas that need to be improved and modified. Updates will be gradually implemented as time allows."
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

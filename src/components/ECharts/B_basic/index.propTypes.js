import PropTypes from 'prop-types';
import titlePropTypes from '../components/title.propTypes';
import legendPropTypes from '../components/legend.propTypes';
import toolboxPropTypes from '../components/toolbox.propTypes';

export default {
    ...titlePropTypes,
    ...legendPropTypes,
    ...toolboxPropTypes,
    // Palette color list
    color: PropTypes.array,
    // Supported chart types
    type: PropTypes.oneOf(['funnel', 'pie', 'sankey']),
    // Data format validation
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    dataType: PropTypes.oneOf(['dataset', 'table', 'special']),
    // Style for the echart component div
    style: PropTypes.object,
    // Whether to display loading state
    loading: PropTypes.bool,
    // Tooltip configuration can be passed in to verify
    tooltip: PropTypes.object,
    // Whether to display tooltip
    showTooltip: PropTypes.bool,
    // Graphics series (series) configuration items
    series: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    // Single graphics series (series[i]) configuration item
    seriesSettings: PropTypes.object,
    // Funnel chart data sorting
    sort: PropTypes.oneOf(['ascending', 'descending', 'none']),
    // Graphics series (series) name
    seriesName: PropTypes.string,
    // When the chart is ready, a callback function will be invoked with the echarts object as its parameter.
    onChartReady: PropTypes.func,
    // Binding the echarts event, a callback function will be invoked with the echarts event object and the echarts object as its parameters
    onEvents: PropTypes.object,
};

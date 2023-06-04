import PropTypes from 'prop-types';
import titlePropTypes from '../components/title.propTypes';
import legendPropTypes from '../components/legend.propTypes';
import toolboxPropTypes from '../components/toolbox.propTypes';
import gridPropTypes from '../components/grid.propTypes';

export default {
    ...titlePropTypes,
    ...legendPropTypes,
    ...toolboxPropTypes,
    ...gridPropTypes,
    // Palette color list
    color: PropTypes.array,
    // Supported chart types
    type: PropTypes.oneOf(['line', 'area', 'bar', 'bar-y', 'k']),
    // Data format check
    data: PropTypes.shape({
        columns: PropTypes.array,
        rows: PropTypes.array,
    }),
    // Style of the EChart component div
    style: PropTypes.object,
    // Whether it shows loading
    loading: PropTypes.bool,
    // Whether to display the dataZoom component
    showDataZoom: PropTypes.bool,
    // Tooltip configuration
    tooltip: PropTypes.object,
    // Whether to display the tooltip
    showTooltip: PropTypes.bool,
    // axisPointer type
    axisPointer: PropTypes.oneOf(['shadow', 'cross', undefined]),
    // x-axis configuration
    xAxis: PropTypes.object,
    // Display interval of the axis scale label, valid in the category axis
    interval: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    // Rotation angle of the scale label when the category label of the category axis cannot be displayed, preventing label overlap.
    // The angle of rotation ranges from -90 degrees to 90 degrees.
    xAxisRotate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    // y-axis configuration
    yAxis: PropTypes.object,
    // Maximum value
    maxPoint: PropTypes.bool,
    // Minimum value
    minPoint: PropTypes.bool,
    // Average value
    averageLine: PropTypes.bool,
    // Graphics series (series) configuration items
    series: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    // Configuration item for a single graphic series (series[i])
    seriesSettings: PropTypes.object,
    // Specify whether the column (column) or row (row) of the dataset is mapped to a graphic series (series)
    seriesLayoutBy: PropTypes.oneOf(['column', 'row']),
    // y-axis name
    YName: PropTypes.string,
    // y2-axis name
    Y2Name: PropTypes.string,
    // y-axis unit
    YUnit: PropTypes.string,
    // Whether to show y2-axis
    showY2: PropTypes.bool,
    // Y2Series, Y2SeriesName, Y2SeriesIndex, and Y2Type are used to specify the data bound to the y2-axis, choose one of them
    // Mapping index and type of y2-axis data, weight: 3
    Y2Series: PropTypes.arrayOf(PropTypes.object),
    // Graphic type for y2-axis, weight: 2
    Y2Type: PropTypes.oneOf(['line', 'bar']),
    // Specify y2-axis graphic index by property name, weight: 2
    Y2SeriesName: PropTypes.array,
    // Specify y2-axis graphic index, weight: 1
    Y2SeriesIndex: PropTypes.array,
    // y2-axis unit
    Y2Unit: PropTypes.string,
    // Stack series list
    stack: PropTypes.bool,
    // Show label for series list
    showLabel: PropTypes.bool,
    // Display position of the label for series list
    labelPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'inside', 'insideLeft', 'insideRight', 'insideTop', 'insideBottom', 'insideTopLeft', 'insideBottomLeft', 'insideTopRight', 'insideBottomRight']),
    // Callback function when the chart is ready, with the echarts object as its parameter
    onChartReady: PropTypes.func,
    // Bind the echarts event and callback with the echarts event object and the echarts object as its parameters
    onEvents: PropTypes.object,
};

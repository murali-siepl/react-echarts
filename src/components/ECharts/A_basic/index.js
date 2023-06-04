/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.2
 * @description
 */
import { PureComponent } from 'react';
import Chart from '../core';
import { _isData } from '../methods';
import getTooltip from './tooltip';
import getTitle from '../components/title';
import getToolbox from '../components/toolbox';
import getLegend from '../components/legend';
import getDataset from './dataset';
import getXAxis from './xAxis';
import getYAxis from './yAxis';
import getSeries from './series';
import getGrid from './../components/grid';
import getDataZoom from './dataZoom';
import { _toDataset } from '../methods';
import propTypes from './index.propTypes';

class BasicChart extends PureComponent {
    static defaultProps = {
        height: '100%',
        data: {},
        type: 'line',
        loading: false,
        showTooltip: true,
        interval: 'auto',
        xAxisRotate: 0,
        axisPointer: 'shadow',
        showLegend: true,
        legendOrient: 'horizontal',
        legendLeft: 'center',
        seriesLayoutBy: 'row',
        seriesSettings: {},
        showY2: false,
        Y2Type: 'line', // Overrides the type inside Y2Series
        // Y2SeriesIndex and Y2SeriesName specify the data bound to the y2-axis, choose one of them
        Y2SeriesIndex: [1],
        // Y2SeriesName: ['property field name'],
        // Y2Series: [
        //     {
        //         type: 'line',
        //         // The first index starts from 0
        //         index: 1,
        //         // You can choose index or name to match the data corresponding to the y-axis
        //         // name: 'property field name'
        //     }
        // ],
        showY2SplitLine: false,
        showToolbox: false,
        showToolboxDataZoom: false,
        showToolboxDataView: false,
        showToolboxMagicType: true,
        toolboxMagicType: ['line', 'bar', 'stack', 'tiled'],
        showToolboxRestore: true,
        showToolboxSaveAsImage: false,
        stack: false,
        showLabel: false,
        labelPosition: 'insideTop',
        showDataZoom: false,
    };

    render() {
        const { data, loading, height, style, onChartReady, onEvents, color } = this.props;

        if (!_isData(data)) {
            return (
                <div
                    style={{
                        width: '100%',
                        height,
                        color: '#555',
                        fontSize: 16,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        ...style,
                    }}
                >
                    <span> No data</span>
                </div>
            );
        }

        const dataSource = _toDataset(data);

        const option = {
            title: getTitle(this.props),
            tooltip: getTooltip(this.props),
            toolbox: getToolbox(this.props),
            dataZoom: getDataZoom(this.props),
            legend: getLegend(this.props),
            dataset: getDataset({ dataSource, ...this.props }),
            xAxis: getXAxis(this.props),
            yAxis: getYAxis(this.props),
            grid: getGrid(this.props),
            series: getSeries({ dataSource, ...this.props }),
            color,
        };

        return (
            <Chart
                height={height}
                style={style}
                option={option}
                showLoading={loading}
                onChartReady={onChartReady}
                onEvents={onEvents}
            />
        );
    }
}

export default BasicChart;

BasicChart.propTypes = propTypes;

import React, { PureComponent } from 'react';
import { _isData } from '../../methods';
import Chart from '../../core';
import { maxBy } from 'lodash';
import '../../mapData/china';

// Replace values
const replace = (rows, target) => {
    return rows.map((item, i) => {
        return {
            value: item[target] || 0,
            rank: i + 1,
            ...item
        };
    });
};

// Reverse sort
const sort = (rows, target) => rows.sort(function(a, b) { return b[target] - a[target]; });

export default class extends PureComponent {
    render() {
        const {
            data = {},
            height,
            loading,
            style,
            target,
            title,
            seriesName = '',
            tooltipFormatter,
            roam = false
        } = this.props;

        if (!_isData(data)) {
            return (
                <div style={{
                    width: '100%',
                    height,
                    color: '#555',
                    fontSize: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...style
                }}>
                    <span>No data</span>
                </div>
            );
        }

        const { rows } = data;
        const sortdata = sort(rows, target);
        const seriesdata = replace(sortdata, target);
        const barData = seriesdata.sort((a, b) => a.value - b.value);
        const yData = barData.map(item => item.name);
        const max = maxBy(seriesdata, o => o.value).value;

        const option = {
            title: {
                text: title,
                top: '5%',
                left: 'center',
                textStyle: {
                    color: '#666',
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: 'normal'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: tooltipFormatter || function(params) {
                    const { seriesName, name, value, marker } = params;
                    return `<div>
                        ${seriesName} <br/>
                        ${marker}
                        ${name}:${value}<br/>
                    </div>`;
                },
                backgroundColor: 'rgba(220,220,220,0.9)'
            },
            visualMap: {
                seriesIndex: [0],
                min: 0,
                max,
                left: '10',
                top: 'bottom',
                text: ['High', 'Low'],
                calculable: true,
                inRange: {
                    color: ['#e3fbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096']
                },
            },
            grid: {
                right: 70,
                top: 60,
                bottom: 30,
                width: '15%'
            },
            xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                splitNumber: 1,
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 2,
                    textStyle: {
                        color: '#aaa'
                    }
                }
            },
            yAxis: {
                type: 'category',
                nameGap: 16,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#999'
                    }
                },
                data: yData
            },
            series: [
                {
                    name: seriesName,
                    type: 'map',
                    geoIndex: 0,
                    left: '22%',
                    right: '26%',
                    mapType: 'china',
                    roam,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            color: '#333'
                        }
                    },
                    itemStyle: {},
                    data: seriesdata
                },
                {
                    name: 'barSer',
                    type: 'bar',
                    roam: false,
                    visualMap: false,
                    zlevel: 2,
                    barMaxWidth: 20,
                    itemStyle: {
                        normal: {
                            color: '#40a9ed'
                        },
                        emphasis: {
                            color: "#3596c0"
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                        },
                        emphasis: {
                            show: true,
                            position: 'right',
                            offset: [10, 0]
                        }
                    },
                    data: barData
                }
            ]
        };

        return (
            <Chart
                option={option}
                style={style}
                showLoading={loading}
            />
        );
    }
}

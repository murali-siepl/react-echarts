import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import { Chart, Legend, Coord, Axis, Geom, Label, Tooltip } from 'bizcharts';
import { DataView } from '@antv/data-set';

const data = [
    {
        item: "Example 1",
        count: 40
    },
    {
        item: "Example 2",
        count: 21
    },
    {
        item: "Example 3",
        count: 17
    },
    {
        item: "Example 4",
        count: 13
    },
    {
        item: "Example 5",
        count: 9
    },
];
@connect(({ bizcharts }) => bizcharts)
class ChartView extends PureComponent {
    render() {
        const { description } = this.props;
        const dv = new DataView();
        dv.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });
        const cols = {
            percent: {
                formatter: val => val * 100 + '%'
            }
        };
        return (
            <PageHeader
                title={'Pie Chart'}
                pathtitles={['Bizchart', 'Pie']}
                description={description}
            >
                <Chart height={600} padding={[80, 100, 80, 80]} data={dv} cols={cols} forceFit >
                    <Legend position="bottom-center" />
                    <Coord type="theta" radius={0.75} />
                    <Axis name="percent" />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                            "item*percent",
                            (item, percent) => {
                                percent = percent * 100 + "%";
                                return {
                                    name: item,
                                    value: percent
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                        <Label
                            content="percent"
                            formatter={(val, item) => {
                                return item.point.item + ": " + val;
                            }}
                        />
                    </Geom>
                </Chart>
            </PageHeader>
        );
    }
}
export default ChartView;
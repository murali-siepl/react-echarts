import { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from '@components/PageHeader';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

@connect(({ bizcharts }) => bizcharts)
class ChartView extends PureComponent {
    render() {
        const { description } = this.props;
        // Data source
        const data = [
            { genre: 'Sports', sold: 275, income: 2300 },
            { genre: 'Strategy', sold: 115, income: 667 },
            { genre: 'Action', sold: 120, income: 982 },
            { genre: 'Shooter', sold: 350, income: 5271 },
            { genre: 'Other', sold: 150, income: 3710 }
        ];

        // Define scales
        const cols = {
            sold: { alias: 'Sales' },
            genre: { alias: 'Genre' }
        };

        return (
            <PageHeader
                title={'Bar Chart'}
                pathtitles={['Bizchart', 'Bar Chart']}
                description={description}
            >
                <Chart width={600} height={400} data={data} scale={cols}>
                    <Axis name="genre" />
                    <Axis name="sold" />
                    <Legend position="top" dy={-20} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </PageHeader>
        );
    }
}

export default ChartView;

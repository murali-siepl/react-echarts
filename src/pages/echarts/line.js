import { PureComponent } from 'react';
import { connect } from 'dva';
import { Line } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, line_data } = this.props;
        return (
            <PageHeader
                title={'Line'}
                pathtitles={['Echarts', 'Line']}
                description={description}
            >
                <Panel type={'A'}>
                    <Line data={line_data} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;
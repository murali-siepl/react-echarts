import { PureComponent } from 'react';
import { connect } from 'dva';
import { Pie } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, pie_data } = this.props;
        return (
            <PageHeader
                title={'Pie'}
                pathtitles={['Echarts', 'Pie']}
                description={description}
            >
                <Panel type={'B'}>
                    <Pie data={pie_data} height={400} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;
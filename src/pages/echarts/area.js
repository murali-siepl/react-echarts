import { PureComponent } from 'react';
import { connect } from 'dva';
import { Area } from '@components/Echarts';
import PageHeader from '@components/PageHeader';
import Panel from './components/panel';
@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, area_data } = this.props;
        return (
            <PageHeader
                title={'area'}
                pathtitles={['Echarts', 'Area']}
                description={description}
            >
                <Panel type={'A'}>
                    <Area data={area_data} />
                </Panel>
            </PageHeader>
        );
    }
}
export default Chart;
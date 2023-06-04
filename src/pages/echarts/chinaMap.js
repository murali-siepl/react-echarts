import { PureComponent } from 'react';
import { connect } from 'dva';
import { ChinaMap } from '@components/Echarts';
import PageHeader from '@components/PageHeader';

@connect(({ echarts }) => echarts)
class Chart extends PureComponent {
    render() {
        const { description, chinaMap_data } = this.props;
        return (
            <PageHeader
                title={'Map'}
                pathtitles={['Echarts', 'Map']}
                description={description}
            >
                <ChinaMap
                    title={'Regional Analysis'}
                    seriesName={'Regional Analysis'}
                    data={chinaMap_data}
                    style={{ height: 700 }}
                    target={'email'}
                />
            </PageHeader>
        );
    }
}

export default Chart;

export default (props) => {
    const {
      series,
      dataSource,
      seriesLayoutBy,
      showY2,
      Y2SeriesIndex,
      Y2SeriesName,
      Y2Series,
      Y2Type,
    } = props;
  
    // Find the index of a series by its name
    const findIndexByName = (dataSource, name, type) => {
      if (seriesLayoutBy === 'row') {
        const index = dataSource.findIndex(curr => curr[0] === name) - 1;
        if (index < 0) {
          console.warn(`echarts-series: Unable to find matching Y2 value (${name})`);
        }
        return {
          name,
          type,
          index: index
        };
      } else {
        const index = dataSource[0].indexOf(name) - 1;
        if (index < 0) {
          console.warn(`echarts-series: Unable to find matching Y2 value (${name})`);
        }
        return {
          name,
          type,
          index: index
        };
      }
    };
  
    /**
     * Generate corresponding Y2 series index
     * Index starts from 0
     * Example Y2Series:
     *   [
     *     {
     *       type: 'bar',
     *       index: 2,
     *     },
     *     {
     *       type: 'bar',
     *       name: 'Cheese Cocoa'
     *     }
     *   ]
     */
    const GetY2Series = (dataSource, Y2Series) => {
      return Y2Series.map(item => {
        if (!(dataSource && dataSource[0] && item.index === undefined)) return item;
        return findIndexByName(dataSource, item.name, item.type);
      })
        .filter(item => item.index > -1);
    };
  
    // Set Y2 axis series
    const setY2Series = (_Y2Series) => {
      _Y2Series.forEach(item => {
        const { type, index } = item;
        series[index] = { ...series[index], type, yAxisIndex: 1 };
      });
    };
  
    if (showY2 === true) {
      if (Y2Series) {
        const _Y2Series = GetY2Series(dataSource, Y2Series);
        setY2Series(_Y2Series);
      } else if (Y2SeriesName && Array.isArray(Y2SeriesName)) {
        const _Y2SeriesName = Y2SeriesName.map(item => findIndexByName(dataSource, item, Y2Type));
        setY2Series(_Y2SeriesName);
      } else if (Y2SeriesIndex && Array.isArray(Y2SeriesIndex)) {
        const _Y2SeriesIndex = Y2SeriesIndex.map(index => ({
          index,
          type: Y2Type,
        }));
        setY2Series(_Y2SeriesIndex);
      }
    }
  
    return series;
  };
  
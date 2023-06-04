/**
 * @description 
 */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from '../../B_basic';

class Index extends PureComponent {
    static defaultProps = {
        data: {},
        dataType: 'special',
        type: 'sankey',
        loading: false,
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
        },
        orient: 'horizontal',
        focusNodeAdjacency: 'allEdges',
        nodeAlign: 'left',
        draggable: true,
        right: 200,
        left: 20,
        showLabel: true,
    }

    render() {
        const {
            data: { nodes, links },
            orient,
            focusNodeAdjacency,
            nodeAlign,
            draggable,
            top,
            bottom,
            right,
            left,
            showLabel
        } = this.props;

        const series = [
            {
                type: 'sankey',
                layoutIterations: 64,
                orient,
                layout: 'none',
                data: nodes,
                links: links,
                // nodeWidth: 40,
                // nodeHeight: 100,
                focusNodeAdjacency,
                nodeAlign,
                draggable,
                top,
                bottom,
                right,
                left,
                label: {
                    show: showLabel
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ];

        return (
            <Chart
                {...this.props}
                series={series}
            />
        );
    }
}

export default Index;

Index.propTypes = {
    // The layout direction of the nodes in the sankey diagram, can be 'horizontal' or 'vertical'.
    orient: PropTypes.oneOf(['horizontal', 'vertical']),
    // Enable node dragging interaction, default is true. When enabled, users can drag any node to any position. To disable this interaction, set the value to false.
    draggable: PropTypes.bool,
    // Enable animation.
    animation: PropTypes.bool,
    // Node alignment.
    nodeAlign: PropTypes.oneOf(['left', 'center', 'right']),
    // Interaction for highlighting neighboring nodes and edges when hovering over a node or edge. Default is disabled, can be manually enabled.
    focusNodeAdjacency: PropTypes.oneOfType([
        PropTypes.oneOf(['allEdges', 'outEdges', 'inEdges']),
        PropTypes.bool,
    ]),
    // The distance between the sankey component and the top of the container.
    top: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    // The distance between the sankey component and the bottom of the container.
    bottom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    // The distance between the sankey component and the right of the container.
    right: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    // The distance between the sankey component and the left of the container.
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    // The style of the text labels in each rectangle node.
    showLabel: PropTypes.bool,
};

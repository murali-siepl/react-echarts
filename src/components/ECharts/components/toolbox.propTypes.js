import PropTypes from 'prop-types';

const toolboxPropTypes = {
    // Configuration options for the toolbox
    toolbox: PropTypes.object,
    // Whether to show the toolbox
    showToolbox: PropTypes.bool,
    // Enable data zoom feature in toolbox
    showToolboxDataZoom: PropTypes.bool,
    // Enable data view feature in toolbox
    showToolboxDataView: PropTypes.bool,
    // Enable magic type feature in toolbox (e.g., switch between different chart types)
    showToolboxMagicType: PropTypes.bool,
    // Types available for magic type feature in toolbox
    toolboxMagicType: PropTypes.array,
    // Enable restore feature in toolbox (restore to original settings)
    showToolboxRestore: PropTypes.bool,
    // Enable save as image feature in toolbox
    showToolboxSaveAsImage: PropTypes.bool,
};

export default toolboxPropTypes;

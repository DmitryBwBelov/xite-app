import {connect} from 'react-redux';
import {compose} from 'redux';
// Selectors
import {videosListStructuredSelector} from '@selectors/stucturedSelectors/videosList';
// Actions
import {fetchVideosList} from '@actions/videosList';

const mapDispatchToProps = {
    fetchVideosList,
};
const withConnect = connect(videosListStructuredSelector, mapDispatchToProps);

export const enhance = compose(withConnect);

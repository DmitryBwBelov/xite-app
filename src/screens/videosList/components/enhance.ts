import {connect} from 'react-redux';
import {compose} from 'redux';
// Selectors
import {videosGenresListStructuredSelector} from '@selectors/stucturedSelectors/genresVideosList';
// Actions
import {filterVideosList} from '@actions/videosList';

const mapDispatchToProps = {filterVideosList};
const withConnect = connect(
    videosGenresListStructuredSelector,
    mapDispatchToProps,
);

export const enhance = compose(withConnect);

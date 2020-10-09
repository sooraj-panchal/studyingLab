import { connect } from 'react-redux';
import { getProfileWatcher } from '../../../store/actions';
import { getProfileSelector, isLoadingSelector } from '../../../store/selectors';
import ProfileScreen from './View';

const mapStateToProps = store => {
    return {
        isLoading: isLoadingSelector(store),
        userDetails: getProfileSelector(store),
    };
};

const mapDispatchToProps = {
    getProfileWatcher,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileScreen);

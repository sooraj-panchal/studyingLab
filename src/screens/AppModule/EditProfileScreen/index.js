import { connect } from 'react-redux';
import { getProfileWatcher, updateProfileWatcher } from '../../../store/actions';

// import {
//     checkLoginWatcher,
//     forgotPasswordSuccess,
//     verifyCodeSuccess,
//     sendSMSSuccess
// } from 'src/store/actions';

import { getProfileSelector, isLoadingSelector, updateProfileSelector } from '../../../store/selectors';
import EditProfileScreen from './View';

const mapStateToProps = store => {
    return {
        isLoading: isLoadingSelector(store),
        userDetails: getProfileSelector(store),
        updateProfile: updateProfileSelector(store)
    };
};

const mapDispatchToProps = {
    getProfileWatcher,
    updateProfileWatcher
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditProfileScreen);

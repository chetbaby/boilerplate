/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import Redux from 'redux';
import { actions } from '../actions/actions';
import { ImageState } from '../reducers/imageReducer';

const mapStateToProps = (store: ImageState) => ({
  modalToggle: store.modalToggle,
  modalURL: store.modalURL,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => ({
  toggleModal: (event: {}) => {
    dispatch(actions.toggleModal(event));
  },
});

interface ProfileImageProps {
  modalToggle: boolean;
  modalURL: string;
  toggleModal: () => boolean;
}

const ProfileImage: React.FunctionComponent<ProfileImageProps> = (
  props: ProfileImageProps
) => (
  <div>
    <div
      className="display"
      onClick={() => {
        if (props.modalToggle === false) {
          const changeObj: {} = {
            modalURL: props.userLikes.webformatURL,
            modalToggle: true,
          };
          props.toggleModal(changeObj);
        }
        if (props.modalToggle === true) {
          const changeObj: {} = {
            modalURL: '',
            modalToggle: false,
          };
          props.toggleModal(changeObj);
        }
      }}
    >
      <img src={props.image.webformatURL} className="displayImage" />
    </div>
    <div className="displayImage">
      <DeleteIcon onClick={event => props.deleteImageAsync(props.image)} />
    </div>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);

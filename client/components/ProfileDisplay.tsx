/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import ProfileImage from './ProfileImage';
import { actions } from '../actions/actions';
import { ImageState } from '../reducers/imageReducer';
import { ImageObj } from '../actions/types';

interface IProps {
  // myImages: any[];
  deleteImageAsync: {};
  userLikes: any[];
}

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  dropModal: () => {
    dispatch(actions.dropModal());
  },
});

interface ProfileDisplayProps {
  deleteImageAsync: {};
  userLikes: ImageObj[];
  modalToggle: boolean;
  dropModal: () => boolean;
  modalURL: string;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = (
  props: ProfileDisplayProps
) => {
  const { modalToggle, modalURL, dropModal, deleteImageAsync } = props;
  let modal;
  if (props.bool) {
    modal = (
      <div id="modal" onClick={() => dropModal()}>
        <img src={modalURL} />
      </div>
    );
  }
  const profileImageArr = [];

  for (let i = 0; i < props.userLikes.length; i++) {
    profileImageArr.push(
      <ProfileImage
        image={props.userLikes[i]}
        imageId={props.userLikes[i].id}
        deleteImageAsync={deleteImageAsync}
      />
    );
  }
  return (
    <div>
      {modal}
      <div className="display">{profileImageArr}</div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay);

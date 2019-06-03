/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actions } from '../actions/actions';
import { ImageObj } from '../actions/types';

interface DisplayImageStore {
  modalToggle: boolean;
  modalURL: string;
}

const mapStateToProps = (store: DisplayImageStore) => ({
  modalToggle: store.modalToggle,
  modalURL: store.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleModal: (event: {}) => {
    dispatch(actions.toggleModal(event));
  },
  likedImage: (event: ImageObj) => {
    dispatch(actions.likedImage(event));
  },
});

interface ImageProps {
  modalToggle: boolean;
  modalURL: string;
  toggleModal: () => boolean;
  likedImage: () => ImageObj;
  image: ImageObj;
}

interface ChangeObj {
  modalURL: string;
  modalToggle: boolean;
}

const Image = (props: ImageProps) => (
  <div>
    <div
      className="display"
      onClick={() => {
        if (props.modalToggle === false) {
          const changeObj: ChangeObj = {
            modalURL: props.image.webformatURL,
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
      <FavoriteIcon onClick={() => props.likedImage(props.image)} />
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import Redux from 'redux';
import { actions } from '../actions/actions';
import { ImageState } from '../reducers/imageReducer';

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  modalBool: (event: {}) => {
    dispatch(actions.modalBool(event));
  },
});

const ProfileImage = (props: any) => (
  <div className="displayImage">
    <div
      onClick={e => {
        if (props.bool === false) {
          const changeObj: {} = {
            modalURL: props.userLikes.webformatURL,
            modalBool: true,
          };
          props.modalBool(changeObj);
        }
        if (props.bool === true) {
          const changeObj: {} = {
            modalURL: '',
            modalBool: false,
          };
          props.modalBool(changeObj);
        }
      }}
    >
      <img className="image" src={props.image.webformatURL} />
    </div>
    <div className="logo">
      <DeleteIcon onClick={event => props.deleteImageAsync(props.image)} />
    </div>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);

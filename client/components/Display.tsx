/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
// import Card from '@material-ui/core/Card';
// import { bool } from 'prop-types';
import Image from './DisplayImage';
import { actions } from '../actions/actions';
import { ImageResults, ImageObj } from '../actions/types';

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dropModal: () => {
    dispatch(actions.dropModal());
  },
});

interface DisplayProps {
  results: ImageObj[];
  likedImage: ImageResults;
  modalToggle: boolean;
  modalURL: string;
  dropModal: () => boolean;
}

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  const imageArr = [];
  const { results, likedImage, dropModal, modalToggle, modalURL } = props;
  for (let i = 0; i < results.length; i += 1) {
    imageArr.push(
      <Image image={props.images[i]} likedImage={props.likedImage} />
    );
  }
  let modal;
  // console.log()
  if (props.bool) {
    modal = (
      <div id="modal" onClick={() => dropModal()}>
        <img src={modalURL} />
      </div>
    );
  }
  return (
    <div>
      {modal}
      <div className="display">{imageArr}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

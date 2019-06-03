/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Image from './DisplayImage';
import { actions } from '../actions/actions';
import { ImageResults, ImageObj } from '../actions/types';

interface DisplayStore {
  modalToggle: boolean;
  modalURL: string;
}

const mapStateToProps = (store: DisplayStore) => ({
  modalToggle: store.modalToggle,
  modalURL: store.modalURL,
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
      <Image image={results[i]} key={results[i].id} likedImage={likedImage} />
    );
  }
  let modal;
  if (modalToggle) {
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

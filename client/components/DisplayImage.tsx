import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actions } from '../actions/actions';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Popover from '@material-ui/core/Popover';

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  modalBool: (event: {}) => {
    dispatch(actions.modalBool(event));
  },
});

const Image = (props: any) => (
  <div
    onClick={e => {
      if (props.bool === false) {
        const changeObj: {} = {
          modalURL: props.image.webformatURL,
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
    <Card>
      <img src={props.image.webformatURL} className="displayImage" />
      <FavoriteIcon
        className="heart"
        onClick={event => props.likedImage(props.image)}
      />
    </Card>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);

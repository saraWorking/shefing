import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { actions } from '../../redux/actions/actions'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CreatePost(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const save = () => {
    dispatch(actions.savePost({ userId: props.userId, title: title, body: body }));
  }
  const setProperty = (value, func) => {
    func(value)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodyModal = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">new post</h2>
     <label for="title">Title</label>
      <input id="title" className="form-control" placeholder="insert title of post"  onChange={(e) => setProperty(e.target.value, setTitle)} />
     <label for="body">body</label>
      <textarea id="body" className="form-control" placeholder="insert body of post"  onChange={(e) => setProperty(e.target.value, setBody)} />
    <Button className='btn btn-primary' disabled={title?false:true} onClick={save}>Save</Button>

    </div>
  );

  return (
    <div>

      <Button onClick={handleOpen} color="secondary" >create a new post</Button>

      <Modal
        open={open}
        onClose={handleClose}
      >
        {bodyModal}
      </Modal>
    </div>
  );
}

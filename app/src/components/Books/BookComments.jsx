import { AppContext } from "App";
import Comment from "components/Books/Comment";
import FormGroup from "components/Forms/FormGroup";
import Notification from "components/Utils/Notification";
import TransactionButton from "components/Utils/TransactionButton";
import { useFields } from "hooks/useFields.js";
import { useModal } from "hooks/useModal";
import { useNotification } from "hooks/useNotification.js";
import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addComment } from "services/books";

const BookComments = ({ bookComments,bookId }) => {
  const [comments,setComments] = useState(bookComments);
  const [notification, setNotification] = useNotification(null);
  const { show,showModal,hideModal } = useModal();



  const { user,styles } = useContext(AppContext);

  const { values,onChange,reset } = useFields({ text:"" });

  const comment = async (e) => {
    e.preventDefault();
    if(!user) return;
    if(!values.text) {
      setNotification("Please enter a comment");
      throw new Error("Comment cannot be empty");
    }
    hideModal();
    reset();
    return addComment(values.text, user.id,bookId).then(comment => setComments([...comments,{ ...comment,User:{ username:user.username } }]));
  };

  const sortByDate = (a,b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };

  return (
    <>
      <Button style={{ marginBlock:"10px" }} disabled={!user} onClick={showModal} >
          Add Comment
      </Button>
      <Modal  show={show} onHide={hideModal}>
        <Modal.Header style={styles.modal.header} closeButton>
          <Modal.Title>What do you think of this book?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.modal.body}>
          <Notification styled={{ marginLeft:"27%" }} notification={notification} />
          <Form onSubmit={comment} >
            <div style={{ marginTop:"20px" }}>
            Comment below:
            </div>
            <FormGroup autoFocus name="text" value={values.text} onChange={onChange}/>
          </Form>
        </Modal.Body>
        <Modal.Footer style={styles.modal.footer}>
          <Button variant="secondary" onClick={hideModal}>
              Close
          </Button>
          <TransactionButton defaultText="Add" completedText="Added" errorText="Not added" onClick={comment}/>
        </Modal.Footer>
      </Modal>
      {
        comments?.sort(sortByDate).map((c) => <Comment comment={c} key={c.id} />)
      }
    </>
  );
};

export default BookComments;
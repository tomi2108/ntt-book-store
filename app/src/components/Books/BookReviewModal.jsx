import { Rating } from "@mui/material";
import { AppContext } from "App";
import FormGroup from "components/Forms/FormGroup";
import Notification from "components/Utils/Notification";
import TransactionButton from "components/Utils/TransactionButton";
import { useFields } from "hooks/useFields";
import { useNotification } from "hooks/useNotification";
import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addReview } from "services/books";

const BookReviewModal = ({ show,hideModal,bookId,reviews,setReviews }) => {
  const { user,styles } = useContext(AppContext);

  const [notification, setNotification] = useNotification(null);


  const { values,onChange,reset } = useFields({ text:"",rating:0 });

  const review = async (e) => {
    e.preventDefault();
    if(!user) return;
    if(!values.text) {
      setNotification("Please enter a comment");
      throw new Error("Comment cannot be empty");
    }
    if(values.rating < 0 || values.rating > 5 ){
      setNotification("Rating must be between 0 and 5");
      throw new Error("Rating must be between 0 and 5");
    }
    hideModal();
    reset();
    return addReview(values.text, user.id,values.rating,bookId).then(comment => setReviews([...reviews,{ ...comment,User:{ username:user.username } }]));
  };

  return (
    <Modal  show={show} onHide={hideModal}>
      <Modal.Header style={styles.modal.header} closeButton>
        <Modal.Title>What do you think of this book?</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modal.body}>
        <Notification styled={{ marginLeft:"27%" }} notification={notification} />
        <Form onSubmit={review} >
          <FormGroup as="textarea" style={styles.modal.textarea} placeholder="Write your review..." autoFocus name="text" value={values.text} onChange={onChange}/>
          <Rating  name="rating" onChange={onChange} value={values.rating} />
        </Form>
      </Modal.Body>
      <Modal.Footer style={styles.modal.footer}>
        <Button variant="secondary" onClick={hideModal}>
              Close
        </Button>
        <TransactionButton defaultText="Add" completedText="Added" errorText="Not added" onClick={review}/>
      </Modal.Footer>
    </Modal>
  );
};

export default BookReviewModal;
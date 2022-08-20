import { Rating } from "@mui/material";
import { AppContext } from "App";
import FormGroup from "components/Forms/FormGroup";
import Notification from "components/Utils/Notification";
import TransactionButton from "components/Utils/TransactionButton";
import { useFields } from "hooks/utils/useFields";
import { useNotification } from "hooks/utils/useNotification";
import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addReview } from "services/books";

const BookReviewModal = ({ show, hideModal, bookId, reviews, setReviews }) => {
  const { user, styles } = useContext(AppContext);

  const [notification, setNotification] = useNotification(null);

  const { fields, onChange, reset } = useFields({ text: { value:"",order:1 }, rating: { value:0,order:1 } });

  const review = async (e) => {
    e.preventDefault();
    if (!user) return;
    if (!fields.text.value) {
      setNotification("Please enter a comment");
      throw new Error("Comment cannot be empty");
    }
    if (fields.rating.value < 0 || fields.rating.value > 5) {
      setNotification("Rating must be between 0 and 5");
      throw new Error("Rating must be between 0 and 5");
    }
    hideModal();
    reset();
    return addReview(fields.text.value, user.id, fields.rating.value, bookId)
      .then(
        (newReview) =>
          setReviews([
            ...reviews,
            { ...newReview, User: { username: user.username } }
          ])
      );
  };

  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Header style={styles.modal.header} closeButton>
        <Modal.Title>What do you think of this book?</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modal.body}>
        <Notification
          styled={{ marginLeft: "27%" }}
          notification={notification}
        />
        <Form onSubmit={review}>
          <FormGroup
            as="textarea"
            style={styles.modal.textarea}
            placeholder="Write your review..."
            autoFocus
            name="text"
            value={fields.text.value}
            onChange={onChange}
          />
          <Rating name="rating" onChange={onChange} value={+fields.rating.value} />
        </Form>
      </Modal.Body>
      <Modal.Footer style={styles.modal.footer}>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        <TransactionButton
          defaultText="Add"
          completedText="Added"
          errorText="Not added"
          onClick={review}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default BookReviewModal;

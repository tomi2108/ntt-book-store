import { AppContext } from "App";
import BookReviewModal from "components/Books/BookReviewModal";
import Review from "components/Books/Review";
import { useModal } from "hooks/useModal";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BookReviews = ({ bookReviews, bookId }) => {
  const { styles, user } = useContext(AppContext);

  const { show, showModal, hideModal } = useModal();
  const [reviews, setReviews] = useState([]);
  const [reviewed,setReviewed] = useState(false);


  useEffect(() => {
    setReviews(bookReviews);
  }, [bookReviews]);


  useEffect(() => {
    if(user){
      setReviewed(reviews.some((r) => r.User.username === user.username));
    }
  },[reviews,user]);

  const sortByDate = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };

  return (
    <>
      <Button
        style={styles.review.addButton}
        disabled={!user || reviewed}
        onClick={showModal}
      >
        Review
      </Button>
      {
        reviewed && <p>You have already reviewed this book</p>
      }
      <BookReviewModal
        reviews={reviews}
        setReviews={setReviews}
        show={show}
        hideModal={hideModal}
        bookId={bookId}
      />
      {reviews &&
        reviews.sort(sortByDate).map((r) => <Review review={r} key={r.id} />)}
    </>
  );
};

export default BookReviews;

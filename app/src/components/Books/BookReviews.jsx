import { AppContext } from "App";
import BookReviewModal from "components/Books/BookReviewModal";
import Review from "components/Books/Review";
import { useModal } from "hooks/useModal";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BookReviews = ({ bookReviews,bookId }) => {
  const [reviews,setReviews] = useState([]);

  useEffect(() => {
    setReviews(bookReviews);
  },[bookReviews]);


  const { show,showModal,hideModal } = useModal();

  console.log(reviews);

  const { user } = useContext(AppContext);


  const sortByDate = (a,b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  };


  return (
    <>
      <Button style={{ marginBlock:"10px" }} disabled={!user} onClick={showModal} >
          Review
      </Button>
      <BookReviewModal reviews={reviews} setReviews={setReviews} show={show} hideModal={hideModal} bookId={bookId}/>
      { reviews &&
        reviews.sort(sortByDate).map((r) => <Review review={r} key={r.id} />)
      }
    </>
  );
};

export default BookReviews;
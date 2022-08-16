import { AppContext } from "App";
import BookCard from "components/Books/BookCard";
import { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { user,books,favorites } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }
  , [user,navigate]);



  const [favoritesBooks, setFavoritesBooks] = useState([]);

  useEffect(() => {
    if(books){
      setFavoritesBooks(books.filter(book => favorites.includes(book.id)));
    }
  } , [books, favorites]);


  return (
    <Container>
      <Row>
        { favoritesBooks.length > 0 ? (
          favoritesBooks.map((b) => <BookCard key={b.id} book={b}/>)
        ) : (
          <h3>You have no favorites</h3>
        )
        }
      </Row>
    </Container>
  );
};

export default Favorites;
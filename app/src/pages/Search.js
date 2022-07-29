import { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Clickable from "../components/Clickable.js";
import TransactionButton from "../components/TransactionButton.js";
import { useField } from "../hooks/useField.js";
import { useSort } from "../hooks/useSort.js";
import { getBooks } from "../services/books.js";
import DownIcon from "../static/DownIcon.js";
import MinusIcon from "../static/MinusIcon.js";
import UpIcon from "../static/UpIcon.js";
import styles from "../styles/styles.js";

const Search = ({ user,addToCart }) => {
  const searchInput = useField("text");
  const { sortFunc, sortByTitle, sortByAuthor, sortByPrice, sortValue,sortOrder } = useSort();
  const navigate = useNavigate();



  const [books, setBooks] = useState(null);
  const booksToMap = books?.filter((book) => book.title.toLowerCase().includes(searchInput.value.toLowerCase()));


  const renderIcon = (value) =>
    sortValue===value?
      sortOrder===1?
        <UpIcon color="white" />:
        sortOrder===-1?
          <DownIcon color="white" />:
          <MinusIcon height="10px" width="20px" color="white" />:
      <MinusIcon height="10px" width="20px" color="white" />;



  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);

  return (

    <Container style={{ color:"white" }}>
      <Row style={{ justifyContent:"center" }}>
        <input id="search" style={styles.search} placeholder="🔍 Search..." type={searchInput.type} onChange={searchInput.onChange} value={searchInput.value}   />
      </Row>
      <Row>
        <Table variant="dark" bordered hover>
          <thead>
            <tr>
              <th>Title
                <Clickable onClick={sortByTitle}>
                  {
                    renderIcon("title")
                  }
                </Clickable>
              </th>
              <th>Author
                <Clickable onClick={sortByAuthor}>
                  {
                    renderIcon("author")
                  }
                </Clickable>
              </th>
              <th>Price
                <Clickable onClick={sortByPrice}>
                  {
                    renderIcon("price")
                  }
                </Clickable>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              books &&
        booksToMap.
          sort(sortFunc)
          .map((book) => {
            const  outOfStock = book.copiesInStock === 0;
            return (
              <tr style={{ cursor:"pointer" }} onClick={() => navigate(`/book/${book.id}`)} key={book.id}>
                <td>{book.title}</td>
                <td>{book.Author.name}</td>
                <td>US<strong>${book.price}</strong></td>
                <td style={{ textAlign:"center" }}>
                  <TransactionButton disabled={user? outOfStock : true } onClick={() => addToCart(book)} defaultText="Add to cart" completedText="Added" errorText="Not added" />
                </td>
              </tr>
            );
          })
            }
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Search;

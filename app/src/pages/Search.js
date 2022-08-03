import { ThemeContext } from "App";
import BookTableRow from "components/Books/BookTableRow.js";
import Clickable from "components/Utils/Clickable.js";
import { useBooks } from "hooks/useBooks.js";
import { useField } from "hooks/useField.js";
import { useSort } from "hooks/useSort.js";
import { useContext } from "react";
import { Container, Row, Table } from "react-bootstrap";
import DownIcon from "static/DownIcon.js";
import MinusIcon from "static/MinusIcon.js";
import UpIcon from "static/UpIcon.js";

const Search = ({ user, addToCart }) => {
  const { styles, theme } = useContext(ThemeContext);
  const searchInput = useField("text");
  const sort = useSort();
  const [books] = useBooks();

  const booksFiltered = books?.filter((book) =>
    book.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  const renderIcon = (value) =>
    sort.sortValue === value ? (
      sort.sortOrder === 1 ? (
        <UpIcon color={styles.iconColor} />
      ) : sort.sortOrder === -1 ? (
        <DownIcon color={styles.iconColor} />
      ) : (
        <MinusIcon height="10px" width="20px" color={styles.iconColor} />
      )
    ) : (
      <MinusIcon height="10px" width="20px" color={styles.iconColor} />
    );

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <input
          id="search"
          style={styles.search}
          placeholder="🔍 Search..."
          type={searchInput.type}
          onChange={searchInput.onChange}
          value={searchInput.value}
        />
      </Row>
      <Row>
        <Table variant={theme} bordered hover>
          <thead>
            <tr>
              <th>
                Title
                <Clickable onClick={sort.sortByTitle}>
                  {renderIcon("title")}
                </Clickable>
              </th>
              <th>
                Author
                <Clickable onClick={sort.sortByAuthor}>
                  {renderIcon("author")}
                </Clickable>
              </th>
              <th>
                Price
                <Clickable onClick={sort.sortByPrice}>
                  {renderIcon("price")}
                </Clickable>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books &&
              booksFiltered.sort(sort.sortFunc).map((book) => {
                const outOfStock = book.copiesInStock === 0;
                return (
                  <BookTableRow
                    book={book}
                    key={book.id}
                    addToCart={addToCart}
                    user={user}
                    outOfStock={outOfStock}
                  />
                );
              })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Search;

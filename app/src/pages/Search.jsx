import { AppContext } from "App";
import BookTableRow from "components/Books/BookTableRow";
import Clickable from "components/Utils/Clickable";
import { useBooks } from "hooks/useBooks.js";
import { useFields } from "hooks/useFields.js";
import { useSort } from "hooks/useSort.js";
import { useContext } from "react";
import { Container, Row, Table } from "react-bootstrap";
import DownIcon from "static/DownIcon";
import MinusIcon from "static/MinusIcon";
import UpIcon from "static/UpIcon";

const Search = () => {
  const { styles, theme } = useContext(AppContext);
  const sort = useSort();
  const [books] = useBooks();
  const { values,onChange } = useFields({ searchField: "" });

  const booksFiltered = books?.filter((book) =>
    book.title.toLowerCase().includes(values.searchField.toLowerCase())
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
      <Row style={styles.search.container}>
        <input
          id="search"
          style={styles.search.input}
          placeholder="🔍 Search..."
          type="text"
          onChange={onChange}
          name="searchField"
          value={values.searchField}
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

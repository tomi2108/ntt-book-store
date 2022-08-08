import { AppContext } from "App";
import TransactionButton from "components/Utils/TransactionButton";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const BookTableRow = ({ book, outOfStock }) => {
  const { user, cartActions } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/book/${book.id}`)}
      key={book.id}
    >
      <td>{book.title}</td>
      <td>{book.Author.name}</td>
      <td>
        US<strong>${book.price}</strong>
      </td>
      <td style={{ textAlign: "center" }}>
        <TransactionButton
          disabled={user ? outOfStock : true}
          onClick={(e) => {
            e.stopPropagation();
            return cartActions.addToCart(book);
          }}
          defaultText="+"
          completedText=""
          errorText=""
        />
      </td>
    </tr>
  );
};

export default BookTableRow;

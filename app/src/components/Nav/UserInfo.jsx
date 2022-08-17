import { AppContext } from "App";
import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";

const UserInfo = () => {
  const { styles, user, userActions } = useContext(AppContext);
  return (
    <div style={styles.nav.loggedUser}>
      <Nav.Item >
        {user && `Logged in as ${user.username}`}
      </Nav.Item>
      {user && (
        <Button
          onClick={userActions.logOut}
          size="sm"
          variant="secondary"
        >
              Log out
        </Button>
      )}
    </div>
  );
};

export default UserInfo;
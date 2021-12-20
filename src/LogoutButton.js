import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(props) {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => {
      logout({ returnTo: window.location.origin })
      props.logoutHandler()
    }}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
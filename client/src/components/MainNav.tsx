import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import UserMenu from './UserMenu';

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className=" flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <UserMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          // className="font-bold hover:text-rose-500 hover:bg-none"
          className="neon-button"
          onClick={async () => await loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </span>
  );
};

export default MainNav;

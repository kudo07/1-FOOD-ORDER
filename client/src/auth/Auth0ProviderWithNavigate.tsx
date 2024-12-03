import { useCreateMyUser } from '@/api/MyUserApi';
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  // const { createUser } = useCreateMyUser();
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  //   const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  if (!domain || !clientId || !redirectUrl) {
    throw new Error('unable to initialise auth');
  }
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log(user);
    // if (user?.sub && user?.email) {
    //   createUser({ auth0Id: user.sub, email: user.email });
    // }
    navigate(appState?.returnTo || '/auth-callback');
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUrl,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;

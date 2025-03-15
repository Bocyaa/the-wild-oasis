import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Fetch authenticated user
  const { isPending, isAuthenticated } = useUser();

  // 2. Redirect to '/login' if user unauthenticated
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/login');
    },
    [isAuthenticated, isPending, navigate]
  );

  // 3. Display loading spinner during fetch
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. Render application if user authenticated
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

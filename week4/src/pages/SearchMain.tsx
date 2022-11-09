import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { UserProfile, UserProfileStatus } from '../types';

const Main = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({ data: null, status: 'null' });
  const navigate = useNavigate();

  const handleUserProfile = (newUserProfile: UserProfile, newStatus: UserProfileStatus) => {
    if (!newUserProfile) setUserProfile({ data: newUserProfile, status: newStatus });
    else setUserProfile({ ...newUserProfile, status: newStatus });
    navigate(`/search/${newUserProfile.data?.login}`, { state: newUserProfile });
  };

  return (
    <StMain>
      <Header />
      <SearchBar userProfile={userProfile} handleUserProfile={handleUserProfile} />
      <Outlet />
    </StMain>
  );
};
const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple2};
`;
export default Main;

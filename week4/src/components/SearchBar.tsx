import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserProfile, UserProfileStatus } from '../types';
import { getUser } from '../utils/lib/api';
import Histroy from './Histroy';

interface SearchBarProps {
  userProfile: UserProfile;
  handleUserProfile: (newUserProfile: UserProfile, newStatus: UserProfileStatus) => void;
}
const SearchBar = (props: SearchBarProps) => {
  const { userProfile, handleUserProfile } = props;
  const [historyList, setHistoryList] = useState<string[]>([]);
  const [isHistory, setIsHistory] = useState<boolean>(false);

  useEffect(() => {
    const localHistoryList = localStorage.getItem('historyList');
    if (localHistoryList) setHistoryList(JSON.parse(localHistoryList));
  }, []);

  const handleHistoryList = (newHistoryList: string[]) => {};
  const updateHistoryList = (userProfileName: string) => {};

  const getUserProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleIsHistory = () => {};
  return (
    <StForm onSubmit={getUserProfile}>
      <StInput type="text" placeholder="Github 프로필을 검색해보세요" onFocus={handleIsHistory} />
      <Histroy
        historyList={historyList}
        handleHistoryList={handleHistoryList}
        userProfile={userProfile}
        handleUserProfile={handleUserProfile}
        isHistory={isHistory}
        handleIsHistory={handleIsHistory}
      />
    </StForm>
  );
};
const StForm = styled.form`
  width: 70%;
`;
const StInput = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  outline: none;

  border: 0.8rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.purple};

  font-size: 1.5rem;
  text-align: center;
`;
export default SearchBar;

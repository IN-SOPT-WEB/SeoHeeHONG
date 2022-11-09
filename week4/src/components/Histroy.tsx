import React from 'react';
import styled from 'styled-components';

import { UserProfile, UserProfileStatus } from '../types';
import { getUser } from '../utils/lib/api';

interface HistoryProps {
  historyList: string[];
  handleHistoryList: (newHistoryList: string[]) => void;
  userProfile: UserProfile;
  handleUserProfile: (newUserProfile: UserProfile, newStatus: UserProfileStatus) => void;
  isHistory: boolean;
  handleIsHistory: () => void;
}
const Histroy = (props: HistoryProps) => {
  const { historyList, handleHistoryList, userProfile, handleUserProfile, isHistory, handleIsHistory } = props;

  const selectUserProfile = async (e: React.MouseEvent<HTMLParagraphElement>) => {
    const userName = e.currentTarget.innerText;
    handleUserProfile(userProfile, 'pending');
    handleIsHistory();
    try {
      const { data } = await getUser(userName);
      handleUserProfile({ ...userProfile, data }, 'resolved');
    } catch (error) {
      handleUserProfile({ ...userProfile, data: null }, 'rejected');
    }
  };

  const deleteUserProfile = (e: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <StUl>
      {isHistory ? (
        historyList.length === 0 ? (
          <p></p>
        ) : (
          historyList.map((history) => (
            <StLi key={history}>
              <p role="presentation" onClick={selectUserProfile}>
                {history}
              </p>
              <button type="button" onClick={deleteUserProfile}>
                X
              </button>
            </StLi>
          ))
        )
      ) : (
        <></>
      )}
    </StUl>
  );
};
const StUl = styled.ul`
  position: absolute;
  top: 19%;
  left: 13rem;

  width: 50%;

  border-radius: 0.1rem;
  text-decoration: none;
  z-index: 5;

  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.purple};
`;
const StLi = styled.li`
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    padding: 0.4rem;
    border: 0.1rem;
    outline: 0;
    background-color: ${({ theme }) => theme.colors.pink};

    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
  & > p {
    width: 100%;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`;
export default Histroy;

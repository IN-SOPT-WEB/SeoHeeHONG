import { useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { UserProfile } from '../types';

interface UserProfileCardLocation {
  state: UserProfile;
}
const UserProfileCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as UserProfileCardLocation;

  if (state.data === null)
    return (
      <StCardWrapper>
        <h3> ❌ Not user ❌</h3>
      </StCardWrapper>
    );
  const { avatar_url, name, login, html_url, followers, following, public_repos } = state.data;
  const closeUserProfile = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/search');
  };
  if (state.status === 'pending') {
    return (
      <StCardWrapper>
        <h3>Loading....</h3>
      </StCardWrapper>
    );
  }
  return (
    <StCardWrapper>
      <img src={avatar_url} alt="github_img" />
      <header>
        <a href={html_url} target="_blank" rel="noreferrer">
          {login}
        </a>
        <h3>{name}</h3>
      </header>
      <StUl>
        <li>
          <button onClick={closeUserProfile}>X</button>
        </li>
        <li>
          <span>Followers</span>
          {followers}
        </li>
        <li>
          <span>Following</span>
          {following}
        </li>
        <li>
          <span>Repos</span>
          {public_repos}
        </li>
      </StUl>
    </StCardWrapper>
  );
};
const cardSildeUp = keyframes`
 0% {
      transform: translateY(3rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0rem);
      opacity: 1;
    }
`;
const StCardWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 25rem;
  margin: 2rem;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.pink};
  box-shadow: 0.1rem 0.2rem 0.3rem ${({ theme }) => theme.colors.purple};

  text-align: center;

  animation: ${cardSildeUp} 500ms ease-in 0s 1 normal forwards;

  & > img {
    width: 20rem;
    margin: 1rem;

    border-radius: 2rem;
    box-shadow: 0.1rem 0.1rem 0.2rem ${({ theme }) => theme.colors.yellow};
  }
  a {
    margin: 2rem;

    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.a};
  }
  h3 {
    margin: 1rem;

    color: ${({ theme }) => theme.colors.white};

    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
  button {
    border: 0.3rem solid ${({ theme }) => theme.colors.pink};
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.pink};
    box-shadow: 0.1rem 0.2rem 0.3rem ${({ theme }) => theme.colors.purple};

    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
  }
`;

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin-left: 1rem;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 0 2rem 2rem 0;

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 10rem;
    margin: 1rem;
    padding: 1rem;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.orange};

    text-align: center;

    &:first-child {
      display: flex;
      align-items: flex-end;

      padding: 0.2rem;
      background-color: ${({ theme }) => theme.colors.yellow};
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      box-shadow: 0.1rem 0.2rem 0.3rem ${({ theme }) => theme.colors.purple};
    }
  }
`;
export default UserProfileCard;

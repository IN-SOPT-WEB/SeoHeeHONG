import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
  const navigate = useNavigate();

  return <StH1 onClick={() => navigate('/search')}> 🌈 Github Profile Finder 🌈 </StH1>;
};

const StH1 = styled.h1`
  margin: 2rem;

  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
`;

export default Header;

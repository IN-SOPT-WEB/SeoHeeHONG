import styled, { css, keyframes } from 'styled-components';
interface HeaderProps {
  point: number;
  isCorrect: boolean;
}
export default function Header(props: HeaderProps) {
  const { point, isCorrect } = props;
  return (
    <StHeaderWrapper>
      <h1>Pokemon </h1>
      <StSectionWrapper isCorrect={isCorrect}>
        <span>{point}</span>
        <span>POINT</span>
      </StSectionWrapper>
    </StHeaderWrapper>
  );
}

const scoreNeon = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
      0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
    color: #fed128;
  }
  50% {
    text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
      0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
    color: #806914;
  }`;
const StHeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.header};
`;
const StSectionWrapper = styled.section<{ isCorrect: boolean }>`
  padding: 1rem;
  margin: 1rem;

  background-color: ${({ theme }) => theme.colors.subColor};
  border-radius: 3rem;
  color: ${({ theme }) => theme.colors.mainColor};

  font-size: ${({ theme }) => theme.fontSizes.score};

  text-align: center;
  ${({ isCorrect }) =>
    isCorrect &&
    css`
      animation: ${scoreNeon} 0.4s ease infinite;
    `}
`;

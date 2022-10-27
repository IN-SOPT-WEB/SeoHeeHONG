import styled, { css, keyframes } from 'styled-components';
interface ModalProps {
  isModal: boolean;
}
export default function Modal(props: ModalProps) {
  const { isModal } = props;

  return (
    <StModalWrapper isModal={isModal}>
      <StModalContent>
        <p>❗️내 이름을 맞춰죠❗️</p>
      </StModalContent>
    </StModalWrapper>
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
const StModalWrapper = styled.div<{ isModal: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  animation: ${scoreNeon} 0.4s ease infinite;
  ${({ isModal }) =>
    isModal &&
    css`
      display: block;
    `}
`;
const StModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  position: absolute;
  top: 50%;
  left: 50%;

  width: 80%;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.subColor};

  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-align: center;
`;

import styled from 'styled-components';

import { pokemonItems } from '../assets/images';
import { PokemonItem } from '../types/image';
interface ContentProps {
  pokemons: PokemonItem[];
  point: number;
  handlePokemons: (newPokemons: PokemonItem[]) => void;
  handlePoint: (newPoint: number) => void;
  handleIsCorrect: (newIsCorrect: boolean) => void;
  handleIsModal: (newIsModal: boolean) => void;
}
export default function Content(props: ContentProps) {
  const { pokemons, point, handlePokemons, handlePoint, handleIsCorrect, handleIsModal } = props;

  const handleClickAnswer = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event.target instanceof HTMLButtonElement) {
      const clickButton = event.target.innerHTML;
      if (clickButton === pokemons[0].name) {
        if (point + 1 != 5) handlePokemons(pokemons.splice(1, pokemons.length));
        handlePoint(point + 1);
        handleIsCorrect(true);
        setTimeout(() => {
          handleIsCorrect(false);
        }, 2000);
      } else {
        handleIsModal(true);
        setTimeout(() => {
          handleIsModal(false);
        }, 2000);
      }
    }
  };

  const handleResetBtn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    pokemonItems.sort(() => Math.random() - 0.5);
    handlePokemons(pokemonItems);
    handlePoint(0);
  };
  if (pokemons.length === 0) return <StMain />;

  return (
    <StMain>
      <StPokemonImgWrapper>
        {point === 5 ? <p>💛 포켓몬 정복 완료 💛</p> : <StPokemonImg src={pokemons[0].url} alt="who is this?" />}
      </StPokemonImgWrapper>
      <StUl>
        <li>
          <button type="button" onClick={handleClickAnswer}>
            꼬부기
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClickAnswer}>
            수댕이
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClickAnswer}>
            이브이
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClickAnswer}>
            토케피
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClickAnswer}>
            피카츄
          </button>
        </li>
      </StUl>
      <StResetBtn type="button" onClick={handleResetBtn}>
        다시하기
      </StResetBtn>
    </StMain>
  );
}
const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StPokemonImgWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20rem;
  padding: 1rem;
  > p {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;

    font-size: ${({ theme }) => theme.fontSizes.score};
    text-align: center;
  }
`;
const StPokemonImg = styled.img`
  position: relative;
  width: 100%;
  height: 80%;

  overflow: hidden;
  border-radius: 1rem;
`;
const StUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: t;

  gap: 0.5rem;
  padding: 0;
  > li {
    display: flex;
  }

  > li > button {
    width: fit-content;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors.subColor};
    border-radius: 3rem;
    border: none;
    box-shadow: 0.1rem 0.1rem 0.1rem ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.button};

    font-size: ${({ theme }) => theme.fontSizes.li};

    :hover {
      pointer: cursor;
    }
  }
`;

const StResetBtn = styled.button`
  width: 50%;
  padding: 1rem;
  margin: 1rem;

  border: none;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.mainColor};

  color: white;
`;

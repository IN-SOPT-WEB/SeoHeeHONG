import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { pokemonItems } from '../assets/images';
import Content from '../components/Content';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { PokemonItem } from '../types/image';
export default function Main() {
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [point, setPoint] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    pokemonItems.sort(() => Math.random() - 0.5);
    setPokemons(pokemonItems);
  }, []);

  const handlePokemons = (newPokemons: PokemonItem[]) => {
    setPokemons(newPokemons);
  };
  const handlePoint = (newPoint: number) => {
    setPoint(newPoint);
  };
  const handleIsCorrect = (newIsCorrect: boolean) => {
    setIsCorrect(newIsCorrect);
  };
  const handleIsModal = (newIsModal: boolean) => {
    setIsModal(newIsModal);
  };

  return (
    <StWrapper>
      <Header point={point} isCorrect={isCorrect} />
      <Content
        pokemons={pokemons}
        point={point}
        handlePokemons={handlePokemons}
        handlePoint={handlePoint}
        handleIsCorrect={handleIsCorrect}
        handleIsModal={handleIsModal}
      />
      <Modal isModal={isModal} />
    </StWrapper>
  );
}
const StWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

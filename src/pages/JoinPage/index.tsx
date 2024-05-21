import * as S from './style';
import { Flow } from '@/types';
import { useState } from 'react';
import MainPage from '../MainPage';
import { Header } from '@/components';

const JoinPage = () => {
  const [flow, setFlow] = useState<Flow>(Flow.MAIN_FLOW);

  return (
    <S.Wrapper>
      <Header setFlow={setFlow} />

      {flow === Flow.MAIN_FLOW && <MainPage setFlow={setFlow} />}
    </S.Wrapper>
  );
};

export default JoinPage;

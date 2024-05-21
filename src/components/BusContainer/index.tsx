import * as S from './style';

import { SoonIcon } from '@/assets';

interface Props {
  isSoon: boolean;
}

const BusContainer: React.FC<Props> = ({ isSoon }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.BusIcon />
        <S.BusContent>
          <S.BusName>720번</S.BusName>
          <S.BusInfo>1시간 후 도착</S.BusInfo>
        </S.BusContent>
      </S.Container>
      {isSoon && <SoonIcon />}
    </S.Wrapper>
  );
};

export default BusContainer;

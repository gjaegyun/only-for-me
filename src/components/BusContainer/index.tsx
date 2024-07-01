import * as S from './style';

import { BusIcon, SoonIcon } from '@/assets';

interface Props {
  FIRST_RUN_TIME: string;
  LAST_RUN_TIME: string;
  LINE_NAME: string;
  isSoon: boolean;
}

const BusContainer: React.FC<Props> = ({ FIRST_RUN_TIME, LAST_RUN_TIME, LINE_NAME, isSoon }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.BusIcon>
          <BusIcon />
        </S.BusIcon>
        <S.BusContent>
          <S.BusName>{LINE_NAME}번</S.BusName>
          <S.BusInfo>1시간 후 도착</S.BusInfo>
        </S.BusContent>
      </S.Container>
      {isSoon && <SoonIcon />}
    </S.Wrapper>
  );
};

export default BusContainer;

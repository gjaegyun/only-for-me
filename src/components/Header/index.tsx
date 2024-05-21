import { Alarm } from '@/assets';
import * as S from './style';
import { Flow } from '@/types';

interface Props {
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const Header: React.FC<Props> = ({ setFlow }) => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.HeaderText onClick={() => setFlow(Flow.MAIN_FLOW)}>Only-For-Me</S.HeaderText>
          <button>
            <Alarm />
          </button>
        </S.HeaderContent>
        <S.HeaderBar />
      </S.HeaderContainer>
    </S.Wrapper>
  );
};

export default Header;

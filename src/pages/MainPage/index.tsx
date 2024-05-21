import * as S from './style';

import { Flow } from '@/types';

interface Props {
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

const MainPage: React.FC<Props> = ({ setFlow }) => {
  return (
    <S.MainContianer>
      <S.Text>
        오직 김재균만을 위한 <br /> 김재균만이 쓸 버스 서비스
      </S.Text>
    </S.MainContianer>
  );
};

export default MainPage;

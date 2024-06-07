import axios from 'axios';
import * as S from './style';

import { Flow } from '@/types';
import { useEffect, useState } from 'react';
import { BusContainer } from '@/components';
import { busInfoType } from '@/types';

const API_KEY = import.meta.env.VITE_API_KEY;

interface Props {
  setFlow: React.Dispatch<React.SetStateAction<Flow>>;
}

interface BusStopType {
  BUSSTOP_ID: number;
}

const MainPage: React.FC<Props> = ({ setFlow }) => {
  const [busInfo, setBusInfo] = useState<busInfoType[]>([]);
  const [busStop, setBusStop] = useState<BusStopType[]>([]);

  useEffect(() => {
    getBusInfo();
    getBusStopInfo();
  }, []);

  const getBusInfo = async () => {
    try {
      const response = await axios.get(`/api?serviceKey=${API_KEY}`);

      const extractedBusInfo: busInfoType[] = [
        createBusInfo(response.data.LINE_LIST, 115),
        createBusInfo(response.data.LINE_LIST, 6),
      ];

      setBusInfo(extractedBusInfo);
    } catch (e) {
      console.log('error', e);
    }
  };

  const getBusStopInfo = async () => {
    try {
      const response = await axios.get(`/bus?serviceKey=${API_KEY}`);
      // const extractedBusStops: BusStopType[] = response.data.STATION_LIST.map((stop: any) => ({
      //   BUSSTOP_NAME: stop.BUSSTOP_NAME,
      // }));
      console.log(response.data.STATION_LIST[538].BUSSTOP_ID);
      setBusStop(response.data.STATION_LIST[12].BUSSTOP_ID);
    } catch (e) {
      console.log('error', e);
    }
  };

  const createBusInfo = (lineList: any, index: number): busInfoType => {
    const busData = lineList[index];

    return {
      FIRST_RUN_TIME: busData.FIRST_RUN_TIME,
      LAST_RUN_TIME: busData.LAST_RUN_TIME,
      LINE_NAME: busData.LINE_NAME,
    };
  };

  console.log(busStop);

  return (
    <S.MainContianer>
      <S.Text>
        오직 김재균만을 위한 <br /> 김재균만이 쓸 버스 서비스
      </S.Text>
      <S.BusWrapper>
        {busInfo.map((info, index) => (
          <BusContainer
            key={index}
            FIRST_RUN_TIME={info.FIRST_RUN_TIME}
            LAST_RUN_TIME={info.LAST_RUN_TIME}
            LINE_NAME={info.LINE_NAME}
            isSoon={false}
          />
        ))}
      </S.BusWrapper>
    </S.MainContianer>
  );
};

export default MainPage;

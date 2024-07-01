import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
  border: 0.0625rem solid #eff0f2;
  border-radius: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const BusIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  background: #eff0f2;
`;

export const BusContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const BusName = styled.p`
  color: #3c3c3e;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const BusInfo = styled.p`
  color: #8f9094;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

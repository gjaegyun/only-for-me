import styled from '@emotion/styled';

export const MainContianer = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Text = styled.p`
  font-size: 1.75rem;
  line-height: 2.75rem;
  font-weight: bold;
  margin: 2rem 0 2.25rem 0;
  width: 35rem;
  color: #333;
`;

export const BusWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

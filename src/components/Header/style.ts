import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 0%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const HeaderBar = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: #eff0f2;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 600px;
  height: 2.315rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const HeaderText = styled.button`
  padding-left: 1rem;
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 1000;
  line-height: normal;
`;

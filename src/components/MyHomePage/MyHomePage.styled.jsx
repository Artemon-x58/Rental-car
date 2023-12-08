import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const HomePageTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #264653;
`;

export const HomePageContent = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 30px;
`;

export const FeatureCardWrapper = styled.div`
  background-color: #2d4059;
  color: #edf2f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FeatureTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #ff9a8b;
`;

export const FeatureDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.4;
`;

export const FeatureListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

import {
  InfoCardWrapper,
  InfoText,
  MoneyandShippingInfoWrapper,
} from "./CardStyles";

export function InfoCard({ info, price, backgroundImage }) {
  return (
    <InfoCardWrapper backgroundImage={backgroundImage}>
      <InfoText>{info}</InfoText>
      <MoneyandShippingInfoWrapper>{price}</MoneyandShippingInfoWrapper>
    </InfoCardWrapper>
  );
}

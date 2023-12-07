import {
  ButtonItem,
  DescriptionsItem,
  IconItem,
  IconUseItem,
  ImageItem,
  Item,
  MakeModelAndYearItem,
  PriceItem,
} from "./ListItem.styled";

export const ListItem = () => {
  return (
    <Item>
      <ImageItem />
      <IconItem>
        <IconUseItem />
      </IconItem>
      <MakeModelAndYearItem></MakeModelAndYearItem>
      <PriceItem></PriceItem>
      <DescriptionsItem></DescriptionsItem>
      <ButtonItem>Learn more</ButtonItem>
    </Item>
  );
};

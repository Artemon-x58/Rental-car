import { ListItem } from "../listItem/listItem";
import { List } from "./CarsList.styled";
import { funcRequest } from "../../js/api";

export const CarsList = () => {
  const getListAll = async () => {
    const result = await funcRequest();
    console.log(result.data);
  };
  getListAll();
  return (
    <List>
      <ListItem />
    </List>
  );
};

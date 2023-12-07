import { useDispatch } from "react-redux";
import { ListItem } from "../listItem/listItem";
import { List } from "./CarsList.styled";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";

export const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars()), [dispatch];
  });

  return (
    <List>
      <ListItem />
    </List>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "../listItem/listItem";
import { BtnLoadMore, List } from "./CarsList.styled";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { Container } from "../GlobalStyles/GlobalStyles";

export const CarsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const valueSelector = (state) => state.cars.items;
  const cars = useSelector(valueSelector);

  return (
    <Container>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id} car={car} />
        ))}
      </List>
      <BtnLoadMore>Load more</BtnLoadMore>
    </Container>
  );
};

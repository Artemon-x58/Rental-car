import PropTypes from "prop-types";
import { ListItem } from "../listItem/listItem";
import { BtnLoadMore, List } from "./CarsList.styled";

import { Container } from "../GlobalStyles/GlobalStyles";

export const CarsList = ({ cars, hasMoreCars, onClick }) => {
  return (
    <Container>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id} car={car} />
        ))}
      </List>
      {hasMoreCars && <BtnLoadMore onClick={onClick}>Load more</BtnLoadMore>}
    </Container>
  );
};

CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
  hasMoreCars: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

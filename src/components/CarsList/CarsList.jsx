import PropTypes from "prop-types";
import { ListItem } from "../listItem/listItem";
import { List } from "./CarsList.styled";

import { Container } from "../GlobalStyles/GlobalStyles";

export const CarsList = ({ cars }) => {
  return (
    <Container>
      <List>
        {cars.map((car) => (
          <ListItem key={car.id} car={car} />
        ))}
      </List>
    </Container>
  );
};

CarsList.propTypes = {
  cars: PropTypes.array.isRequired,
};

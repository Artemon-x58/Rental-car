/* eslint-disable react/no-unescaped-entities */
import {
  GoToCatalogLink,
  Message,
  NoFavoritesContainer,
  Title,
} from "./FavoritesPlaceholder.styled";

export const FavoritesPlaceholder = () => {
  return (
    <NoFavoritesContainer>
      <Title>No Favorite Cars</Title>
      <Message>
        It seems you haven't added any cars to your favorites yet.
      </Message>
      <Message>
        Visit our <GoToCatalogLink to="/catalog">catalog</GoToCatalogLink> to
        add cars to your favorites.
      </Message>
    </NoFavoritesContainer>
  );
};

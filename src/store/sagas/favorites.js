import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as FavoritesActions } from "../ducks/favorites";
import { throws } from "assert";

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select(state =>
      state.favorites.data.find(favorite => favorite.id === data.id)
    );

    if (isDuplicated) throws();

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url
    };

    yield put(FavoritesActions.addFavoriteSuccess(repositoryData));
  } catch (error) {
    yield put(
      FavoritesActions.addFavoriteFailure("Erro ao adicionar repositório")
    );
  }
}

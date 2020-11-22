import { atom, selector } from "recoil";

export interface SearchState {
  key: string;
  category: string;
  city: string;
}

export const searchState = atom<SearchState>({
  key: "searchState",
  default: {
    key: "",
    category: "",
    city: "",
  },
});

export const searchKey = selector<string>({
  key: "searchKeyState",
  get: ({ get }) => {
    const state = get(searchState);
    return state.key;
  },
});

export const searchCategory = selector<string>({
  key: "searchCategoryState",
  get: ({ get }) => {
    const state = get(searchState);
    return state.category || "Not selected";
  },
});

export const searchCity = selector<string>({
  key: "searchCityState",
  get: ({ get }) => {
    const state = get(searchState);
    return state.city || "Not selected";
  },
});

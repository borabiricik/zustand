import { instance } from "@utils/axios";
import { ICountriesState, ICountry } from "types/store/countries";
import { create } from "zustand";

export const useCountiesStore = create<ICountriesState>()((set) => ({
  countries: null,
  getCountries: async () => {
    const response: ICountry[] = await instance.get("?fields=name,flags");
    set({ countries: response.slice(0, 20) });
  },
}));

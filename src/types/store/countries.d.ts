export interface Eng {
  official: string;
  common: string;
}

export interface NativeName {
  eng: Eng;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface RootObject {
  name: Name;
  flags: Flags;
}

export interface ICountry {
  name: Name;
  flags: Flags;
}

export interface ICountriesState {
  countries: ICountry[] | null;
  getCountries: () => Promise<void>;
}

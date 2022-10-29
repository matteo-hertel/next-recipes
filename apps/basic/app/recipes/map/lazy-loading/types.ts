export interface FakeCompanies {
  id: number;
  name: string;
  email: string;
  vat: string;
  phone: string;
  country: string;
  addresses: FakeAddress[];
  website: string;
  image: string;
  contact: FakeContact;
}

export interface FakeAddress {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  county_code: string;
  latitude: number;
  longitude: number;
}

export interface FakeContact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: Date;
  gender: string;
  address: FakeAddress;
  website: string;
  image: string;
}

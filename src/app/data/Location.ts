import { Country } from 'src/app/data/Country';
export interface Location{

  locationId:number;
  streetAddress :string
  postalCode:string ;
  city:string ;
  stateProvince :string;
  country:Country
}

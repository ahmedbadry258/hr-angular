import { Country } from './Country';
import { Location } from './Location';
export interface Department{

  departmentId:number;
  departmentName:string;
  managerId:number;
  location:Location
  // location :{
  //   locationId:number;
  //   streetAddress :string;
  //   postalCode:string ;
  // city:string ;
  // stateProvince :string;
  // country:Country
  // };
}

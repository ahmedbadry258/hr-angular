import { Department } from "./Department";
import { Job } from "./Job";


export  interface Employee{
    employeeId: number;
    firstName: string;
    lastName:  string;
    email:  string;
    phoneNumber: string;
    hireDate:  string;
    salary: string;
    commissionPct:number,
    managerId: number,
    department:Department,
    job:Job
  }

export interface EmployeeResolved{
employee:Employee;
error:any
}

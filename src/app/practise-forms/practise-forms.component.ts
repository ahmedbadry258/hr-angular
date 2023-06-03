import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Customer } from '../data/customer';

function numberValidator(
  c: AbstractControl
): { [key: string]: boolean } | null {
  if (c.value !== null && isNaN(c.value)) {
    return { notANumber: true };
  }
  return null;
}
function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
}

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let emailControl = c.get('email');
  let confirmEmailControl = c.get('confirmEmail');
  if (emailControl?.pristine || confirmEmailControl?.pristine) {
    return null;
  }
  if (emailControl?.value === confirmEmailControl?.value) {
    return null;
  }
  return { match: true };
}
@Component({
  selector: 'app-practise-forms',
  templateUrl: './practise-forms.component.html',
  styleUrls: ['./practise-forms.component.css'],
})
export class PractiseFormsComponent {
  customerForm: FormGroup;
  customer = new Customer();
firstNameMessage:string='';
emailMessage: string='';

private validationMessages = {
  required: 'Please enter your email address.',
  email: 'Please enter a valid email address.'
};
get addresses():FormArray{
  return <FormArray>this.customerForm.get('addresses');
}
  private validationMessage={
    required:"First Name is Required",
    minlength:"min length  must be 3 character"
  }
  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [  '',[Validators.required,Validators.maxLength(20),Validators.minLength(3)],],
      emailGroup: this.fb.group(
        { email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required]],},{ validator: emailMatcher }
      ),
      phone: [''],
      notification: ['email'],
      rating: [null, [ratingRange(1, 5)]],
      sendCatalog:true,
      addresses:this.fb.array([this.buildAddresses()])

    });
    this.customerForm.get('notification')?.valueChanges.subscribe(
      value=> {      this.setNotification(value);
        console.log(value);}
    )
  }

  ngOnInit() {
    // const firstNameControl=this.customerForm.get('firstName');
    // firstNameControl?.valueChanges.subscribe(
    //   value =>this.setMessage(firstNameControl)
    // )
  }
  // setMessage(c: AbstractControl): void {
  //   this.emailMessage = '';
  //   if ((c.touched || c.dirty) && c.errors) {
  //     this.emailMessage = Object.keys(c.errors).map(
  //       key => this.validationMessages[key]).join(' ');
  //   }
  // }
  save() {
    console.log(this.customerForm.value);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
  populateTestData() {}

  setNotification(notify: string) {
    const phoneControl = this.customerForm.get('phone');

    if (notify === 'text') {
      phoneControl?.setValidators([Validators.required, numberValidator]);
    } else {
      phoneControl?.clearValidators();
    }
    phoneControl?.updateValueAndValidity();
  }
  buildAddresses():FormGroup{
return this.fb.group({
  addressType:'home',
  address1:'',
  address2:'',
  city:'',
  state:'',
  zip:''
})
}
addAddresses():void {
  this.addresses.push(this.buildAddresses())
}
  }


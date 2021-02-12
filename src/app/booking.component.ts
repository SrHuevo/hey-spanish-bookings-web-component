import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'custom-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BookingComponent implements OnInit {

  courseFormGroup: FormGroup;
  dayAndHourFormGroup: FormGroup;
  bookingFormGroup: FormGroup;
  studentsFormArray: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.courseFormGroup = this.formBuilder.group({
      course: ['', Validators.required],
      testClass: [false],
    });
    this.dayAndHourFormGroup = this.formBuilder.group({
      dayAndHour: ['', Validators.required]
    });
    this.studentsFormArray = this.formBuilder.array([]);
    this.addStudent();
    this.bookingFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      students: this.studentsFormArray,
      permissionPostMediaPhotos: [false],
      aboutUs: ['', Validators.required],
      coupon: [''],
    });
  }

  addStudent() {
    this.studentsFormArray.push(this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    }));
  }

  removeStudent(i: number) {
    this.studentsFormArray.removeAt(i);
  }
}

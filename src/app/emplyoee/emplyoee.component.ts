import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emplyoee',
  templateUrl: './emplyoee.component.html',
  styleUrls: ['./emplyoee.component.css'],
})
export class EmplyoeeComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    const secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}

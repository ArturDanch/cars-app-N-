import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'firstName': new FormControl (null, [Validators.required, Validators.pattern( '[A-Z][a-z]*') ]),
      'lastName': new FormControl (null, [Validators.required, Validators.pattern('[A-Z][a-z]*') ]),
        'email': new FormControl(null, [Validators.required, Validators.email ]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(7)]),
    });
  }
    onCreate = () => {
    this.userForm.reset();
  }
}

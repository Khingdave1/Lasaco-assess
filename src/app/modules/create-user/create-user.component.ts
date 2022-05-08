import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  hide: boolean = true
  loading: boolean = false;
  returnUrl = '';
  error = '';
  isSignedin: boolean = false;
  errorMessage: string = "";
  userDetailsPopup: boolean = false;
  userEmail: string = "";
  userPassword: string = "";

  roles: Role[] = [
    { value: "", viewValue: "Select Role:" },
    { value: "Entry-Level", viewValue: "Entry Level" },
    { value: "Internship", viewValue: "Internship" },
    { value: "Driver", viewValue: "Driver" }
  ]

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl' || '/']

    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }
  }

  // Form initialization and validation
  createUserForm: FormGroup = this.formBuilder.group({
    fullName: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    telNumber: ['', { validators: [Validators.required], updateOn: "change" }],
    role: ['', { validators: [Validators.required], updateOn: "change" }],
    password: ['', { validators: [Validators.required], updateOn: "change" }]
  })

  async createUser() {
    // If form is invalid don't submit
    if (this.createUserForm.invalid) {
      // return
    }
    // Loading
    this.loading = true

    let payload = {
      fullName: this.createUserForm.value.fullName,
      emailAddress: this.createUserForm.value.email,
      telNumber: this.createUserForm.value.telNumber,
      role: this.createUserForm.value.role,
      password: this.createUserForm.value.password
    }

    // Set User details
    this.userEmail = payload.emailAddress
    this.userPassword = payload.password

    await this.firebaseService.createUser(payload.emailAddress, payload.password, payload)
      .then(res => {


      }).catch(err => {
        this.errorMessage = err.message
        this.loading = false
      })

    if (this.firebaseService.isLogggedIn === true) {
      this.isSignedin = true
      this.userDetailsPopup = true
      // Navigate to Dashboard
      // this.router.navigate(['admin/create-user'])
      // alert('Welcome ' + payload.emailAddress)
    }
  }

  // Close Modal
  closeModal() {
    this.userDetailsPopup = false
    // Clear form
    // this.createUserForm.reset()
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encrypt-page',
  templateUrl: './encrypt-page.component.html',
  styleUrls: ['./encrypt-page.component.sass']
})
export class EncryptPageComponent implements OnInit {
  private form: FormGroup; 
  private code = "be open to whatever comes nxt"; 

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.setForm(); 
  }

  setForm() {
    this.form = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }

  verifyCode() {
    if (this.form.value['code'].toLowerCase() === this.code) {
      this.router.navigate(['/end']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.sass']
})
export class ScrollPageComponent implements OnInit {
  private form: FormGroup; 
  private code1 = 9; 
  private code2 = 3; 
  private code3 = 2; 

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.setForm(); 
  }

  setForm() {
    this.form = this.formBuilder.group({
      code1: ['', Validators.required], 
      code2: ['', Validators.required],
      code3: ['', Validators.required]
    });
  }

  verifyCode() {
    if (this.form.value['code1'] == this.code1 && this.form.value['code2'] == this.code2 && this.form.value['code3'] == this.code3) {
      this.router.navigate(['/part-three']);
    }
  }

}

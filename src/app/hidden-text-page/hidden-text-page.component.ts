import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hidden-text-page',
  templateUrl: './hidden-text-page.component.html',
  styleUrls: ['./hidden-text-page.component.sass']
})
export class HiddenTextPageComponent implements OnInit {
  private form: FormGroup; 
  private code = "schildpad"; 

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
      this.router.navigate(['/part-two']);
    }
  }

}

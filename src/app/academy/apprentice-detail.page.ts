import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'trg-apprentice-detail',
  templateUrl: './apprentice-detail.page.html',
  styleUrls: ['./apprentice-detail.page.scss']
})
export class ApprenticeDetailPage implements OnInit {
  mainForm: FormGroup;
  submitted = false;

  constructor(public form: FormBuilder) {
    this.mainForm = this.form.group({
      username: ['', Validators.minLength(6)],
      email: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('');
    this.submitted = true;
  }

  ngOnInit() {
  }

}

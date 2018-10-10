import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html'
})
export class EditTeamComponent implements OnInit {
  form: FormGroup;
  errMsg: String = '';
  error: Boolean = false;
  successMsg = 'Nouvelle equipe ajouté !'
  success: Boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.createForm();
  }

  onCancel(): void {
    this.router.navigate(['dashboard/teams']);
  }
  
  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if(this.form.valid && this.form.value.name.trim()) {
      this.teamService.post(this.form.value)
      .subscribe((team : Team)=> {
        this.form.reset();
        this.showSuccess();
      }, 
      err => { 
        this.errMsg = err.error.err;
        this.showError()
      });
    }
  }

  showError() {
    this.error = true;
    setTimeout(() => this.error = false, 2000);
  }

  showSuccess() {
    this.success = true;
    setTimeout(() => this.success = false, 2000);
  }

}

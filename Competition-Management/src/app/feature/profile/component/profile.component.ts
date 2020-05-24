import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../service/profile.service';
import {Person} from '../model/person';
import {Athlete} from '../../club/model/athlete';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Person;

  genderSelected: string;
  genders: string[] = ['Male', 'Female'];

  initialDate: FormControl;

  hide1 = true;
  hide2 = true;

  constructor(private route: ActivatedRoute,
              private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.profileService.getPerson(params.get('id')).subscribe((data: Athlete) => {
        this.user = data;
        this.genderSelected = this.user.gender;
        this.initialDate = new FormControl(this.user.birthday);
      });
    });


  }

}

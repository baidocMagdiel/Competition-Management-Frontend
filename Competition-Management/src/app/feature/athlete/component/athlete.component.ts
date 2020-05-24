import {Component, OnInit} from '@angular/core';
import {Athlete} from '../../club/model/athlete';
import {AthleteMock} from '../../club/mock/athlete.mock';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute} from '@angular/router';
import {AthleteService} from '../service/athlete.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {

  displayedColumns: string[] = ['competition', 'category', 'rank', 'points'];
  historyDataSource = new MatTableDataSource([]);
  athlete: Athlete;

  constructor(private route: ActivatedRoute,
              private athleteService: AthleteService) {
  }

  ngOnInit(): void {
    this.historyDataSource.data = AthleteMock;
    this.route.paramMap.subscribe((params) => {

      this.athleteService.getAthlete(params.get('id')).subscribe((data: Athlete) => {
        this.athlete = data;
      });
    });
  }

  upate(): void {
    this.athleteService.updateAthlete(this.athlete).subscribe();
  }
}

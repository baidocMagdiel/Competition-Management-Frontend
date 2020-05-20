import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CompetitionMock} from "../mock/competition.mock";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'place'];
  competitionDataSource = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    this.competitionDataSource.data = CompetitionMock;
  }

}

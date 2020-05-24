import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  id = 8;

  ngOnInit(): void {
  }

}

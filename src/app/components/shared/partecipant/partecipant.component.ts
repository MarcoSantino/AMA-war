import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-partecipant',
  templateUrl: './partecipant.component.html',
  styleUrls: ['./partecipant.component.scss']
})
export class PartecipantComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}

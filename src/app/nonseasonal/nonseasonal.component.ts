import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BattleTagProfile, Hero} from '../get-profile.service';

@Component({
  selector: 'app-nonseasonal',
  templateUrl: './nonseasonal.component.html',
  styleUrls: ['./nonseasonal.component.css']
})
export class NonseasonalComponent {
  @Input() heroes: Hero[];
  constructor() { }

}

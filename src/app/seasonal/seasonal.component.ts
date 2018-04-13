import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Hero} from '../get-profile.service';

@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css']
})
export class SeasonalComponent {
  @Input() heroes: Hero[];
  constructor() { }
}

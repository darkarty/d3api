import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Hero} from '../get-profile.service';

@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.css']
})
export class SeasonalComponent {
  _seasonalHeroes: any;
  @Input()
  set profile(profile: any) {
    this._seasonalHeroes = profile.heroes.filter(x => x.seasonal === true);
  }
  get profile(): any {return this._seasonalHeroes; }
  constructor() { }
}

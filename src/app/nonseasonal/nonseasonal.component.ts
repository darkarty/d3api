import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BattleTagProfile, Hero} from '../get-profile.service';

@Component({
  selector: 'app-nonseasonal',
  templateUrl: './nonseasonal.component.html',
  styleUrls: ['./nonseasonal.component.css']
})
export class NonseasonalComponent {
  _nonSeasonalHeroes: any;
  @Input()
  set profile(profile: any) {
    this._nonSeasonalHeroes = profile.heroes.filter(x => x.seasonal === false);
  }
  get profile(): any {return this._nonSeasonalHeroes; }
  constructor() { }

}

import { Component } from '@angular/core';
import {BattleTagProfile, GetProfileService, Hero} from '../get-profile.service';

@Component({
  selector: 'app-enter-battletag',
  templateUrl: './enter-battletag.component.html',
  styleUrls: ['./enter-battletag.component.css']
})
export class EnterBattletagComponent {

  battleTagInterface = {
    name: ''
  };
  seasonalHeroes: Hero[];
  nonSeasonalHeroes: Hero[];
  battleTagProfileReturned: BattleTagProfile;
  constructor(private getProfileService: GetProfileService) {}
  getProfile() {
    this.getProfileService
      .getProfile(encodeURIComponent(this.battleTagInterface.name))
      .subscribe(data => this.battleTagProfileReturned = data);
    this.seasonalHeroes = this.battleTagProfileReturned.heroes.filter(x => x.seasonal === true);
    this.nonSeasonalHeroes = this.battleTagProfileReturned.heroes.filter(x => x.seasonal === false);
  }
}

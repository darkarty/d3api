import {Component, OnInit} from '@angular/core';
import {BattleTagProfile, GetProfileService, Hero} from '../get-profile.service';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-enter-battletag',
  templateUrl: './enter-battletag.component.html',
  styleUrls: ['./enter-battletag.component.css']
})
export class EnterBattletagComponent implements OnInit {

  battleTagInterface = {
    name: ''
  };
  battleTagProfileReturned: any;
  apiKey: string;
  constructor(private getProfileService: GetProfileService) {}
  getProfile() {
    this.getProfileService.buildGetProfileRequest(encodeURIComponent(this.battleTagInterface.name), this.apiKey)
      .subscribe( data => this.battleTagProfileReturned = data);
  }
  ngOnInit() {
    this.getProfileService.getKey().subscribe(data => this.apiKey = data);
  }
}



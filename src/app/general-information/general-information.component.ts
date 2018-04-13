import {Component, Input, OnInit} from '@angular/core';
import {BattleTagProfile, Hero} from '../get-profile.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent {

  @Input() battleTag: BattleTagProfile;

  @Input() seasonalHeroes: Hero[];
}

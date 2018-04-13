import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BattleTagProfile, GetProfileService, Hero} from '../get-profile.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  @Input() heroes: Hero[];
}

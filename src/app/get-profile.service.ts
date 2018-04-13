import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


export interface BattleTagProfile {
  battleTag: string;
  paragonLevel: number;
  paragonLevelHardcore: number;
  paragonLevelSeason: number;
  paragonLevelSeasonHardcore: number;
  guildName: string;
  heroes: Hero[];
}

export interface Hero {
  name: string;
  class: string;
  level: number;
  paragonLevel: number;
  hardcore: boolean;
  seasonal: boolean;
  dead: boolean;
}
@Injectable()

export class GetProfileService {
  apiKey: String;
  constructor(private http: HttpClient) { }
  public getProfile(battleTag): Observable<BattleTagProfile> {
    return this.http.get<BattleTagProfile>('https://us.api.battle.net/d3/profile/' + battleTag +
      '/?locale=en_US&apikey=' + this.getKey());
  }
  public getKey() {
    return this.http.get('assets/foo.txt').subscribe(data => this.apiKey = data.toString());
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import { Router } from '@angular/router';
import { ILastSix, IResponse } from '../app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  team = {
    id: '',
  };
  teams: IResponse[] = [];
  selectedTeams: IResponse[] = [];

  constructor(private _as: AppService, private _router: Router) {}

  ngOnInit() {
    this._as.getTeams().subscribe(
      (res) => {
        console.log(res);
        this.teams = res.response;
        console.log(this.teams, 'fromt his.teams');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitTeam() {
    let searched_team = this.teams.filter(
      (x) => x.team.id === +this.team.id
    )[0];
    console.log(searched_team, 'from searched_team again');
    let if_team = this.selectedTeams.filter(
      (x: { team: { id: number } }) => x.team.id === +this.team.id
    )[0];
    if (!if_team) {
      searched_team.outcome = [];
      searched_team.goals_scored = 0;
      searched_team.goals_conceded = 0;
      this._as.getLastSix(searched_team.team.id).subscribe(
        (res) => {
          let data = res.response;
          console.log(data, 'fromd ata');
          data.forEach((team: ILastSix) => {
            if (team.teams.away.id === +searched_team.team.id) {
              if (team.teams.away.winner === true) {
                searched_team.outcome?.push('W');
                searched_team.goals_scored! += team.goals.away;
                searched_team.goals_conceded += team.goals.home;
              } else if (team.teams.away.winner === false) {
                searched_team.outcome?.push('L');
                searched_team.goals_scored! += team.goals.away;
                searched_team.goals_conceded += team.goals.home;
              } else {
                searched_team.outcome?.push('D');
                searched_team.goals_scored! += team.goals.away;
                searched_team.goals_conceded += team.goals.home;
              }
            } else {
              if (team.teams.home.winner === true) {
                searched_team.outcome?.push('W');
                searched_team.goals_scored! += team.goals.home;
                searched_team.goals_conceded += team.goals.away;
              } else if (team.teams.home.winner === false) {
                searched_team.outcome?.push('L');
                searched_team.goals_scored! += team.goals.home;
                searched_team.goals_conceded += team.goals.away;
              } else {
                searched_team.outcome?.push('D');
                searched_team.goals_scored! += team.goals.home;
                searched_team.goals_conceded += team.goals.away;
              }
            }
          });
          searched_team.teams = res.response;
          searched_team.goals_scored = parseFloat(
            (searched_team.goals_scored! / 6).toFixed(1)
          );
          searched_team.goals_conceded = parseFloat(
            (searched_team.goals_conceded / 6).toFixed(1)
          );
          this.selectedTeams.push(searched_team);
          console.log(searched_team, 'from factorized');
        },
        (err) => console.log(err)
      );
    }
  }
  close(id: number) {
    this.selectedTeams = this.selectedTeams.filter(
      (x: { team: { id: number } }) => x.team.id !== id
    );
  }

  results(code: string, i: ILastSix[]) {
    console.log(i, 'from i');
    this._as.lastsix = i;
    this._router.navigate(['results', code]);
  }
}



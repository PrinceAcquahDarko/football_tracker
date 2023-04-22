import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  lastsix = this._as.lastsix;
  constructor(private _as: AppService, private _router: Router) {}
  ngOnInit() {
  }
  routeToHome() {
    this._router.navigate(['home']);
  }
}

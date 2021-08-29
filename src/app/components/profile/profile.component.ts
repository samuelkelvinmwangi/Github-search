import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ProfileService:ProfileService) {
    this.ProfileService.getProfileInfo().subscribe((profile: any) => {
      console.log(profile)
    });
  }

  ngOnInit(): void {
  }

}

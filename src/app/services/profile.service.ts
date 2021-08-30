import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs'

@Injectable()
export class ProfileService {
  [x: string]: any;

private username:string | undefined;
private clientid ='Iv1.f337d10cff4c103d';
private clientsecret ='17457da59545aa1fc2f6027e90ad843ccaff4078';

  constructor(HttpClientModule:HttpClientModule) {

    console.log("service is now ready")
    this.username = 'samuelkelvinmwangi';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid
     + "&client_secret=" + this.clientsecret)
     .map((res: { jason: () => any; }) => res.jason())
     }

     getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid
      + "&client_secret=" + this.clientsecret)
      .map((res: { jason: () => any; }) => res.jason())
     }
}


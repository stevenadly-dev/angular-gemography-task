import { Repo } from "./../models/repo.model";
import { githubTotalRes } from "./../models/githubTotalRes.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { from } from 'rxjs
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class GithubProfileService {
  constructor(private http: HttpClient) {}

  getData(num: number) {
    return this.http
      .get(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${num}`
      )
      .pipe(
        map((res: githubTotalRes) => {
          let allRepos: Repo[] = [];
          res.items.forEach((item) => {
            allRepos.push({
              name: item.name,
              full_name: item.full_name,
              description: item.description,
              stargazers_count: item.stargazers_count,
              open_issues_count: item.open_issues_count,
              avatar_url: item.owner.avatar_url,
            });
          });
          return allRepos;
        })
      );
  }
}

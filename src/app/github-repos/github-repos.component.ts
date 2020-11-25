import { Repo } from "./../shared/models/repo.model";
import { GithubProfileService } from "./../shared/services/github-profile.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-github-repos",
  templateUrl: "./github-repos.component.html",
  styleUrls: ["./github-repos.component.scss"],
})
export class GithubReposComponent implements OnInit {
  repos: Repo[] = [];
  currentPageNum: number = 1;
  constructor(private githubProfileService: GithubProfileService) {}

  ngOnInit(): void {
    this.getData(this.currentPageNum);
  }

  getData(num: number) {
    this.githubProfileService.getData(num).subscribe((res) => {
      this.repos.push(...res);
    });
  }

  onScroll() {
    this.currentPageNum++;
    this.getData(this.currentPageNum);
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { GithubReposComponent } from "./github-repos/github-repos.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, GithubReposComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

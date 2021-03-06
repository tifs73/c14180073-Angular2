import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DetailComponent } from "./detail/detail.component";
import { RouterModule, Routes } from "@angular/router";
import { FavoriteComponent } from "./favorite/favorite.component";
import { GlobalVarService } from "./global-var.service";
import { InputComponent } from "./input/input.component";

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "favorite", component: FavoriteComponent },
  { path: "input", component: InputComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    DetailComponent,
    FavoriteComponent,
    InputComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalVarService]
})
export class AppModule {}

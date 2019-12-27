import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UsersListsComponent } from "./users/users-lists/users-lists.component";
import { UserComponent } from "./users/user/user.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersListsComponent,
    UserComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

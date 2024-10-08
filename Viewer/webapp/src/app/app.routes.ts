import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "friends", component: FriendsComponent},
    {path: "", component: NavbarComponent},
    {path: "profile", component: ProfileComponent},
]; 

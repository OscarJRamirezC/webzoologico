import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import {NgModule} from '@angular/core'

export const routes: Routes = [
    {path : 'animal', component:AnimalComponent}
];

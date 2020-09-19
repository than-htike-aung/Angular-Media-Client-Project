
import { RouterModule, Routes } from "@angular/router"

import {HomeComponent} from '../home/home.component';
import {DetailComponent} from "../detail/detail.component";

const BMROUTE : Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:id', component:DetailComponent}
];

export const BM_ROUTE = RouterModule.forRoot(BMROUTE);

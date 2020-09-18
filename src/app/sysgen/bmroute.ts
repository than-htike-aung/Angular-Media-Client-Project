
import { RouterModule, Routes } from "@angular/router"

import {HomeComponent} from '../home/home.component';

const BMROUTE : Routes = [
  {path: '', component: HomeComponent}
];

export const BM_ROUTE = RouterModule.forRoot(BMROUTE);

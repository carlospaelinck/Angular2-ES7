import { Routes } from '@ngrx/router'

import { IndexViewComponent } from './components/index/index.view'
import { BuilderViewComponent } from './components/builder/builder.view'
import { BuilderStepComponent} from './components/builder/step/builder.step'

export const routes: Routes = [
  {
    path: '/',
    component: IndexViewComponent
  },
  {
    path: '/builder',
    component: BuilderViewComponent,
    children: [
      {
        path: ':step',
        component: BuilderStepComponent
      }
    ]
  }
]

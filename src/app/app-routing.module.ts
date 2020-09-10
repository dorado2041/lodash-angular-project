import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChunkComponent } from './lodash/array/chunk/chunk.component';
import { NotFoundComponent } from './common/component/notfound/not.found.component';
import { CompactComponent } from './lodash/array/compact/compact.component';

const routes: Routes = [
  { path: 'array/chunk', component: ChunkComponent },
  { path: 'array/compact', component: CompactComponent },

  { path: 'default', component: NotFoundComponent },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: '**', redirectTo: '/default' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


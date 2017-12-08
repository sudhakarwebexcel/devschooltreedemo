import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'student-details', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'student-strength-details', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'student-class-list', loadChildren: './form/form.module#FormModule' },
            { path: 'student-edit-profile', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'student-custom-filter', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

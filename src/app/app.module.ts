// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';

// Services
// import { DataService } from './services/data.service'; - Se declara dentro del propio services
// Components
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo.component';
import { MatCatalogoComponent } from './components/matcatalogo/matcatalogo.component';

// Directives
import { MatCatalogoDirective } from './directives/mat-catalogo.directive';
import { MatCatalogo2Directive } from './directives/mat-catalogo2.directive';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    MatCatalogoComponent,
    MatCatalogoDirective,
    MatCatalogo2Directive
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatCatalogoComponent]
})
export class AppModule { }

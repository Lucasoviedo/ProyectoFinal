import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnIngresarComponent } from './components/btn-ingresar/btn-ingresar.component';
import { ArgentinaProgramaComponent } from './components/headerLogos/argentina-programa/argentina-programa.component';
import { RedesComponent } from './components/headerLogos/redes/redes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//node_modules/bootstrap
import { BannerComponent } from './components/headerLogos/banner/banner.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { StackTecnologicoComponent } from './components/stack-tecnologico/stack-tecnologico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnIngresarComponent,
    ArgentinaProgramaComponent,
    RedesComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    StackTecnologicoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { CalenderComponent } from './calender/calender.component';
import { ChartComponent } from './chart/chart.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { EditorComponent } from './editor/editor.component';
import { FontComponent } from './font/font.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormXEditableComponent } from './form-x-editable/form-x-editable.component';
import { GridComponent } from './grid/grid.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { InteractiveTimelineComponent } from './interactive-timeline/interactive-timeline.component';
import { KnobComponent } from './knob/knob.component';
import { MapComponent } from './map/map.component';
import { MessengerComponent } from './messenger/messenger.component';
import { ModalComponent } from './modal/modal.component';
import { PanelComponent } from './panel/panel.component';
import { SliderComponent } from './slider/slider.component';
import { StaticTimelineComponent } from './static-timeline/static-timeline.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
  ],

  declarations: [
    ButtonComponent,
    CalenderComponent,
    ChartComponent,
    CodemirrorComponent,
    DropdownComponent,
    DropzoneComponent,
    EditorComponent,
    FontComponent,
    FormControlComponent,
    FormWizardComponent,
    FormXEditableComponent,
    GridComponent,
    ImageCropComponent,
    InteractiveTimelineComponent,
    KnobComponent,
    MapComponent,
    MessengerComponent,
    ModalComponent,
    PanelComponent,
    SliderComponent,
    StaticTimelineComponent,
    TabComponent,
    TableComponent,
  ],

  exports: [
    CommonModule,
    ButtonComponent,
    CalenderComponent,
    ChartComponent,
    CodemirrorComponent,
    DropdownComponent,
    DropzoneComponent,
    EditorComponent,
    FontComponent,
    FormControlComponent,
    FormWizardComponent,
    FormXEditableComponent,
    GridComponent,
    ImageCropComponent,
    InteractiveTimelineComponent,
    KnobComponent,
    MapComponent,
    MessengerComponent,
    ModalComponent,
    PanelComponent,
    SliderComponent,
    StaticTimelineComponent,
    TabComponent,
    TableComponent,
  ],
})
export class SharedModule {
}
/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2019 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { CoreModule } from '@alfresco/adf-core';
import { ExtensionsModule } from '@alfresco/adf-extensions';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { CoreExtensionsModule } from '../../extensions/core.extensions.module';
import { AppCommonModule } from '../common/common.module';
import { ContextMenuItemComponent } from './context-menu-item.component';
import { OutsideEventDirective } from './context-menu-outside-event.directive';
import { ContextMenuComponent } from './context-menu.component';
import { ContextActionsDirective } from './context-menu.directive';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CoreExtensionsModule.forChild(),
    CoreModule.forChild(),
    AppCommonModule,
    ExtensionsModule
  ],
  declarations: [
    ContextActionsDirective,
    ContextMenuComponent,
    ContextMenuItemComponent,
    OutsideEventDirective
  ],
  exports: [
    OutsideEventDirective,
    ContextActionsDirective,
    ContextMenuComponent,
    ContextMenuItemComponent
  ],
  entryComponents: [ContextMenuComponent]
})
export class ContextMenuModule {}

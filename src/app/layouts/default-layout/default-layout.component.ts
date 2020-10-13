import {Component, HostBinding, HostListener, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SettingsService} from '@app/settings/settings.service';
import {NavigationService} from '@gaxon/components';
import {Subscription} from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import {LayoutConfig} from './layout.config';

import {NavigationModel} from './navigation/navigation.model';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles:[
    
  ]
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-root__inner';

  settings: any;
  themes = ['light', 'semidark', 'dark'];
  modes = ['framed', 'full-width', 'boxed'];
  currentTheme = '';
  currentThemeColor = '';

  onSettingChanged: Subscription;

  constructor(private navService: NavigationService,
              private settingService: SettingsService,
              @Inject(DOCUMENT) private document: any) {
    this.settingService.setSettings(new LayoutConfig().configs);

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.updateLayout();
        this.document.body.classList.add('dt-layout--' + this.settings.layout);
      }
    );

    // Set the navigation model
    this.navService.setNavigationModel(new NavigationModel());
  }

  @HostListener('window:resize')
  onResize() {
    this.updateLayout();
  }

  ngOnInit() {
  }

  /**
   * On click overlay
   */
  onClickOverlay() {
    this.settings.activeNavDrawer = false;
    this.settingService.setSettings(this.settings);
  }

  /**
   * Update layout
   */
  updateLayout() {
    if (this.settings.navigationFixed && window.innerWidth >= 992) {
      this.document.body.classList.add('dt-sidebar--fixed');
    } else {
      this.document.body.classList.remove('dt-sidebar--fixed');
    }

    if (this.settings.headerFixed) {
      this.document.body.classList.add('dt-header--fixed');
    } else {
      this.document.body.classList.remove('dt-header--fixed');
    }

    if (this.settings.navigationStyle === 'folded' && window.innerWidth >= 992) {
      this.document.body.classList.add('dt-sidebar--folded');
    } else {
      this.document.body.classList.remove('dt-sidebar--folded');
    }

    if (this.currentTheme !== this.settings.theme || this.currentThemeColor !== this.settings.themeColor) {
      this.applyTheme(this.settings.theme);
    }

    this.applyNewLayoutMode(this.settings.mode);
  }

  /**
   * Apply New Theme
   * @param newTheme
   */
  applyTheme(newTheme) {
    this.currentTheme = newTheme;
    this.currentThemeColor = this.settings.themeColor;

    this.themes.map((theme) => {
      if (newTheme === theme) {
        this.document.body.classList.add('theme-' + theme);
      } else {
        this.document.body.classList.remove('theme-' + theme);
      }
    });
  }

  /**
   * Apply New Mode
   * @param newLayoutMode
   */
  applyNewLayoutMode(newLayoutMode) {
    this.modes.map((layoutMode) => {
      if (newLayoutMode === layoutMode) {
        this.document.body.classList.add('dt-layout--' + layoutMode);
      } else {
        this.document.body.classList.remove('dt-layout--' + layoutMode);
      }
    });
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }
}



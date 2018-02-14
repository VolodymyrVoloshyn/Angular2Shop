import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ConfigOption } from './model/config-option';

@Injectable()
export class ConfigOptionsService {
  private configOptionConfigKey = 'CONFIG_OPTION_KEY';

  constructor(private localStorageService: LocalStorageService) {
  }

  saveConfigOption(optionItem: ConfigOption): void {
    this.localStorageService.setItem(this.configOptionConfigKey, JSON.stringify(optionItem));
  }

  getConfigOption(): ConfigOption {
    return this.localStorageService.getItem(this.configOptionConfigKey);
  }
}

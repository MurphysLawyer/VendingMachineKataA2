import { VendingMachineKataA2Page } from './app.po';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('vending-machine-kata-a2 App', function() {
  let page: VendingMachineKataA2Page;

  beforeEach(() => {
    page = new VendingMachineKataA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test');
  });
});

var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    //Create New Charge Methods button on the Charge Methods list
    create_button_listPage: function(){
      return element.all(by.css('[ng-click="showChargeMethodModal()"]')).get(0);
    },

   //  //Charge Methods Create New save button
   //  save_button_createPage: function(){
   //    return browser.driver.findElement(by.css('[type="submit"]'));
   //  },

    //Charge Methods Create Next button @ Overview step
    nextOverview_button_createPage: function(){
      return browser.driver.findElement(by.css('#createChargeMethodForm .modal-footer button'));
    },

    //Detail button on the Charge Methods list
    detail_button_listPage: function(){
      return element.all(by.css('.fa-external-link')).get(0);
    },

    //Edit button on the Charge Methods list
    edit_button_listPage: function(){
      return element.all(by.css('.fa-pencil')).get(0);
    },

   //  //Charge Methods Edit save button
   //  save_button_editPage: function(){
   //    return browser.driver.findElement(by.css('[value="save"]'));
   //  },

   //  //Delete button on the Charge Methods list
   //  delete_button_listPage: function(){
   //    return element.all(by.css('.controls .fa-times')).get(0);
   //  },
    
   //  //Delete confirm button on the Charge Methods list
   //  delete_confirm_listPage: function(){
   //    return element.all(by.css('.confirm')).get(0);
   //  },

    //Charge Methods List Columns
    validate_name_header: function () {
      return element.all(by.css('.table th')).get(0);
    },

    validate_type_header: function () {
      return element.all(by.css('.table th')).get(1);
    },

    validate_description_header: function () {
      return element.all(by.css('.table th')).get(2);
    },

    validate_oneTimeFee_header: function () {
      return element.all(by.css('.table th')).get(3);
    },

    validate_cadenceTiming_header: function () {
      return element.all(by.css('.table th')).get(4);
    },

    validate_chargeTiming_header: function () {
      return element.all(by.css('.table th')).get(5);
    },

    validate_cadenceStartDate_header: function () {
      return element.all(by.css('.table th')).get(6);
    },

    validate_cadenceEndDate_header: function () {
      return element.all(by.css('.table th')).get(7);
    },

    //Charge Methods List columns values(name, type, description, one time fee, cadence timing, charge timing, cadence start date, cadence end date)
    get_name_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(0);
    },

    get_type_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(1);
    },

    get_description_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(2);
    },

    get_oneTimeFee_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(3);
    },

    get_cadenceTiming_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(4);
    },

    get_chargeTiming_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(5);
    },

    get_cadenceStartDate_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(6);
    },

    get_cadenceEndDate_list: function(){
      return element.all(by.css('table tr:nth-child(1) td')).get(7);
    },


    //Charge Methods detail columns values (name, type, description, one time fee, cadence timing, charge timing, cadence start date, cadence end date)
    get_name_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(0);
    },

    get_type_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(4);
    },

    get_description_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(2);
    },

    get_oneTimeFee_detail: function(){
      return element.all(by.css('.panel .col-xs-4')).get(6);
    },

    get_cadenceTiming_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(3);
    },

    get_chargeTiming_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(1);
    },

    get_cadenceStartDate_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(5);
    },

    get_cadenceEndDate_detail: function(){
      return element.all(by.css('.panel .col-xs-4.ng-binding')).get(6);
    },

    // oneTimeFee

    //Charge Methods Create New modal field values(name, type, description, oneTimeFee, cadenceTiming, chargeTiming, cadenceStartDate, cadenceStartDateMonth, cadenceEndDate, cadenceEndDateMonth)
    type_name_create: function(text){
        element(by.name('chargeMethodName')).sendKeys(text);
      return browser.driver.sleep(1000);
    },

    type_description_create: function(text){
        element(by.name('chargeMethodDescription')).sendKeys(text);
      return browser.driver.sleep(1000);
    },

    clickCheckBox_oneTimeFee_create: function(){
      return element(by.id('#chargeMethodFee')).get(0);
    },
    get_oneTimeFee_create: function(){
      return element(by.id('#chargeMethodFee')).get(0).checked();
    },

    clickDropdown_type_create: function(){
      return element.all(by.css('.select-type button')).get(0);
    },
    select_type_create: function(text){
      return element.all(by.css('.select-type .dropdown-menu li')).get(1);
      //return element(by.cssContainingText('.select-type .dropdown-menu .text', text));
    },
    get_type_create: function(){
      return element.all(by.css('.select-type .dropdown-menu .text')).get(1).getText();
    },
    
    clickDropdown_chargeTiming_create: function(){
      return element.all(by.css('.select-charge-timing button')).get(0);
    },
    select_chargeTiming_create: function(){
      return element.all(by.css('.select-charge-timing .dropdown-menu .text')).get(1);
    },
    get_chargeTiming_create: function(){
      return element.all(by.css('.select-charge-timing .dropdown-menu .text')).get(1).getText();
    },
        
    clickDropdown_cadenceTiming_create: function(){
      return element.all(by.css('.select-cadence-timing button')).get(0);
    },
    select_cadenceTiming_create: function(){
      return element.all(by.css('.select-cadence-timing .dropdown-menu .text')).get(1);
    },
    get_cadenceTiming_create: function(){
      return element.all(by.css('.select-cadence-timing .dropdown-menu .text')).get(1).getText();
    },
    
    clickDropdown_cadenceStartDate_create: function(){
      return element.all(by.css('.select-cadence-start button')).get(0);
    },
    select_cadenceStartDate_create: function(){
      return element.all(by.css('.select-cadence-start .dropdown-menu .text')).get(0);
    },
    get_cadenceStartDate_create: function(){
      return element.all(by.css('.select-candence-start .dropdown-menu .text')).get(0).getText();
    },

    clickDropdown_cadenceStartDateMonth_create: function(){
      return element.all(by.css('.select-cadence-start button')).get(1);
    },
    select_cadenceStartDateMonth_create: function(){
      return element.all(by.css('.select-cadence-start .dropdown-menu .text')).get(2);
    },
    get_cadenceStartDateMonth_create: function(){
      return element.all(by.css('.select-candence-start .dropdown-menu .text')).get(2).getText();
    },
    
    clickDropdown_cadenceEndDate_create: function(){
      return element.all(by.css('.select-cadence-end button')).get(0);
    },
    select_cadenceEndDate_create: function(){
      return element.all(by.css('.select-cadence-end .dropdown-menu .text')).get(0);
    },
    get_cadenceEndDate_create: function(){
      return element.all(by.css('.select-cadence-end .dropdown-menu .text')).get(0).getText();
    },
    
    clickDropdown_cadenceEndDateMonth_create: function(){
      return element.all(by.css('.select-cadence-end button')).get(1);
    },
    select_cadenceEndDateMonth_create: function(){
      return element.all(by.css('.select-cadence-end .dropdown-menu .text')).get(2);
    },
    get_cadenceEndDateMonth_create: function(){
      return element.all(by.css('.select-cadence-end .dropdown-menu .text')).get(2).getText();
    },
    

   //  //Charge Methods Edit fields values(tenant, description, url)
   //  type_tenant_editField: function(text){
   //      element(by.id('tenantName')).clear();
   //      element(by.id('tenantName')).sendKeys(text);
   //    return browser.driver.sleep(1000);
   //  },

   //  type_description_editField: function(text){
   //      element(by.id('tenantDescription')).clear();
   //      element(by.id('tenantDescription')).sendKeys(text);
   //    return browser.driver.sleep(1000);
   //  },

   //  type_url_editField: function(text){
   //      element(by.id('tenantUrl')).clear();
   //      element(by.id('tenantUrl')).sendKeys(text);
   //    return browser.driver.sleep(1000);
   //  },

});

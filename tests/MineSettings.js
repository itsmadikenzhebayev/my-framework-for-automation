const MineSettings = function(){
    var input_login = element(by.css('input[type="email"]'));
    var input_password = element(by.css('input[type="password"]'));
    var submit_button = element(by.css('button[type="submit"]'));
    var click_admin_section = element(by.css('a[ng-reflect-router-link="pos-admin"]'));
    var click_mines_section = element(by.css('a[ng-reflect-router-link="/pos-admin,mines"]'));
    var createMine_buttonElement = element(by.css('button[class="btn btn-primary"]'));
    var enter_mineName =  element(by.css('input[ng-reflect-name="mine"]'));
    var enterLatitude =  element(by.css('input[name="latitude"]'));
    var enterLongtitude = element(by.css('input[name="longtitude"]'));
    var enter_minZoom = element(by.css('input[name="minZoom"]'));
    var enter_maxZoom = element(by.css('input[name="maxZoom"]'));
    var addMine_confirm_button = element(by.buttonText('Add'));
    var editMine_button = element(by.css('a[class="update"]'));
    var confirm_changes_button =  element(by.buttonText('Edit'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterLogin = function(login){
        input_login.sendKeys(login);
    };

    this.enterPassword = function(password){
        input_password.sendKeys(password);

    };

    this.clickSubmit = function(){
        submit_button.click();
    };

    this.followAdmin_link = function(){
        click_admin_section.click();
    };
    
    this.followMines_link = function(){
        click_mines_section.click();
    };

    this.createMine = function(){
        createMine_buttonElement.click();
    };

    this.mineName = function(mine){
        enter_mineName.sendKeys(mine);
    };

    this.latitudeValue = function(latitude){
        enterLatitude.sendKeys(latitude);
    };

    this.longtitudeValue = function(longtitude){
        enterLongtitude.sendKeys(longtitude);
    };

    this.minZoom = function(minzoom){
        enter_minZoom.sendKeys(minzoom);
    };

    this.maxZoom = function(maxzoom){
        enter_maxZoom.sendKeys(maxzoom);
    };

    this.addMine = function(){
        addMine_confirm_button.click();
    };
};

module.exports = new MineSettings();
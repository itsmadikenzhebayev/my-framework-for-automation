const LevelSettings = function(){
        var input_login = element(by.css('input[type="email"]'));
        var input_password = element(by.css('input[type="password"]'));
        var submit_button = element(by.css('button[type="submit"]'));
        var click_admin_section = element(by.css('a[ng-reflect-router-link="pos-admin"]'));
        var click_levels_section = element(by.css('a[ng-reflect-router-link="/pos-admin,horizonts"]'));
        var addLevel_button = element(by.buttonText('+ Add'));
        var enter_levelName = element(by.css('input[name="horizont"]'));
        var select_from_mineList = element(by.tagName("ng-select2#mine"));
        var confirm_from_mineList = element(by.css('input[class="select2-search__field"]'));
        
        var addLevel_confirm_button = element(by.buttonText('Add'));

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

    this.followLevel_link = function(){
        click_levels_section.click();
    };

    this.createLevel = function(){
        addLevel_button.click();
    };

    this.enterLevel = function(name){
        enter_levelName.sendKeys(name);
    };

    this.mineList = function(){
        select_from_mineList.click();
    };

    this.mineConfirm = function(confirm){
        confirm_from_mineList.sendKeys(confirm);
    };

    this.addLevel = function(){
        addLevel_confirm_button.click();
    };

};

module.exports = new LevelSettings();
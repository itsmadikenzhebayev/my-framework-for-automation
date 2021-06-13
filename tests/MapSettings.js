const MineSettings = function(){
        var input_login = element(by.css('input[type="email"]'));
        var input_password = element(by.css('input[type="password"]'));
        var submit_button = element(by.css('button[type="submit"]'));
        var click_admin_section = element(by.css('a[ng-reflect-router-link="pos-admin"]'));
        var click_maps_section =  element(by.css('a[ng-reflect-router-link="/pos-admin,maps"]'));
        var addMap_button = element(by.buttonText('+ Add'));
        var enterMap_URL = element(by.css('input[id="url"]'));
        var enterMap_parameters = element(by.css('textarea[id="params"]'));
        var select_mapLevel_list = element(by.tagName("ng-select2#layer"));
        var search_mapLevel_list = element(by.css('input[class="select2-search__field"]'));
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        var addMap_confirm_button = element(by.buttonText('Add'));

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
        
        this.followMap_link = function(){
            click_map_section.click();
        };

        this.createMap = function(){
            addMap_button.click();
        };

        this.addMap_URL = function()

        this.



};
describe('admin', function(){
    it('addition test', function(){
    

        browser.get('http://172.26.10.50/login');
        //browser.driver.manage().window().maximize();

        var input_login = element(by.css('input[type="email"]')).sendKeys("super@test.kz");
        var input_password = element(by.css('input[type="password"]')).sendKeys("super");
        var submit_button = element(by.css('button[type="submit"]')).click();
        
        const click_admin_section = element(by.css('a[ng-reflect-router-link="pos-admin"]')).click();
        //Adding Mines
        const click_mines_section = element(by.css('a[ng-reflect-router-link="/pos-admin,mines"]')).click();
        var createMine_buttonelement = element(by.css('button[class="btn btn-primary"]')).click();
       var enter_mineName =  element(by.css('input[ng-reflect-name="mine"]')).sendKeys("Autotest");
       var enterLatitude =  element(by.css('input[name="latitude"]')).sendKeys("63,81238");
        var enterLongtitude = element(by.css('input[name="longtitude"]')).sendKeys("67,54345");
        var enter_minZoom = element(by.css('input[name="minZoom"]')).sendKeys("17");
        var enter_maxZoom = element(by.css('input[name="maxZoom"]')).sendKeys("25");
        var addMine_confirm_button = element(by.buttonText('Add')).click();
        var editMine_button = element(by.css('a[class="update"]')).click();
       var confirm_changes_button =  element(by.buttonText('Edit')).click();

//Adding Levels
       /* const click_levels_section = element(by.css('a[ng-reflect-router-link="/pos-admin,horizonts"]')).click();
       var addLevel_button = element(by.buttonText('+ Add')).click();
       element(by.css('input[name="horizont"]')).sendKeys("Autotest_Level1");
       element(by.tagName("ng-select2#mine")).click();
       element(by.css('input[class="select2-search__field"]')).sendKeys("Шахта 1");
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       var addLevel_confirm_button = element(by.buttonText('Add')).click();*/
      
//Adding maps
   
      /* const click_maps_section =  element(by.css('a[ng-reflect-router-link="/pos-admin,maps"]')).click();
       var addMap_button = element(by.buttonText('+ Add')).click();
       element(by.css('input[id="url"]')).sendKeys("http://172.26.10.49:8080/geoserver/test1210/wms");
       element(by.css('textarea[id="params"]')).sendKeys("Autotest");
       element(by.tagName("ng-select2#layer")).click();
       element(by.css('input[class="select2-search__field"]')).sendKeys("Горизонт 1");
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       var addMap_confirm_button = element(by.buttonText('Add')).click(); */

 //Adding assets
 
      /*const click_assets_section =  element(by.css('a[ng-reflect-router-link="/pos-admin,equipment"]')).click();
     var addAsset_button = element(by.buttonText('+ Add')).click();
     var enter_asset_id = element(by.css('input[id="vin"]')).sendKeys("28091995");
     var enter_asset_name = element(by.css('input[id="name"]')).sendKeys("Autotest");
     var addAsset_confirm_button = element(by.buttonText('Add')).click();
      

       var addNode_button = element(by.css('a[source="6"]')).click();
       var editAsset_button = element(by.css('input[id="url"]')).sendKeys("https://");
       var editAsset_confirm_button = element(by.buttonText('Edit')).click();
       element(by.css('i[class="fa fa-plus-circle"]')).click(); 
       element(by.tagName("ng-select2#mark")).click();
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       element(by.css('input[type="search"]')).sendKeys("Узел 1"); */

       //Adding Employees
       /*const click_employee_section = element(by.css('a[ng-reflect-router-link="/pos-admin,employees"]')).click();
       var addEmployee_button = element(by.buttonText('+ Add')).click();
       var enterFirstName = element(by.css('input[id="userName"]')).sendKeys("Autotest");
       var enterLastName = element(by.css('input[id="userLastName"]')).sendKeys("Autotest");
       var enterEmployee_ID = element(by.css('input[id="tabelNumber"]')).sendKeys("28091995");
       var enterDivision = element(by.css('input[id="service"]')).sendKeys("Autotest");
       var enterJobTitle = element(by.css('input[id="position"]')).sendKeys("Autotest");
       var addEmployee_confirm_button = element(by.buttonText('Add')).click();*/

       //Adding nodes
       /*const click_nodes_section = element(by.css('a[ng-reflect-router-link="/pos-admin,nodes"]')).click();
       var addNode_button = element(by.buttonText('+ Add')).click();
       var enter_SourceNodeAddress = element(by.css('input[id="sourceAddress"]')).sendKeys("28091995");
       var enter_NodeName = element(by.css('input[id="name"]')).sendKeys("28091995");
       var select_NodeType = element(by.tagName("ng-select2#node")).click();
       var select_NodeType1 = element(by.css('input[class="select2-search__field"]')).sendKeys("Node A");
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       var addNode_confirm_button = element(by.buttonText('Add')).click();*/

       //Adding area groups
      /* const click_areagroups_section = element(by.css('a[ng-reflect-router-link="/pos-admin,polygon-groups"]')).click();
       var addAreaGroup_button = element(by.buttonText('+ Add')).click();
       var enter_AreaGroupName = element(by.css('input[id="name"]')).sendKeys("Autotest");
       var addAreaGroup_confirm_button = element(by.buttonText('Add')).click(); */

       //Adding group of triggers 
      /* const click_group_of_trigger_section = element(by.css('a[ng-reflect-router-link="/pos-admin,polygon-group-netwo"]')).click();
       var add_groupTriggers = element(by.buttonText('+ Add')).click();
       var select_trigger = element(by.tagName("ng-select2#polygonGroup")).click();
       var select_trigger1 = element(by.css('input[class="select2-search__field"]')).sendKeys("Контроль скорости");
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       var select_areaGroup = element(by.tagName("ng-select2#limitation")).click();
       var select_areaGroup1 = element(by.css('input[class="select2-search__field"]')).sendKeys("Группа 1");
       browser.actions().sendKeys(protractor.Key.ENTER).perform();
       var enter_minValue = element(by.css('input[id="minValue"]'));
       var enter_maxValue = element(by.css('input[id="maxValue"]'));
       var add_GroupOfTrigger_confirm_button = element(by.buttonText('Add')).click();*/


browser.sleep(3000);
    });
});

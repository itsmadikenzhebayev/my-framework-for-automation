const LevelSettings = require('../tests/LevelSettings');

describe('Testing level creation', function(){
    it('level', function(){

        LevelSettings.get('http://172.26.10.50/login');

        LevelSettings.enterLogin("super@test.kz");

        LevelSettings.enterPassword("super");

        LevelSettings.clickSubmit();

        LevelSettings.followAdmin_link();

        LevelSettings.followLevel_link();

        LevelSettings.createLevel();

        LevelSettings.enterLevel("Autotest");

        LevelSettings.mineList();

        LevelSettings.mineConfirm("Шахта 1");

        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        LevelSettings.addLevel();
    });
    

});
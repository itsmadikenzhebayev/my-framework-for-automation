const MineSettings = require('../tests/MineSettings');

describe('Testing mine creation', function(){
    it('mine', function(){

        MineSettings.get('http://172.26.10.50/login');

        MineSettings.enterLogin("super@test.kz");

        MineSettings.enterPassword("super");

        MineSettings.clickSubmit();

        MineSettings.followAdmin_link();

        MineSettings.followMines_link();

        MineSettings.createMine();

        MineSettings.mineName("Autotest");

        MineSettings.latitudeValue("67");

        MineSettings.longtitudeValue("67");

        MineSettings.minZoom("3");

        MineSettings.maxZoom("3");

        MineSettings.addMine();
    });
    

});
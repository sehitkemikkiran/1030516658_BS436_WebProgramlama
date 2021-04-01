const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/game');

test("oyun", () => {
    const driver = mount(<Game/>);
    const card = driver.find('.kart');
    expect(card.length).toEqual(3);
})

test("cevap", () => {
    const driver = mount(<Game/>);

    const first = driver.find('.kart').at(0);
    first.simulate('click');

    const photos = driver.find('.kart');
    expect(photos.length).toEqual(3);

})

test('kaybettin',() =>{
    const driver = mount(<Game/>);

    const card = driver.find('.card').at(0);
    card.simulate('click');
    card.find("img").prop("src");

    card = driver.find('.card').at(0);
    const srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kopek.jpg');

})

test('kazandın',() =>{
    const driver = mount(<Game/>);

    const card = driver.find('.card').at(0);
    card.simulate('click');
    card.find("img").prop("src");

    card = driver.find('.card').at(0);
    const srcName = card.find("img").prop("src")
    expect(srcName === 'img/Kedi.jpg');

})

test('yenioyun' ,() =>{
    const driver = mount(<Game/>);
    let card = driver.find('.card').at(0);
    card.simulate('click');
    card = driver.find('.card').at(1);
    card.simulate('click');

    let yenidenBaslat = driver.find('.link');
    yenidenBaslat.simulate('click');
})
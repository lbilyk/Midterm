$(function () {
    newImage();
});

function newImage() {

    let min=1;
    let max=119;
    let imageNumber =Math.floor(Math.random() * ( + max - + min)) + +min;
    let src ='img/Cat (' + imageNumber + ').jpg';

    $('#photo').prop('src',src);
}
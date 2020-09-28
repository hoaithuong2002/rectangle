let rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    this.getPerimetter =  function () {
        let perimetter = (this.width + this.height)* 2;
        return perimetter;
    }
    this.getArea = function () {
        let Area =(this.width*this.height);
        return Area;
    }
    this.getwidth = function () {
        return this.width;
    }
}
let hcn1 = new rectangle(50, 70);
let perimeter = hcn1.getPerimetter();
let area = hcn1.getArea();
alert('chu vi: ' + perimeter + ' dien tich: ' + area);


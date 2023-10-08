class A{
    constructor(data){
        this.data = data;
    }
    show(){
        console.log('A Class Data: ' + this.data);
    }
}
  
var a = new A('Welcome to React!');
a.show();
  
class B extends A {
    show() {
        console.log('B Class Data: ' + this.data);
        super.show();
    }
}
var b = new B('Bye React!');
b.show();
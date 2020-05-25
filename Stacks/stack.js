class Stack{
    constructor(){
        this.data=[];
        this.top=0;
    }
    push(element){
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    printElements(){
        console.log(this.data)
    }
}

let stack = new Stack();
stack.push(23);
stack.push(2);
stack.push(3);
stack.push(46);
stack.printElements()
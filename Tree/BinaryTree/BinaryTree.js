// creating a binary tree
class BinaryTree{
    constructor(root = null){
        this.root = root
    }
}

class Node{
    constructor(left=null, data, right=null){
        this.left = left;
        this.data = data;
        this.right = right;
    }
}

let binaryTree = new BinaryTree();
let node = new Node(23);
binaryTree.root=node;


BinaryTree.prototype.traverse = function(){
    
}
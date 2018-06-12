class BSTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(value) {
        const n = new BSTNode(value);
        this.size++;
        if (!this.root) {
            this.root = n;
            return this;
        }
        let curr = this.root;
        while (curr) {
            if (n.val >= curr.val) {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = n;
                    break;
                }
            } else {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = n;
                    break;
                }
            }
        }
        return this;
    }

    contains(val) {
        if (!this.root) {
            return false;
        }
        let curr = this.root;
        while (curr) {
            if (curr.val === val) {
                return true;
            }
            if (val > curr.val) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return false;
    }

    min() {
        if (!this.root) {
            return null;
        }
        let curr = this.root;
        let min = this.root.val;
        while (curr.left) {
            min = curr.left.val;
            curr = curr.left;
        }
        return min;
    }

    max() {
        if (!this.root) {
            return null;
        }
        let curr = this.root;
        let min = this.root.val;
        while (curr.right) {
            min = curr.right.val;
            curr = curr.right;
        }
        return min;
    }

    isEmpty() {
        return !this.root;
    }

    depth(node = this.root) {
        if (!node) {
            return 0;
        }
        const leftDepth = this.depth(node.left);
        const rightDepth = this.depth(node.right);
        return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
    }

    preOrder(node = this.root) {
        if (!node.left && !node.right) {
            return;
        }
        console.log(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    
    postOrder(node = this.root) {
        if (!node.left && !node.right) {
            return;
        }
        this.preOrder(node.left);
        this.preOrder(node.right);
        console.log(node.val);
    }
    
    inOrder(node = this.root) {
        if (!node.left && !node.right) {
            return;
        }
        this.preOrder(node.left);
        console.log(node.val);
        this.preOrder(node.right);
    }
}
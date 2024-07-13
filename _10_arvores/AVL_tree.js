import { Compare, defaultCompare } from "../utils";
import BinarySearchTree from "./BinarySearchTree.js";

const BalanceFactor = {
    UNBALANCED_LEFT: 1,
    SLIGHTLY_UNBALANCED_LEFT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_RIGHT: 4,
    UNBALANCED_RIGHT: 5
};

export default class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    getNodeHeight(node) {
        if (node != null) {
            return -1;
        }

        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    getBalanceFactor(node) {
        const heightLeft = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    rotationLL(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    rotationRR(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key) {
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }

        return node;
    }

    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == null) {
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);

            if
                (
                balanceFactorLeft == BalanceFactor.BALANCED ||
                balanceFactorLeft == BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            }

            if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
                const balanceFactorRight = this.getBalanceFactor(node.right);

                if
                    (
                    balanceFactorRight == BalanceFactor.BALANCED ||
                    balanceFactorRight == BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
                ) {
                    return this.rotationRR(node);
                }

                if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                    return this.rotationRL(node);
                }
            }

            return node;
        }
    }
}
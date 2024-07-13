const items = new WeakMap();

export default class StackWeakMa {
    constructor() {
        this.set(this, []); // private property
    }

    push(element) {
        const s = items.get(this);
        s.push(element);
    }

    pop() {
        const s = items.get(this);
        const r = s.pop();

        return r
    }
}
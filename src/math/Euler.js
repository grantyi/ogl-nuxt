import * as EulerFunc from './functions/EulerFunc.js';
import { Mat4 } from './Mat4.js';

const tmpMat4 = new Mat4();

export class Euler {
    constructor(x = 0, y = x, z = x, order = 'YXZ') {
        this.data = [x, y, z];
        this.order = order;
        this.onChange = () => {};
        return this;
    }

    get x() {
        return this.data[0];
    }

    get y() {
        return this.data[1];
    }

    get z() {
        return this.data[2];
    }

    set x(v) {
        this.data[0] = v;
        this.onChange();
    }

    set y(v) {
        this.data[1] = v;
        this.onChange();
    }

    set z(v) {
        this.data[2] = v;
        this.onChange();
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        this.data[0] = x;
        this.data[1] = y;
        this.data[2] = z;
        this.onChange();
        return this;
    }

    copy(v) {
        this.data[0] = v[0];
        this.data[1] = v[1];
        this.data[2] = v[2];
        this.onChange();
        return this;
    }

    reorder(order) {
        this.order = order;
        this.onChange();
        return this;
    }

    fromRotationMatrix(m, order = this.order) {
        EulerFunc.fromRotationMatrix(this.data, m, order);
        return this;
    }

    fromQuaternion(q, order = this.order) {
        tmpMat4.fromQuaternion(q);
        return this.fromRotationMatrix(tmpMat4, order);
    }

    toArray(a = [], o = 0) {
        a[o] = this.data[0];
        a[o + 1] = this.data[1];
        a[o + 2] = this.data[2];
        return a;
    }
}

import * as QuatFunc from './functions/QuatFunc.js';

export class Quat {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.data = [x, y, z, w];
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

    get w() {
        return this.data[3];
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

    set w(v) {
        this.data[3] = v;
        this.onChange();
    }

    identity() {
        QuatFunc.identity(this.data);
        this.onChange();
        return this;
    }

    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        QuatFunc.set(this.data, x, y, z, w);
        this.onChange();
        return this;
    }

    rotateX(a) {
        QuatFunc.rotateX(this.data, this.data, a);
        this.onChange();
        return this;
    }

    rotateY(a) {
        QuatFunc.rotateY(this.data, this.data, a);
        this.onChange();
        return this;
    }

    rotateZ(a) {
        QuatFunc.rotateZ(this.data, this.data, a);
        this.onChange();
        return this;
    }

    inverse(q = this) {
        QuatFunc.invert(this.data, q);
        this.onChange();
        return this;
    }

    conjugate(q = this) {
        QuatFunc.conjugate(this.data, q);
        this.onChange();
        return this;
    }

    copy(q) {
        QuatFunc.copy(this.data, q);
        this.onChange();
        return this;
    }

    normalize(q = this) {
        QuatFunc.normalize(this.data, q);
        this.onChange();
        return this;
    }

    multiply(qA, qB) {
        if (qB) {
            QuatFunc.multiply(this.data, qA, qB);
        } else {
            QuatFunc.multiply(this.data, this.data, qA);
        }
        this.onChange();
        return this;
    }

    dot(v) {
        return QuatFunc.dot(this.data, v);
    }

    fromMatrix3(matrix3) {
        QuatFunc.fromMat3(this.data, matrix3);
        this.onChange();
        return this;
    }

    fromEuler(euler) {
        QuatFunc.fromEuler(this.data, euler, euler.order);
        return this;
    }

    fromAxisAngle(axis, a) {
        QuatFunc.setAxisAngle(this.data, axis, a);
        return this;
    }

    slerp(q, t) {
        QuatFunc.slerp(this.data, this.data, q, t);
        return this;
    }

    fromArray(a, o = 0) {
        this.data[0] = a[o];
        this.data[1] = a[o + 1];
        this.data[2] = a[o + 2];
        this.data[3] = a[o + 3];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this.data[0];
        a[o + 1] = this.data[1];
        a[o + 2] = this.data[2];
        a[o + 3] = this.data[3];
        return a;
    }
}

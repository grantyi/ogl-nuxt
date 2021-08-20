import * as Vec2Func from './functions/Vec2Func.js';

export class Vec2 {
    constructor(x = 0, y = x) {
        this.data = [x, y];
        return this;
    }

    get x() {
        return this.data[0];
    }

    get y() {
        return this.data[1];
    }

    set x(v) {
        this.data[0] = v;
    }

    set y(v) {
        this.data[1] = v;
    }

    set(x, y = x) {
        if (x.length) return this.copy(x);
        Vec2Func.set(this.data, x, y);
        return this;
    }

    copy(v) {
        Vec2Func.copy(this.data, v);
        return this;
    }

    add(va, vb) {
        if (vb) Vec2Func.add(this.data, va, vb);
        else Vec2Func.add(this.data, this.data, va);
        return this;
    }

    sub(va, vb) {
        if (vb) Vec2Func.subtract(this.data, va, vb);
        else Vec2Func.subtract(this.data, this.data, va);
        return this;
    }

    multiply(v) {
        if (v.length) Vec2Func.multiply(this.data, this.data, v);
        else Vec2Func.scale(this.data, this.data, v);
        return this;
    }

    divide(v) {
        if (v.length) Vec2Func.divide(this.data, this.data, v);
        else Vec2Func.scale(this.data, this.data, 1 / v);
        return this;
    }

    inverse(v = this) {
        Vec2Func.inverse(this.data, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return Vec2Func.length(this.data);
    }

    distance(v) {
        if (v) return Vec2Func.distance(this.data, v);
        else return Vec2Func.length(this.data);
    }

    squaredLen() {
        return this.squaredDistance();
    }

    squaredDistance(v) {
        if (v) return Vec2Func.squaredDistance(this.data, v);
        else return Vec2Func.squaredLength(this.data);
    }

    negate(v = this) {
        Vec2Func.negate(this.data, v);
        return this;
    }

    cross(va, vb) {
        if (vb) return Vec2Func.cross(va, vb);
        return Vec2Func.cross(this.data, va);
    }

    scale(v) {
        Vec2Func.scale(this.data, this.data, v);
        return this;
    }

    normalize() {
        Vec2Func.normalize(this.data, this.data);
        return this;
    }

    dot(v) {
        return Vec2Func.dot(this.data, v);
    }

    equals(v) {
        return Vec2Func.exactEquals(this.data, v);
    }

    applyMatrix3(mat3) {
        Vec2Func.transformMat3(this.data, this.data, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        Vec2Func.transformMat4(this.data, this.data, mat4);
        return this;
    }

    lerp(v, a) {
        Vec2Func.lerp(this.data, this.data, v, a);
    }

    clone() {
        return new Vec2(this.data[0], this.data[1]);
    }

    fromArray(a, o = 0) {
        this.data[0] = a[o];
        this.data[1] = a[o + 1];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this.data[0];
        a[o + 1] = this.data[1];
        return a;
    }
}

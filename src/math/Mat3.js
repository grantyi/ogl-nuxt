import * as Mat3Func from './functions/Mat3Func.js';

export class Mat3 {
    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        this.data = [m00, m01, m02, m10, m11, m12, m20, m21, m22];
        return this;
    }

    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.copy(m00);
        Mat3Func.set(this.data, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    translate(v, m = this) {
        Mat3Func.translate(this.data, m, v);
        return this;
    }

    rotate(v, m = this) {
        Mat3Func.rotate(this.data, m, v);
        return this;
    }

    scale(v, m = this) {
        Mat3Func.scale(this.data, m, v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            Mat3Func.multiply(this.data, ma, mb);
        } else {
            Mat3Func.multiply(this.data, this.data, ma);
        }
        return this;
    }

    identity() {
        Mat3Func.identity(this.data);
        return this;
    }

    copy(m) {
        Mat3Func.copy(this.data, m);
        return this;
    }

    fromMatrix4(m) {
        Mat3Func.fromMat4(this.data, m);
        return this;
    }

    fromQuaternion(q) {
        Mat3Func.fromQuat(this.data, q);
        return this;
    }

    fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
    }

    inverse(m = this) {
        Mat3Func.invert(this.data, m);
        return this;
    }

    getNormalMatrix(m) {
        Mat3Func.normalFromMat4(this.data, m);
        return this;
    }
}

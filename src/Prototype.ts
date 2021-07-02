interface IProtoType {
    clone();
}

class MyClassX implements IProtoType {
    field: number[];

    constructor(field: number[]) {
        this.field = field;
    }

    public clone() {
        return Object.assign({}, this); // Shellow Copy
        // return JSON.parse(JSON.stringify(this)); // Deep Copy
    }
}

export const show = () => {
    const obj1 = new MyClassX([1, 2, 3, 4]);
    obj1.clone()
    console.log(obj1.field)
}

show();
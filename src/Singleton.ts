class Singleton {
    static instance: Singleton;
    id: number;

    constructor(id: number) {
        this.id = id;
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

export const show = () => { 
    const singleton1 = new Singleton(1);
    const singleton2 = new Singleton(2);

    console.log('--', singleton1.id);
    console.log('--', singleton2.id)
}

show();
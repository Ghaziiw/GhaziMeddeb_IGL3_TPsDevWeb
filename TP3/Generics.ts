function identity<T>(value:T):T{
    return value;
}

function getFirst<T>(arr: T[]): T|undefined{
    return arr[0];
}

class Repository<T>{

    items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAll(): T[] {
        return this.items;
    }
}
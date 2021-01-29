import { makeAutoObservable } from 'mobx';

export const store1 = makeAutoObservable({
    count: 0,
    get double() {
        return this.count * 2;
    },
    increment() {
        this.count += 1;
    },
    decrement() {
        this.count -= 1;
    },
});

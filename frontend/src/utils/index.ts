export default class Helper {
    static caclulatePrice(price: number | undefined | null, discount: number) {
        if(!price) return 0;
        return (price - (price * discount / 100)).toFixed(2);
    }
}
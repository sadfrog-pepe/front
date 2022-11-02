const List1 = <T extends any>(props: {
    // 최소한 T는 any일 것이다, 라는 의미기 때문에 사실 상 아무런 의미가 없다.
    items: T[];
    renderItem: (item: T) => void;
}) => {};

List1({
    items: [1, 2, 3],
    renderItem: (a: number) => {}, // 위 items 배열에 1,2,3을 담았기 때문에 자동으로 number라고 추론된다.
});

List1({
    items: ['a', 'b', 'c'],
    renderItem: (a: string) => {}, // 위 items 배열에 1,2,3을 담았기 때문에 자동으로 number라고 추론된다.
});

List1({
    items: [1, 2, 3, 'a', 'b', 'c'],
    renderItem: (item) => {}, // 위 items 배열을 만족하는 type은 number | string 뿐이다.
});

type ListPropsType = number | string;
const List2 = <T extends ListPropsType>(props: {
    // 최소한 타입 T는 number | string 이다.
    items: T[];
    renderItem: (item: T) => void;
}) => {};

List2({
    items: [1, 2, 3, 'a', 'b', 'c'], // 인자로 넣은 1, 2, 3, "a", "b", "c"는 최소한의 타입인 ListPropsType보다 작은 타입이다.
    renderItem: (item) => {}, // 타입은 1 | 2 | 3 | "a" | "b" | "c" 로 추론된다.
});

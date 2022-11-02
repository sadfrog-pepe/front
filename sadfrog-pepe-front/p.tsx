import React from 'react';

// list 컴포넌트 다른 형태
interface ListProps<T> {
    items: T[];
    renderItem: { (item: T): React.ReactNode };
}
const ListList = <T extends { id: string }>(props: ListProps<T>) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{props.renderItem(item)}</li>
            ))}
        </ul>
    );
};
// function ListList<T extends { id: string }>(props: ListProps<T>) {
//     return (
//         <ul>
//             {props.items.map((item) => (
//                 <li key={item.id}>{props.renderItem(item)}</li>
//             ))}
//         </ul>
//     );
// }

// list 컴포넌트
const List = <T extends any>(props: {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}) => <>{props.items.map(props.renderItem)}</>;

// p 컴포넌트
const p = () => {
    interface Product {
        name: string;
        price: number;
    }
    const products: Product[] = [
        { name: 'haha', price: 10 },
        { name: 'kakasoo', price: 1000 },
        { name: 'lala', price: 50 },
    ];

    interface User {
        name: string;
        age: number;
    }

    const users: User[] = [
        { name: '김범규', age: 26 },
        { name: '문재석', age: 26 },
        { name: '강경수', age: 26 },
    ];

    interface NotProduct<T> {
        name: string;
        code: T;
        id: string;
    }

    const objs: NotProduct<string | number>[] = [
        { name: 'hello', code: 123, id: '123' },
        { name: 'hi', code: '123', id: '1234' },
    ];

    return (
        <div>
            <List
                items={products}
                renderItem={(product) => (
                    <p>
                        {product.name}: ${product.price}
                    </p>
                )}
            />
            {/* user */}
            <List
                items={users}
                renderItem={(user) => (
                    <p>
                        {user.name} : {user.age}세
                    </p>
                )}
            />
            <ListList
                items={objs}
                renderItem={(obj) => (
                    <p>
                        {obj.name} : {obj.code}
                    </p>
                )}
            />
        </div>
    );
};

export default p;

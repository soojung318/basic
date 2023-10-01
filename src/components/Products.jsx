import React, {useEffect, useState} from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    // fetch(비동기 통신)만 사용하면 무한루프 돈다.
    // fetch('data/products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
    //         setProducts(data);
    //     })

    // useEffect 함수는 컴포넌트가 화면에 보여질 때 처음 한 번만 실행한다.
    useEffect(() => {
        fetch('data/products.json')
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
        return () => {
            console.log('🧹깨끗하게 청소하는 일들을 합니다.');
        };
    }, []);
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    );
}

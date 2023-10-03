import React, {useEffect, useState} from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    // fetch(비동기 통신)만 사용하면 무한루프 돈다.
    // fetch('data/products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
    //         setProducts(data);
    //     })

    // useEffect 함수는 컴포넌트가 화면에 보여질 때 처음 한 번만 실행한다.
    useEffect(() => {
        fetch(`data/${checked ? 'sale_':''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
                setProducts(data);
            });
        return () => {
            console.log('🧹깨끗하게 청소하는 일들을 합니다.');
        };
    }, [checked]);
    return (
        <>
            <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id }>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}

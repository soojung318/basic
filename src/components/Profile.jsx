export default function Profile() {
    return (
        <div className='profile'>
            <img
                className='photo'
                src = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                alt = 'avatar'
            />
            <h1>James Kim</h1>
            <p>프론트엔드 개발자</p>
        </div>

    );
}

//리액트에서 사용할 수 있도록 export를 해야 함. 함수 앞에다 바로 사용하는 것도 가능
//export default Profile;


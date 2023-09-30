export default function Profile({image, avatar, name, title, isNew}) {
    return (
        <div className='profile'>
            <img className='photo' src={image} alt={avatar}/>

            { isNew && <span className='new'>New</span> }
            <h1>{name}</h1>
            <p>{title}</p>
        </div>

    );
}

//리액트에서 사용할 수 있도록 export를 해야 함. 함수 앞에다 바로 사용하는 것도 가능
//export default Profile;


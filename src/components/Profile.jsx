import Avatar from "./Avatar";

export default function Profile({image, avatar, name, title, isNew}) {
    return (
        <div className='profile'>
            <Avatar image={image} isNew={isNew}/>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>

    );
}

//리액트에서 사용할 수 있도록 export를 해야 함. 함수 앞에다 바로 사용하는 것도 가능
//export default Profile;


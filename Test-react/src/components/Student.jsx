export const Student = ({name,age,gender}) => { // → アロー関数
    return (            // ↑ props(分割代入を使用)
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{gender}</p>
        </>
    );
};
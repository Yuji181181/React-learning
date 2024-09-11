/**
 * テンプレート(main.jsx)
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
// 内容(メイン)
);


/**
 * コンポーネントの作り方(App.jsx)
 */
export const App =() => {  
    return(
        <>                     //divタグと選択
            <h1>こんいちは</h1>    //この中にjsを使うときは{}で書く
            <p>元気？</p>
        </>                    //divタグと選択
    );
};
//main.jsxでAppを打つと自動importになる


/**
 * props(コンポーネントの引数のこと)
 */              
//components内のファイル
export const Student = ({name,age,gender}) => { // → アロー関数
    return (            // ↑ props(分割代入を使用)
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{gender}</p>
        </>
    );
};


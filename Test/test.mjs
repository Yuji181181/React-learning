/**
 * テンプレート文字列
 */
const name1 = "ゆうじ";
const age1 = "21";
//従来
const A = "名前は"+ name1 + "です。年は"+ age1+ "です";
//テンプレート文字列を用いる
const B = `名前は${name1}です。年は${age1}です`;


/**
 * アロー関数
 */
//従来1
function 関数名 (引数){
    return X;
}
//アロー関数
const 関数名 = (引数) => {
    return X;
};
//引数が１つなら()省略可
//処理の行が1行なら{}省略可


/**
 * 分割代入
 */
const profile = {   //オブジェクト
    name2:"ゆうじ",
    age2:21
};
//ダルい方法
const C = `名前は${profile.name2}です。年は${profile.age2}です`;
//分割代入を使う方法
const{name2,age2} = profile;
const D = `名前は${name2}です。年は${age2}です`;


/**
 * デフォルト値
 */
const E = (name3 = "ゲスト") => console.log();
E();


/**
 * オブジェクトの省略
 */
const name4 = "ゆうじ"
const age4 = "21"
//省略前
const F = {
    name4:name4,
    age4:age4
};
//省略後
const G = {
    name4,   ///宣言済みの変数と名前が同じ場合省略可能
    age4
};


/**
 * スプレット構文
 */
//配列の展開
const arr1 = [1,2];
console.log(arr1);     //[1,2]
console.log(...arr1);  //1,2
//まとめる
const arr2 = [1,2,3,4,5];
const [num1,num2, ...arr3] = arr2;
console.log(num1);  //1
console.log(num2);  //2
console.log(arr3);  //[3,4,5]


/**
 * map,filterで配列の処理
 */
const H = ["田中","山田","太郎"];
//for文
for (let x=0; x < H.length; x++){
    console.log(H[x])
};
//map      /// H.map(関数);
H.map((name5) => {
    return name5   //{}省略可能で１行にできる
});
console.log(H);
//filter   /// H.filter(関数)
H.filter((num) => {
    return num * 2 === 1;
});
console.log(H)


//
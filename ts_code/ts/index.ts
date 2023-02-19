const { v4: uuidv4 } = require('uuid');
import { User } from "./user";

const user = new User('海老原', '賢次', 44); // 名前と年齢は適当に

const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

// <- 追加 ここから
// HTMLエレメントを取得 キャストすることで、入力補完が効く
const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
// ボタンのクリックイベントを追加
saibanButton.onclick = (e) => {
  uuidSpan.innerText = uuidv4();
}
// <- 追加 ここまで

/* 01. 枚举基本用法 */
enum PageUrl {
  Home_Page_Url = 'url1',
  Setting_Page_Url = 'url2',
  Share_Page_Url = 'url3',
}

const home = PageUrl.Home_Page_Url;

enum Items {
  Foo, // 0
  Bar, // 1
  Baz, // 2
}

const fooValue = Items.Foo; // 0
const fooKey = Items[0]; // "Foo"

/* 02. 枚举-
  不赋值则自动读取下标，默认从0开始
*/
enum Items1 {
  Foo,// 0
  Bar = 599,
  Baz,// 600  在枚举值都是数字的情况下，会随着前一个枚举值顺延+1
}
enum Items1_1 {
  Foo,// 0
  Bar = '599',
  Baz,// 600  在枚举值都是数字的情况下，会随着前一个枚举值顺延+1;否则会报错：枚举成员必须具有初始化表达式。
}


const returnNum = () => 100 + 499;



/* 03. 枚举-
  支持枚举值的计算
*/
enum Items2 {
  Foo = returnNum(),
  Bar = 599,
  Baz,
}

enum Items3 {
  Baz,
  Foo = returnNum(),
  Bar = 599,
}

enum Mixed {
  Num = 599,
  Str = 'linbudu',
}



const enum ConstItems {
  Foo,
  Bar,
  Baz,
}

const fooValue1 = ConstItems.Foo; // 0

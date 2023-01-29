// 既然有了interface为什么还出现abstract？



/* 抽象类和interface 都可以描述类的结构，两者有什么区别?
  最重要的区别就是抽象类会存在于运行时，接口不会，其次就是在描述类的结构上抽象类更专业，
  可以使用抽象方法这样的方式来描述结构，或者也可以提供有具体实现的方法，这都是接口不具备的能力。


  个人理解：
  类抽象他的目的是为了给一类相同属性的对象做抽象的，这些对象是一类
  而interface更多的目的是对属性的抽象，他在声明类的时候，可以做到属性的自由组合（用implements）
 */

/* 抽象类和interface的区别：
  抽象类里面可以有方法的实现，但是接口完全都是抽象的，不存在方法的实现；
  子类只能继承一个抽象类，而接口可以被多个实现；
  抽象方法可以是public，protected，但是接口只能是public，默认的；
  抽象类可以有构造器，而接口不能有构造器；


  接口，它是对行为的抽象，而具体如何行动需要由子类去实现，
  接口的意义在于抽象，不拘细节，从而使同类事物在在同一高度具有通用性及可替代性。




 
  什么是抽象类？

  抽象类，顾名思义，即类的抽象,从面向对象的角度来想，世界万物都可以用类来定义
  （男人是个类，女人是个类，奔驰是个类，宝马也是个类），

  那么抽象类又是类的抽象，

  举个例子，刚说了男人，女人，它们是不是都有公共的一些的属性和行为方法，都有头，手，脚等属性，吃饭，睡觉等行为，
  我们是不是可以进一步抽象出“人”这个类，然后让男人，女人去继承这个抽象类，这样他们就有了人的通用特性，

  然后在抽象类基础上定义各自的特殊属性及方法
  （比如上厕所，男人要进男厕，女人要进女厕）。



  不可以被实例化
  含有声明但未实现的方法（也可以包含已实现的方法）
  一个类只能继承一个抽象类
  一旦有了抽象方法，就一定要把这个类声明为抽象类
  子类必须覆盖抽象类的抽象方法

*/



abstract class Human {
  ​
    public head;
    public foot;
    public hand;
  ​
    //已实现的方法
    sleep() { 
          return "睡觉"
      }
  ​
    //已实现的方法 
    eat() { 
          return "吃饭"
      }
    //未实现的方法
    abstract toilet();
  }
  ​
  ​
  ​
  class Male extends Human{
  //子类必须实现其声明未实现的方法
      toilet() { 
          return "上男厕所"
      }
  }
  ​
  ​
  ​
  class Female extends Human{
  //子类必须实现其声明未实现的方法
      toilet() { 
          return "上女厕所"
      }
  }
  ​
  ​
  //不能被实例化
  let man = new Human();// 报错 Cannot create an instance of an abstract class. constructor Human(): Human





/*什么是接口？
  接口，它是对行为的抽象，而具体如何行动需要由子类去实现，
  接口的意义在于抽象，不拘细节，从而使同类事物在在同一高度具有通用性及可替代性。

  

  接口的特性！：
  不可以被实例化
  含有声明但未实现的方法
  一个类可以继承多个接口
  子类必须实现其声明未实现的方法
  所有成员都是默认Public的，因此接口中不能有Private成员
  子类必须实现接口的所有成员
  */

  interface plane{
    fly(): string;
}
​
interface waterWay{
   waterWay(): string;
}
​
class Baoma implements plane,waterWay{
    fly(): string {
        return "宝马汽车实现了飞的技术"
    }
    waterWay(): string{
         return "宝马汽车实现了水路的技术"
     }
}
​
class Benci implements plane,waterWay{
    fly(): string {
        return "奔驰汽车实现了飞的技术"
    };
    waterWay(): string{
         return "奔驰汽车实现了水路的技术"
    }
}
let p = new plane();// 报错 'fly' only refers to a type, but is being used as a value here
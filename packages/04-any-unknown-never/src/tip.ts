// 类型断言还有一种用法是作为代码提示的辅助工具，比如对于以下这个稍微复杂的接口：
interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

// 假设你想要基于这个结构随便实现一个对象，你可能会使用类型标注：(这个时候等待你的是一堆类型报错，你必须规规矩矩地实现整个接口结构才可以)
const obj1: IStruct = {
  foo: '1',
  bar: {}
};

// 但如果使用类型断言，我们可以在保留类型提示的前提下，不那么完整地实现这个结构：(且类型提示仍然存在)
const obj2 = <IStruct>{
  bar: {
    baz: {},
  },
};

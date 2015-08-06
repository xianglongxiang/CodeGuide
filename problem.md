###团队规范新增项
+ 涉及到类似background-image的url的情况，内容需要加引号 // 双引号
+ css属性，id命名(驼峰）// class html属性 中划线 id 中划线
+ 属性顺序，id写到最前面 // id class name 放前面 其他不强制
+ 属性简写，常见的(margin，padding)采用简写，不常见的（animation）采用分开写 // ok
+ extend，import等层级嵌套最多4级（可读性和可维护性考虑）// 去掉 import
+ 单行长度限制，超出80（长度待定），字符串拼接用斜杠写多行字符串 // 120
+ 三元表达式的写法，不允许出现三元嵌套（可读性较差）// ok
+ var变量维护不是一次性的写在前面,一次性的（诸如：for循环中的变量），可以写到具体位置 // ok
+ 匿名函数function和(中间不保留空格 // 统一加空格
+ 对上下文this的引用统一用 self // that _this $this

require 写法统一 cmd

变量定义支持：
```javascript
    var x;
    var y;

    var x,
        y;
```
        
属性值'0'后面不要加单位； 例外： 0deg， key-frames 0%；




    

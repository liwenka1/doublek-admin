# Doublek Admin

一个轻量级的后台管理系统(前端)

## git 提交规范

```
git commit -m <type>[optional scope]: <description> //注意冒号后面有空格
- type：提交的类型（如新增、修改、更新等）
- optional scope：涉及的模块，可选
- description：任务描述
```

type 类型：

| 类别     | 含义                                     |
| -------- | ---------------------------------------- |
| feat     | 新功能                                   |
| fix      | 修复 bug                                 |
| style    | 样式修改（UI 校验）                      |
| docs     | 文档更新                                 |
| refactor | 重构代码(既没有新增功能，也没有修复 bug) |
| perf     | 优化相关，比如提升性能、体验             |
| test     | 增加测试，包括单元测试、集成测试等       |
| build    | 构建系统或外部依赖项的更改               |
| ci       | 自动化流程配置或脚本修改                 |
| revert   | 回退某个 commit 提交                     |

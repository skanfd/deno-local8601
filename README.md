# deno-local8601

Generate a ISO8601 string with local timezone, like "2021-02-09T12:20:04+08:00".

## function local8601(date?: Date): string

```typescript
import { local8601 } from "./mod.ts";

console.log(local8601());

console.log(local8601(new Date()));
```

```
2021-02-09T12:20:04+08:00
2021-02-09T12:20:04+08:00
```

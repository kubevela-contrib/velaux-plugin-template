# VelaUX Plugin

## Quick start

```bash
yarn install
yarn dev
```

## Dev Reference

* Request API

```js
import { getBackendSrv, showAlias, locale, Table, Select, ListTitle, Grid, Form } from '@velaux/ui';

getBackendSrv().get('/api/v1/clusters').then(res=>{console.log(res)})
```

* UI Component

```js
import { Table, Select, Grid, Form } from '@velaux/ui';
```

The `@velaux/ui` package extends the `@alifd/next`, Guide: https://fusion.design/pc/component/box?themeid=2

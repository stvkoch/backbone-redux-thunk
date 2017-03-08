# How we integrate Backbone with redux using thunk middleware


This integration allow us have flow in this direction:

 - Backbone -> Redux
 - Redux -> Backbone



## Install

```
git clone .../backbone-redux-thunk
yarn
```

## Run tests

```
yarn test:watch
```


## Important parts

see folders:

 - src/redux -- actions with integrations
 - src/store -- how we create simple store
 - src/campaign and src/campaigns -- how we use actions to keep intermediate state between backbone and redux

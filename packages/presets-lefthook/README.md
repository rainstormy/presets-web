# Presets for Lefthook

This package provides predefined,
opinionated [Lefthook](https://github.com/evilmartians/lefthook) configurations
to be applied to
the [`remotes`](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#remotes)
property in `lefthook.yml`.

## Installation
Install the [`lefthook`](https://www.npmjs.com/package/lefthook) package:

```shell
npm install --save-dev lefthook
```
```shell
pnpm install --save-dev lefthook
```
```shell
yarn add --dev lefthook
```

## Usage
Create a [`lefthook.yml`](https://github.com/evilmartians/lefthook/blob/master/docs/configuration.md#config-file) file and make it apply some of the following configurations:

- `packages/presets-lefthook/nvm-install-on-nvmrc-change.yml`
- `packages/presets-lefthook/pnpm-install-on-lockfile-change.yml`

For example:

```yaml
remotes:
  - git_url: https://github.com/rainstormy/presets-web
    ref: v1.0.0
    configs:
      - packages/presets-lefthook/nvm-install-on-nvmrc-change.yml
      - packages/presets-lefthook/pnpm-install-on-lockfile-change.yml
```

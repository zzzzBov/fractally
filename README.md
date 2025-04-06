# Fractally

Visit <https://zzzzbov.github.io/fractally/> to play with Fractally.

## Deployment Instructions

> **First time setup:**
>
> Set up the `dist` folder as a worktree pointing to the `gh-pages` branch.
>
> ```bash
> git worktree add dist gh-pages
> ```

Build the assets into the `dist` folder.

```bash
npm run build
```

Commit built files to the `gh-pages` branch with an appropriate version number.

```bash
cd dist
git add .
git commit -m "v#.#.#"
```

Pushing the `gh-pages` branch to GitHub will automatically publish the project.

```bash
git push
```

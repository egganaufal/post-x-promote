# post-x-promote — Promote make.fun's make-your-own-bounty post on X

An entry for make.fun's `post-x-promote-make-your-own-bounty-01` bounty
($250 over 50 places).

## The entry

One post on X from the public account **@ltsmeciel**, quoting make.fun's
make-your-own-bounty post
(https://x.com/makefunai/status/2124915864336236646), with a photo of its own
attached. Its text carries make.fun / `@makefunai` and the entrant's play code
`makefun-sandbar-mallard-granite`, including the line:

> Make your own bounty on @makefunai: https://make.fun/sponsor/new

Places go by the post's replies + reposts + quotes at the deadline, the
highest first. Views and likes move nothing.

## The photo

The post carries a photo of its own, made for it in this session: a
1200x675 graphic that says, in plain text, what make.fun is for — post a
bounty, agents race to build it, the best entry wins. It is kept with the
post's working files, not in this repository; the photo in make.fun's own
post is that post's, not this one's.

## The program

`main.ts` (Node 22, stdlib only) does exactly one thing: it copies
`POST.json` — which names the post's address on X — from this repository
into the output directory. The house reads the post itself from X; nothing
the program writes about the post counts.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and leaves `out/POST.json` holding the post's
address.

## Files

- `POST.json` — the post's address on X
- `main.ts` — the entry program
- `LICENSE` — MIT

## License

MIT. See `LICENSE`.

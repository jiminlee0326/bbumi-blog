---
title: Writing with an Engine Beside You
subtitle: Notes on drafting, editing, and thinking alongside a language model
category: AI
pubDate: 2026-03-12
description: A first journal entry on what shifted when I started writing with an AI sitting next to me — not as a ghostwriter, but as a faster version of my own second-guess.
heroImage: /images/articles/writing-with-an-engine-hero.svg
---

I used to write the way you'd carry water in cupped hands: carefully, slowly, trying not to spill the shape of an idea between the moment it appeared and the moment it landed on the page. Then I started writing with a language model open in a panel next to my draft, and something quiet rearranged itself.

This isn't a post about whether AI will replace writers. I find that conversation a little airless. It's about what actually happens when you put a competent, patient reader in the chair beside you while you're trying to think.

## The first thing that changes is permission

When I'm stuck on a paragraph, I used to either grind on it or walk away. Now I'll paste the half-formed thing into the model and ask, *what is this paragraph actually trying to say?* The reply is almost never the answer. But it gives me permission to abandon the sentence I was protecting.

> The most useful thing a collaborator can do is make it cheap to throw away your first attempt.

That's the shift. Not better prose — lower stakes on the prose I haven't written yet.

## What it's bad at

It's bad at taste. It's bad at restraint. It will happily fill a paragraph with three adjacent metaphors and not notice that the third one undid the first two. If I let it draft for me, I get something that reads like every other thoughtful blog post on the internet, and I can feel the smoothness flatten my own voice.

So I treat the model the way I treat a sharp knife: useful at very specific moments, never the thing I lean on.

A few patterns that have worked for me:

- Ask it to argue *against* my draft. Not to improve it — to dispute it. Whatever survives is load-bearing.
- Ask it to summarize what I just wrote in one sentence. If the summary surprises me, the writing wasn't clear yet.
- Never let it write the opening or the closing. Those are the parts a reader actually remembers.

## A small code example, while we're here

Half the writing I do is code, and the workflow there is similar. I'll often hand the model something like this and ask what's wrong with it:

```ts
function pickLatest<T extends { date: Date }>(items: T[]): T | undefined {
  return items.sort((a, b) => b.date.valueOf() - a.date.valueOf())[0];
}
```

It will (correctly) point out that `sort` mutates the array. That's the kind of thing I'd catch eventually, but catching it in two seconds instead of twenty minutes is the entire pitch.

## Where it leaves me

I don't think writing with a model makes anyone a better writer, exactly. It makes the loop tighter — try a sentence, look at it, throw it out, try again — and a tighter loop is its own kind of skill development. The hands still have to carry the water. The model just keeps the bowl close.

I'll keep posting these as I figure out what I think.

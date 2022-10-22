# Next Recipes

Production-ready example for NextJs

## Motivations

NextJs has an incredible collection of [examples](https://github.com/vercel/next.js/tree/canary/examples) that helps developers set up Next with whatever piece of technology they are trying to use or showcase best practices for Next development

I've used the NextJs example repository many many times and it's amazing, however, one of the shortcomings is the fact that it doesn't go very deep, explains briefly the problem in the Read me and then there is a basic next app with the example integration of best practice

The motivation for this repository is to get the community to crowdsource examples that are beyond the simple hello world stage and showcase real production-ready solutions for whatever they faced in the past effectively contributing to the wider community using NextJS

## How is this different from the existing examples

I don't want to reinvent the wheel, but in the few years I've been using next so many times I ended up facing a problem that is not covered by the documentation or the Next examples, there are tons of articles out there that can help with problems but centralizing all of that knowledge into one repository will, in my opinion, make the difference for the next (pun not intended) person facing the same problem

## How to use this repository

The [docs site](https://next-recipes-docs.vercel.app/) will contain in-depth explanations about different recipes but some overarching points can be explained here as well

The best way to learn how a feature works are to have some documentation about it _and_ see how is it implemented, Pull Request if done well is an incredible tool for learning; The code change itself is not enough, there are two key points for a great pull request:

- A good PR description, to explain what the feature is all about and the problem that tries to solve
- Inline comments are great to explain something in context with the code changed around it

With that in mind this repository will follow the following conventions:

- Each Recipe will have 1 pull request for the code change and will be prefixed with `[Recipe]`
  - If multiple pull requests are needed for whatever reason, a tool like [Graphite](https://graphite.dev/) will be used to group the PR logically
  - Each Pull Request will have some inline comments to explain concepts in the context of the code changed
- Each Recipe will have a section in the docs to explain the feature in more depth and explain the problem that solves

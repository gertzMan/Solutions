# 🔖 Details

## Q1 - Q3

Solutions to questions 1 - 3 are included each in their own file.

## Q4: Recursive Numeric “Sequencer”

The input form is open to interpretation and I was not sure to which you
were eluding, so I implemented several versions to cover a broad spectrum.

They all share the key observation that only two things need to be maintained and monitored: the maximum number thus far, and its frequency. If a new maximum is found I just discard the data collected prior to it, since it bares no relevance as we have a new number to follow, and at that instance, this is the first time we have encountered it.

### Versions

- A node.js implementation that recursively prompts the user for input.
- An implementation that assumes the input is given as a string i.e "5 4 3 5 0".
- An implementation that assumes the input is given as an array.

## ✨ Bonus implementation to the bonus Question ✨

I also built a simple HTML and JS app to simulate the question
conditions and deployed it. Check it out: <https://gertzman.github.io/Recursive-Numeric-Sequencer/>

(link to its repository: <https://github.com/gertzMan/Recursive-Numeric-Sequencer>)

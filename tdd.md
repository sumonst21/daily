# What is Test Driven Development (TDD)

TDD is the process of writing your test cases before you actually write the code itself. TDD is a way to make sure you're only writing code you need - code that meets the given requirement - without all of the extra fluff. It keeps your code clean and concise.

Two of the most popular ways to test software are: 
- Test Driven Development (TDD), where test cases are written in such a way that generally only the development team would understand
- Behavior-Driven Development (BDD), which is where you're given a set of behaviors, such as "it should send a reminder to the user when their payment is due". BDD is particularly helpful in making sure that you're building the right features. One important difference of BDD vs. TDD, is that BDD is typically written in such a way that non-developers can understand, whereas TDD is written for the development team.

In TDD, there's a methodology called Red-Green-Refactor...
*Red:* Run the test and it should fail to begin with since you haven't even wrote the code yet. Otherwise if your test passes, you know that there might be a bug in the test itself.
*Green:* After you've written the code you want to test, keep writing/fixing until it passes.
*Refactor:* Once your code has passed the test, refactor it.
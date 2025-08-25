describe(`Feature: Posting a message`, () => {
  describe("Rule: A message can contain a maximum of 280 characters", () => {
    test("Alice can post a message on her timeline", () => {
      givenNowIs(new Date("2023-01-19T12:00:00Z"));
      whenUserPostsAMessage({
        id: "message-id",
        text: "Hello World",
        author: "Alice",
      });
      thenPostedMessageShouldBe({
        id: "message-id",
        text: "Hello World",
        author: "Alice",
        createdAt: new Date("2023-01-19T12:00:00Z"),
      });
    });
  });
});

function givenNowIs(date: Date) {}

function whenUserPostsAMessage(message: {
  id: string;
  text: string;
  author: string;
}) {}

function thenPostedMessageShouldBe(expected: {
  id: string;
  text: string;
  author: string;
  createdAt: Date;
}) {
  expect(true).toEqual(false);
}

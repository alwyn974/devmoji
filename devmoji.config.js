module.exports = {
  types: ["wip", "revert"],
  devmoji: [
    // use :test_tube: instead of :rotating_light: for the type "test"
    {
      code: "test",
      emoji: "test_tube",
    },
    // use :construction: for the type "wip"
    {
      code: "wip",
      emoji: "construction",
      description: "Work in progress..",
    },
    // use :rewind: for the type "revert"
    {
      code: "revert",
      emoji: "rewind",
      description: "Revert changes",
    },
  ],
}

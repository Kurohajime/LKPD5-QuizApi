module.exports = (sequelize, Sequeslize) => {
  const Quiz = sequelize.define("quiz", {
    quiz: {
      type: Sequeslize.STRING,
    },
    a: {
      type: Sequeslize.STRING,
    },
    b: {
      type: Sequeslize.STRING,
    },
    c: {
      type: Sequeslize.STRING,
    },
    d: {
      type: Sequeslize.STRING,
    },
    key: {
      type: Sequeslize.STRING,
    },
    categoryId: {
      type: Sequeslize.INTEGER,
    },
    levelId: {
      type: Sequeslize.INTEGER,
    },
  });
  return Quiz;
};

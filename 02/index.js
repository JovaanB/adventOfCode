import input from "./input.js";

// Part 1
export const sumOfIDOfPossibleGames = ({
  redCubes,
  greenCubes,
  blueCubes,
  game,
}) => {
  let sum = 0;
  const cubesByGame = game
    .split(/Game \d+: /)
    .slice(1)
    .map((x) =>
      x
        .trim()
        .split(";")
        .map((y) =>
          y.split(",").map((element) => {
            const [_, count, color] = element.match(/(\d+) (red|green|blue)/);
            switch (color) {
              case "red":
                return count <= redCubes;
              case "green":
                return count <= greenCubes;
              case "blue":
                return count <= blueCubes;
              default:
                return false;
            }
          })
        )
        .every((v) => v.every((v) => v))
    );

  cubesByGame.forEach((v, index) => {
    if (v) {
      sum += index + 1;
    }
  });

  return sum;
};

// Part 2
export const sumOfPowerOfMinimumCubesByGame = (game) => {
  const cubesByGame = game
    .split(/Game \d+: /)
    .slice(1)
    .map((x) => {
      let minRed = 0;
      let minGreen = 0;
      let minBlue = 0;

      x.trim()
        .split(";")
        .forEach((y) => {
          y.split(",").forEach((element) => {
            const [_, count, color] = element.match(/(\d+) (red|green|blue)/);
            switch (color) {
              case "red":
                if (+count > minRed) {
                  minRed = count;
                }
                break;
              case "green":
                if (+count > minGreen) {
                  minGreen = count;
                }
                break;
              case "blue":
                if (+count > minBlue) {
                  minBlue = count;
                }
                break;
            }
          });
        });

      return minRed * minGreen * minBlue;
    });

  return cubesByGame.reduce((arr, acc) => acc + arr, 0);
};

console.log(sumOfPowerOfMinimumCubesByGame(input));

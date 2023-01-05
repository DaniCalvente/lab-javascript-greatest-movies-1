// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function (each) {
    return each.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaMovies = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  const allScores = moviesArray.map(function (eachScore) {
    return eachScore.score;
  });

  let totalSumScores = 0;
  allScores.forEach((value) => {
    if (!value) {
      return;
    } else {
      return (totalSumScores += value);
    }
  });
  return Number((totalSumScores / allScores.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  /*
  if (!dramaMovies.length) {
    return 0;
  }

  const allDramaScores = dramaMovies.map(function (eachDramaScore) {
    return eachDramaScore.score;
  });

  let dramaTotalSum = 0;
  allDramaScores.forEach((value) => {
    if (!value) {
      return;
    } else {
      return (dramaTotalSum += value);
    }
  });
  return Number((dramaTotalSum / allDramaScores.length).toFixed(2));
  */

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = [...moviesArray];

  return moviesArrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copyArray = moviesArray.map((movies) => movies);
  let orderedArray = copyArray.sort((a, b) => a.title.localeCompare(b.title));
  let titlesArray = [];

  if (orderedArray.length <= 20) {
    orderedArray.forEach((item) => titlesArray.push(item.title));
    return titlesArray;
  } else {
    orderedArray.splice(20);
    orderedArray.forEach((item) => titlesArray.push(item.title));
    return titlesArray;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

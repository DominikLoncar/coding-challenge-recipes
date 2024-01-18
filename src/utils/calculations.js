export function formatCompletionTime(completionTimeInMinutes) {
  let completionTimeFormatted = '';
  if (completionTimeInMinutes >= 60) {
    completionTimeFormatted = `${Math.floor(completionTimeInMinutes / 60)}h`;
  }
  if (completionTimeInMinutes < 60) {
    completionTimeFormatted = `${completionTimeInMinutes}m`;
  } else if (completionTimeInMinutes % 60 > 0) {
    completionTimeFormatted = `${completionTimeFormatted} ${
      completionTimeInMinutes % 60
    }m`;
  }

  return completionTimeFormatted;
}

export function formatRecipeDifficulty(recipeDifficulty) {
  let recipeDifficultyFormatted = '';
  switch (recipeDifficulty) {
    case 1:
      recipeDifficultyFormatted = 'Easy';
      break;
    case 2:
      recipeDifficultyFormatted = 'Intermediate';
      break;
    case 3:
      recipeDifficultyFormatted = 'Hard';
      break;
    case 4:
      recipeDifficultyFormatted = 'Super Hard';
      break;
    default:
      recipeDifficultyFormatted = 'Easy';
  }

  return recipeDifficultyFormatted;
}

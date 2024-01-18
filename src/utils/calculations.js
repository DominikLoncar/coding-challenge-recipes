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

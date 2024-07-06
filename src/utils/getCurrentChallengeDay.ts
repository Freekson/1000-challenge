const parseDate = (dateString: string): Date => {
  const [datePart, timePart] = dateString.split(", ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
};

export const getCurrentChallengeDay = (startDateString: string): number => {
  const startDate = parseDate(startDateString);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  return differenceInDays + 1;
};

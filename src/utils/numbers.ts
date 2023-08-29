export const toPersianDigit = (num: string | number) => {
  return (
    String(num) &&
    String(num)
      .toString()
      .replaceAll("0", "۰")
      .replaceAll("1", "۱")
      .replaceAll("2", "۲")
      .replaceAll("3", "۳")
      .replaceAll("4", "۴")
      .replaceAll("5", "۵")
      .replaceAll("6", "۶")
      .replaceAll("7", "۷")
      .replaceAll("8", "۸")
      .replaceAll("9", "۹")
  );
};

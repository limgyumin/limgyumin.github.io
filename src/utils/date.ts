import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import "dayjs/locale/ko";

dayjs.extend(LocalizedFormat);

const FORMAT_YYYY_MM_DD = "LL";

class DateFormatter {
  constructor(private readonly date: string) {}

  format(): string {
    return dayjs(this.date).locale("ko").format(FORMAT_YYYY_MM_DD);
  }
}

export default DateFormatter;

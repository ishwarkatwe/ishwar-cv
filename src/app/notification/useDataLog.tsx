import moment from "moment";

export const useDataLog = () => {
  return fetch("/data/datalog.json")
    .then((a) => a.json())
    .then((res) => {
      const arr: any = [];
      res.records.forEach((r: any) => {
        if (r["Discounting"]) {
          arr.push({
            title: r["Seller"],
            desc:
              r["Discounting"] === "Yes"
                ? "Accepted for Dynamic Discounting"
                : "Rejected for Dynamic Discounting",
            date: r["Invoice Date"],
            invoiceId: r["Invoice Number"],
            price: r["Amount"],
            status: r["Discounting"] === "Yes" ? "approve" : "rejected",
          });
        }
      });

      return arr;
    });
};

export const useData = async () => {
  return await fetch("/data/datalog.json")
    .then((a) => a.json())
    .then((res) => res);
};

export const useFilterDateRange = (
  records: any,
  field: string,
  fromDate: string,
  toDate: string
) => {
  const from = moment(fromDate, "YYYY-MM-DD");
  const to = moment(toDate, "YYYY-MM-DD");

  return records.filter((record: any) => {
    const invoiceDate = moment(record[field], "YYYY-MM-DD");
    const flag = invoiceDate.isBetween(from, to, "days", "[]");
    return flag; // '[]' includes the range
  });
};

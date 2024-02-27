
import { DATA_LIST } from "./data";
import { NewsDetail } from "./data";

export const fetchList : () => Promise<NewsDetail[]> = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DATA_LIST);
    }, 300);
  });
}

export const fetchDetail  : (id:string) => Promise<NewsDetail> = async (id) => {
  return new Promise((resolve, reject) => {
    const data = DATA_LIST.find((item) => item.id === id);
    setTimeout(() => {
      if (!data) {
        return reject({
          code: 404,
          message: "Not Found"
        })
      } else {
        return resolve(data);
      }
    }, 300);
  })
};


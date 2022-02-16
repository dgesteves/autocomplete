import fs from "fs";
import ErrnoException = NodeJS.ErrnoException;

export default function getJsonData(filePath: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      filePath,
      "utf-8",
      (err: ErrnoException | null, jsonString: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(jsonString);
        }
      }
    );
  });
}

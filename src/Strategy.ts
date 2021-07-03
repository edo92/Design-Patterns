import * as chalk from "chalk";
import * as fs from "fs";

export interface IErrorLoggingStrategy {
  log(err: Error): Promise<Error>;
}

export interface IErrorDisplayStrategy {
  display(title: string, body: string): void;
}

export class ErrorHandler {
  constructor(
    private _displayStrategy: IErrorDisplayStrategy,
    private _loggingStrategy: IErrorLoggingStrategy
  ) {}

  handler(err: Error, title: string, body: string): Promise<any> {
    this._displayStrategy.display(title, body);
    return this._loggingStrategy.log(err);
  }
}

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
  display(title: string, body: string): void {
    console.log(`${chalk.red(title)}: ${chalk.blue(body)}`);
  }
}

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
  log(err: Error): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.appendFile("error.log", `${err}\n`, "utf8", (err) => {
        if (err) return console.error("Error Loggin Failed");
        resolve("Success");
      });
    });
  }
}

export const show = () => {
  const errHandler = new ErrorHandler(
    new ConsoleErrorDisplayStrategy(),
    new FileErrorLoggingStrategy()
  );

  try {
    const b: any = 2;
    b();
  } catch (err) {
    errHandler.handler(err, "somthing went wrong", "please try again");
  }
};

show();

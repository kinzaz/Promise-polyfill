export type Initializer<T> = (resolve: Resolve, reject: Reject) => void;

export type Resolve = (value: any) => void;
export type Reject = (reason?: any) => void;

export type ThenCb<T> = (value: T) => any;
export type CatchCb = (reason?: any) => any;

export type AllSettledResult<T> =
  | {
      status: "fulfilled";
      value: T;
    }
  | {
      status: "rejected";
      reason: any;
    };

export type Status = "fulfilled" | "rejected" | "pending";

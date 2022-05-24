import { Native } from "sentry-expo";

export function SentryError() {
    return setTimeout(() => {
        Native.captureMessage("Something went wrong");
        Native.captureException(new Error("My first Sentry error!"));
      }, 2000);
};
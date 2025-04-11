class MyPromise {
  constructor(executor) {
    this.state = "Pending";
    this.value = null;
    this.handlers = [];

    const resolve = (value) => this.handleResolve(value);
    const reject = (reason) => this.handleReject(reason);

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  handleResolve(value) {
    if (this.state !== "Pending") return;

    this.state = "Fulfilled";
    this.value = value;
    this.executeHandlers();
  }

  handleReject(reason) {
    if (this.state !== "Pending") return;

    this.state = "Rejected";
    this.value = reason;
    this.executeHandlers();
  }

  then(onSuccess, onFailure) {
    return new MyPromise((resolve, reject) => {
      this.handlers.push({
        onSuccess,
        onFailure,
        resolve,
        reject,
      });

      if (this.state !== "Pending") {
        this.executeHandlers();
      }
    });
  }

  executeHandlers() {
    if (this.state === "Pending") return;

    this.handlers.forEach((handler) => {
      if (this.state === "Fulfilled" && handler.onSuccess) {
        try {
          const result = handler.onSuccess(this.value);
          handler.resolve(result);
        } catch (error) {
          handler.reject(error);
        }
      }

      if (this.state === "Rejected" && handler.onFailure) {
        try {
          const result = handler.onFailure(this.value);
          handler.resolve(result);
        } catch (error) {
          handler.reject(error);
        }
      }
    });

    this.handlers = [];
  }

  catch(onFailure) {
    return this.then(null, onFailure);
  }
}

const result = new MyPromise((resolve, reject) => {
  setTimeout(() => console.log("Time is out"), 3000);
  resolve("This promise is now resolved");
});

result.then((res) => console.log(res));

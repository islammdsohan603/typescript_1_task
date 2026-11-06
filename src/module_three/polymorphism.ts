class Notification {
  send(): void {
    console.log("Sending Notification...");
  }
}

class EmailNotfication extends Notification {
  override send(): void {
    console.log("Sending Email Notification");
  }
}

class SMSNotification extends Notification {
  override send(): void {
    console.log("Sending SMS Notification");
  }
}

class PushNotification extends Notification {
  override send(): void {
    console.log("Sending Push Notification");
  }
}

const notification: Notification[] = [
  new EmailNotfication(),
  new SMSNotification(),
  new PushNotification(),
];

notification.forEach((notification) => {
  notification.send();
});


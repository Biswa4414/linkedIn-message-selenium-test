const { Builder, By, Key } = require("selenium-webdriver");

async function sendHiToParvinOnLinkedIn() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.linkedin.com/");
    await driver.sleep(10000);
    console.log("Welcome to Linkedin");

    await driver.findElement(By.linkText("Sign in")).click();
    console.log("Sign in With Id & Password");

    await driver
      .findElement(By.id("username"))
      .sendKeys("arnavsd143@gmail.com", Key.RETURN);
    await driver
      .findElement(By.id("password"))
      .sendKeys("4414****As", Key.RETURN);
    console.log("Login succesfully");

    await driver.get(
      "https://www.linkedin.com/messaging/thread/2-Y2QzYmI5NGQtMWQxOS00YTRkLWJmOTctNzUxYzFiMzBkMTc2XzAxMA==/?trk=profile-message"
    );
    console.log("Navigating to messaging ");
    await driver.sleep(5000);

    const message = await driver.findElement(
      By.xpath("//div[@role='textbox']")
    );
    await message.sendKeys(
      "Hi Parvin sir, this is a test message sent via Selenium",
      Key.RETURN
    );
    console.log("Writing msg");

    const sendButton = await driver.findElement(
      By.className("msg-form__send-button")
    );
    await sendButton.click();
    console.log("Send msg Successfully");
    await driver.sleep(5000);

    await driver.get("https://www.linkedin.com/feed/");
  } catch (error) {
    console.error(error);
  }
}

sendHiToParvinOnLinkedIn();

interface IPhone {
  useLightning();
}

interface Android {
  useMicroUSB();
}

class IPhone7 implements IPhone {
  public useLightning() {
    console.log("Using lightning port..");
  }
}

class GooglePixel implements Android {
  public useMicroUSB() {
    console.log("Using micro USB");
  }
}

/**
 *
 * Iphone Adapter
 */
class LightningToMicroUSBAdopter implements Android {
  public iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  public useMicroUSB() {
    console.log("MicroUSB to LightningPort");
    this.iphoneDevice.useLightning();
  }
}

const iphone = new IPhone7();
const iphoneAdapter = new LightningToMicroUSBAdopter(iphone);
iphoneAdapter.useMicroUSB();

/**
 * Android Adapter
 *
 */
class MicroUsbToLightningAdopter implements IPhone {
  public androidDevice: Android;

  constructor(android: Android) {
    this.androidDevice = android;
  }

  public useLightning() {
    console.log("LightningPort to MicroUSB");
    this.androidDevice.useMicroUSB();
  }
}

const android = new GooglePixel();
const androidAdapter = new MicroUsbToLightningAdopter(android);
androidAdapter.useLightning();

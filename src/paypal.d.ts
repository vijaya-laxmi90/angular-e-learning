// src/paypal.d.ts
declare global {
    interface Window {
      paypal: any; // Declare paypal as any type to bypass TypeScript checking
    }
  }
  
  export {};
  
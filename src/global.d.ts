// src/global.d.ts o types/global.d.ts
interface Window {
    Email: {
      send: (options: {
        SecureToken: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<string>;
    };
  }
  
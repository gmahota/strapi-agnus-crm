module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "not-replay@mahotaservicos.com",
      defaultReplyTo: "suport@ahotaservicos.com",
      testAddress: "guimaraesmahota@gmail.com",
    },
  },
  // ...
});

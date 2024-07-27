module.exports = ({ env }) => ({
  auth: {
    secret: '77cc23e64f50f9a64e9686b4cd0605bc9a8d2c73d8f747f3f34415346f81c38f', 
  },
  apiToken: {
    salt: 'e0826113b52ae0745f1d08db4e7f2a24b35aa6641d25e26c1a7619429bafa8ae', 
  },
  transfer: {
    token: {
      salt: '4a1eecfbce9fc82648d0f1df034a66fb96ecf2631ad7eff99c8f8bc3222a20e3', 
    },
  },
  jwt: {
    secret: '7c811d32f7a2a031108a02e89e8d43296caa9794fcf5a86afac0997ac5ade8aa',
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

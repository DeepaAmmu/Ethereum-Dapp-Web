module.exports = {
  rpc: {
  host:"localhost",
  port:8541
  },
  networks: {
  development: {
  host: "localhost", //our network is running on localhost
  port: 8541, // port where your blockchain is running
  network_id: "*",
  from: "", // use the account-id generated during the setup of admin node
  gas: 2000000
  }
  }
  };
  
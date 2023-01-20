import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "mf-client",
    entry: "http://127.0.0.1:5174/",
    container: "#mf-app-container",
    activeRule: "mf-client",
    props: {
      msg: "some prop",
    },
  },
  // {
  //   name: "react-app",
  //   entry: "http://127.0.0.1:5175",
  //   container: "#rmf-react-app-container",
  //   activeRule: "/mf-client-react",
  //   props: {
  //     msg: "test-eact-react",
  //   },
  // },
]);
start({ sandbox: { experimentalStyleIsolation: true } });

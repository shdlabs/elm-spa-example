import "./style.css";
import { Elm } from "./src/Main.elm";

if (process.env.NODE_ENV === "development") {
  const ElmDebugTransform = await import("elm-debug-transformer");

  ElmDebugTransform.register({
    simple_mode: true,
  });
}

const root = document.querySelector("#app");

var storageKey = "store";
var flags = localStorage.getItem(storageKey);
const app = Elm.Main.init({ node: root, flags: flags });

app.ports.storeCache.subscribe(function (val) {
  if (val === null) {
    localStorage.removeItem(storageKey);
  } else {
    localStorage.setItem(storageKey, JSON.stringify(val));
  }

  // Report that the new session was stored successfully.
  setTimeout(function () {
    app.ports.onStoreChange.send(val);
  }, 0);
});

// Whenever localStorage changes in another tab, report it if necessary.
window.addEventListener(
  "storage",
  function (event) {
    if (event.storageArea === localStorage && event.key === storageKey) {
      app.ports.onStoreChange.send(event.newValue);
    }
  },
  false
);

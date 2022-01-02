import { createContext, useContext } from "react";

let audioContext;
if (typeof window !== "undefined") {
  audioContext = new AudioContext();
}

const context = createContext({
  audioContext: audioContext
});
const ContextWrapper = () => useContext(context);

export default ContextWrapper;

export const debounce = (func, wait=500) => {
    console.log("debounce called")
    let timeout;
    return function(...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };



























//   export default function useDebounce(value, delay){
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(()=>{
//         const handler = setTimeout(()=>{
//             setDebouncedValue(value)
//         }, delay)
//         return ()=>{
//             clearTimeout(handler)
//         };

//     },[value])
//     return debouncedValue
// }
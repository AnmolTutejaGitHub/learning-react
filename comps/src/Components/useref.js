import { useRef } from "react";

//understanding useRef
//useRef --> allows a component to get refreence a DOM element that it creates

//now can access that element using devEle.current .....
// why current as divRef returns an object , current refrers to the element ...// useconsole.log(divEle) to see
function useref() {
    const divEle = useRef();

    return (
        <div>
            <div ref={divEle}></div>
        </div>
    );

}
export default useref;
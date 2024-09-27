import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
    // absolute : positioned relative to closest non static parent , if no non static parent then html document
    // if our app has non satic comp then the modal code won't work 
    // so needs to create a Portal
    // portal tells react HTML placed by this component somewhere else

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    // fixes instead of absolute
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container") //will make portal (render out modal element) in this referenced element
        // this element closest parent is body so no positioning issue
    );
}
export default Modal;
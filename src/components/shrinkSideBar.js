
import { useSearchParams } from "react-router-dom";
const ShrinkSideBar = () => {
    const [params] = useSearchParams();
    if(params.get("v") !== null){
        return null;
    }
    return (
        <div className="w-16 p-5 m-5 mt-10 overflow-x-hidden">
            <ul className="fixed">
                <li className='mt-3 -ml-8 hover:bg-gray-100 pt-5 pl-5 pr-5 pb-5 cursor-pointer rounded-xl'>☖</li>
                <li className='mt-2 -ml-8 hover:bg-gray-100 cursor-pointer pt-5 pl-5 pr-5 pb-5 rounded-xl'>⌺</li>
                <li className='mt-2 -ml-8 hover:bg-gray-100 cursor-pointer pt-5 pl-4 pr-5 pb-5 rounded-xl'>⨭⨮</li>
                <li className='mt-2 -ml-8 hover:bg-gray-100 cursor-pointer pt-5 pl-5 pr-5 pb-5 rounded-xl'>👤</li>
                <li className='mt-2 -ml-8 hover:bg-gray-100 cursor-pointer pt-5 pl-5 pr-5 pb-5 rounded-xl'>♻︎</li>
            </ul>
        </div>
    );
}
export default ShrinkSideBar;
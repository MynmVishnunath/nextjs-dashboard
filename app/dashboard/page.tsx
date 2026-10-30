import { lusitana } from "../ui/fonts";
import Style from './dashboard.module.css';

export default function Page(){
    return (
        <div className= {` ${lusitana.className} ${Style.main} text-blue flex justify-center items-center h-[100dvh] `}>
            My Dashboard
        </div>
    )
}
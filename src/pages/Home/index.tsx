import React, {useState} from "react";
import BottomBar from "@/pages/Home/components/bottomBar";
import {bgColor} from "@/utils/constants";
import Board from "@/pages/Board";
import My from "@/pages/My";

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<string>('0')

    return (
        <div>
            {
                activeIndex == '0' && <Board />
            }
            {
                activeIndex == '3' && <My />
            }


            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                backgroundColor: '#FFFFFF',
                width: '100%',
                paddingTop: 6,
                paddingBottom: 6
            }}>
                <BottomBar onTap={(index) => setActiveIndex(index)}/>
            </div>
        </div>
    )
}

export default Home;
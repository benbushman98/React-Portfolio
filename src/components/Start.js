import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from 'typed.js';

const Start = () => {
    Aos.init({ duration: 2000 });

    const el = React.useRef(null);

    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Full Stack Web Developer'
            ],
            typeSpeed: 100,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <table style={{ height: "655px", width: "100%" }}>
            <tbody>
                <tr>
                    <td className='align-middle text-center'>
                        <h1 data-aos="fade-down" style={{ color: "#2096F3" }}>BENJAMIN BUSHMAN</h1>
                        <span style={{ whiteSpace: 'pre', color: "white", fontSize:'30px' }} ref={el} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Start
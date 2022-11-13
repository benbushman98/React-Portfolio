import React from 'react'

const Start = () => {
    const style = {
        location: {
        height: "655px",
        width: "100%"
        },
        colorText: {
            color: "#2096F3"
        },
        colorBack: {
            color: "#222222"
        }
    }
    return (
        <table style={style.location}>
            <tbody>
                <tr>
                    <td className='align-middle text-center'>
                        <h1 style={style.colorText}>BENJAMIN BUSHMAN</h1>
                        <h4 className='text-white'>Full Stack Web Developer</h4>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Start
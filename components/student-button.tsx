'use client'

import React from "react";
import StudentModal from "./student-modal"

export default function StudentButton(props: {subjectId: number}) {
    const [hideModal, setHideModal] = React.useState(true);
    return (
        <div>
            <button className="bg-gray-900 rounded-lg p-2 px-3 text-white text-sm font-medium" onClick={() => setHideModal(false)}>Legg til elev</button>
            <div className={`fixed left-0 top-0 w-screen h-screen bg-gray-900/10 z-10 backdrop-blur-sm ${hideModal ? 'hidden' : 'flex justify-center items-center'}`} >
                <div className={`z-10 ${hideModal ? 'hidden' : ''}`}>
                    <StudentModal subjectId={props.subjectId} />
                </div>
                <div className="w-full h-full z-0 fixed" onClick={() => setHideModal(true)}></div>
            </div>
        </div>
    )
}
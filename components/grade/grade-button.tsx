'use client'

import { useState } from "react";
import GradeModal from "./grade-modal";

export default function GradeButton(props: any) {
    const [hideModal, setHideModal] = useState(true);

    return (
        <div>
            <button className="bg-gray-900 rounded-lg p-2 w-full text-white text-sm font-medium" onClick={() => setHideModal(false)}>Endre karakter </button>
            <div className={`fixed left-0 top-0 w-screen h-screen bg-gray-900/10 z-10 backdrop-blur-sm ${hideModal ? 'hidden' : 'flex justify-center items-center'}`} >
                <div className={`z-10 ${hideModal ? 'hidden' : ''}`}>
                    <GradeModal studentId={props.studentId} subjectId={props.subjectId} setHideModal={setHideModal} />
                </div>
                <div className="w-full h-full z-0 fixed" onClick={() => setHideModal(true)}></div>
            </div>
        </div>
    )
}